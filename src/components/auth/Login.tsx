import React, { useEffect } from 'react'
import { Form, Input, Button, Toast } from 'antd-mobile'
import { useAuthStore } from '../../stores/authStore'
import { useNavigate } from 'react-router-dom'

interface LoginCredentials {
  phone: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, isAuthenticated } = useAuthStore()

  useEffect(() => {
    // Redirect to home if already authenticated
    if (isAuthenticated) {
      navigate('/home', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const onFinish = async (values: LoginCredentials) => {
    await login(values.phone, values.password)
    if (!error) {
      Toast.show({
        content: 'Đăng nhập thành công!',
        icon: 'success',
      })
    } else {
      Toast.show({
        content: error === 'Invalid credentials' ? 'Số điện thoại hoặc mật khẩu không đúng' : error,
        icon: 'fail',
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-primary text-center mb-2">Đăng nhập</h1>
        <p className="text-gray-600 text-center mb-8">Chào mừng bạn trở lại!</p>
        
        <Form
          layout='vertical'
          onFinish={onFinish}
          footer={
            <Button
              block
              type='submit'
              color='primary'
              loading={isLoading}
              className="h-11 text-base font-medium rounded-lg mt-4"
            >
              Đăng nhập
            </Button>
          }
        >
          <Form.Item
            name='phone'
            label='Số điện thoại'
            rules={[
              { required: true, message: 'Vui lòng nhập số điện thoại' },
              { pattern: /^[0-9]{10}$/, message: 'Số điện thoại không hợp lệ' }
            ]}
          >
            <Input 
              placeholder='Nhập số điện thoại của bạn'
              className="h-11 text-base rounded-lg"
            />
          </Form.Item>

          <Form.Item
            name='password'
            label='Mật khẩu'
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input
              placeholder='Nhập mật khẩu'
              type='password'
              className="h-11 text-base rounded-lg"
            />
          </Form.Item>
        </Form>

        <div className="text-center mt-6">
          <a 
            href="#" 
            className="text-primary text-sm hover:text-primary/80 transition-colors"
            onClick={(e) => { 
              e.preventDefault()
              Toast.show({ content: 'Tính năng đang phát triển' })
            }}
          >
            Quên mật khẩu?
          </a>
        </div>
      </div>
    </div>
  )
} 