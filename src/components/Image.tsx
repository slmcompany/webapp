import React, { useState } from 'react';
import fallbackImage from '../assets/images/replace-holder.png';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

const Image: React.FC<ImageProps> = ({ 
  src, 
  fallback = fallbackImage,
  alt = '', 
  className = '',
  ...props 
}) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  return (
    <img
      {...props}
      src={error ? fallback : src}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

export default Image; 