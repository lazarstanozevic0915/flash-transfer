import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from '../hooks/useForm'
import { validateSignIn } from '../utils/validation'
import AuthLayout from '../components/AuthLayout'
import SocialButtons from '../components/SocialButtons'
import { MoneyTransferIllustration } from '../components/Illustrations'
import { useAuth } from '../auth/AuthProvider'
import logo from '../assets/image/logo.svg'

export default function SignIn() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useForm(
    {
      email: '',
      password: '',
    },
    validateSignIn
  )

  const onSubmit = async (formValues) => {
    console.log('Submitting:', formValues)
    await new Promise(resolve => setTimeout(resolve, 1000))
    login()
    navigate('/')
  }

  return (
    <AuthLayout illustration={<MoneyTransferIllustration />}>
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className=' md:hidden flex justify-center items-center'>
          <img src={logo} alt="" className='h-[80px] w-[80px] object-contain' />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-600">Welcome back 👋</p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`block w-full px-4 py-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500 
                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password here"
                className={`block w-full px-4 py-3 border rounded-lg focus:ring-yellow-500 focus:border-yellow-500
                  ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot Password?
            </Link>
          </div>

          {errors.submit && (
            <p className="text-sm text-red-600">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 rounded-lg text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isSubmitting ? 'Signing in...' : 'Log in'}
          </button>
        </form>

        <SocialButtons />

        <p className="md:mt-8 text-center text-sm text-gray-600 mt-18">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
            Register now
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}