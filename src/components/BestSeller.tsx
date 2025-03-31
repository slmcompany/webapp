import React, { useEffect, useState } from 'react';
import { ProductCombo, bestSellerApi } from '../mocks/bestSellerApi';
import { formatCurrency } from '../utils/format';
import '../styles/scrollbar.css';

export const BestSeller: React.FC = () => {
  const [combos, setCombos] = useState<ProductCombo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const data = await bestSellerApi.getTopSellingCombos(4);
        setCombos(data);
      } catch (error) {
        console.error('Error fetching best seller combos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCombos();
  }, []);

  if (loading) {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex overflow-x-auto gap-3 pb-4 -mx-4 px-4 scrollbar-hide">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-xl min-w-[40%] w-[40%]">
              <div className="aspect-square bg-gray-200 animate-pulse" />
              <div className="p-3 space-y-2">
                <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#0A0E15]">Bán chạy</h2>
        <button className="text-[#ED1C24] flex items-center gap-1">
          Tất cả
          <span className="text-lg">→</span>
        </button>
      </div>
      <div className="flex overflow-x-auto gap-3 pb-4 -mx-4 px-4 scrollbar-hide">
        {combos.map((combo) => (
          <div key={combo.id} className="bg-white rounded-xl overflow-hidden min-w-[40%] w-[40%]">
            <div className="relative">
              <div className="aspect-square bg-[#F5F5FA]">
                <img 
                  src={combo.image} 
                  alt={combo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 left-2">
                <span className="text-xs px-2 py-1 bg-[#FFECED] text-[#ED1C24] rounded-full">
                  {combo.badge || 'ON-GRID'}
                </span>
              </div>
              {combo.discountPercent > 0 && (
                <div className="absolute top-2 right-2 bg-[#ED1C24] text-white text-xs px-2 py-1 rounded-full">
                  -{combo.discountPercent}%
                </div>
              )}
            </div>
            <div className="p-3 flex flex-col gap-1">
              <h3 className="text-sm font-medium text-[#0A0E15] line-clamp-2">
                {combo.name}
              </h3>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-[#ED1C24]">
                  {formatCurrency(combo.discountedPrice)}
                </p>
                {combo.discountPercent > 0 && (
                  <p className="text-xs text-[#7B7D9D] line-through">
                    {formatCurrency(combo.originalPrice)}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 