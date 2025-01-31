import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from '../hooks/useForm'
import { validateSignIn } from '../utils/validation'
import AuthLayout from '../components/AuthLayout'
import SocialButtons from '../components/SocialButtons'
import { MoneyTransferIllustration } from '../components/Illustrations'


export default function SignIn() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  
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
    // Here you would typically make an API call to authenticate
    console.log('Submitting:', formValues)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Navigate on success
    navigate('/dashboard')
  }

  return (
    <AuthLayout illustration={<MoneyTransferIllustration />} >
      <div>
        <h2 className="text-3xl font-semibold mb-1 text-center">Sign in</h2>
        <p className="text-gray-600 mb-6 text-center">Welcome back 👋</p>
        <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 
                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password here"
                className={`mt-1 block w-full px-3 py-2 pr-10 border rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500
                  ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 mt-1 pr-3 flex items-center"
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
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Signing in...' : 'Log in'}
          </button>
        </form>

        <SocialButtons />

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
