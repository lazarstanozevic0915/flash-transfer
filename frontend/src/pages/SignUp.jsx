import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from '../hooks/useForm'
import { validateSignUp } from '../utils/validation'
import AuthLayout from '../components/AuthLayout'
import SocialButtons from '../components/SocialButtons'
import { MoneyTransferIllustration } from '../components/Illustrations'
import logo from '../assets/image/logo.svg'
import { language } from '../assets/image'

export default function SignUp() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
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
      confirmPassword: '',
      location: '',
      marketing: false,
    },
    validateSignUp
  )

  const onSubmit = async (formValues) => {
    // Here you would typically make an API call to register
    console.log('Submitting:', formValues)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Navigate on success
    navigate('/signIn')
  }

  return (
    <AuthLayout illustration={<MoneyTransferIllustration />}>
      <div>
        <div className=' md:hidden flex justify-center items-center'>
              <img src={logo} alt="" className='h-[80px] w-[80px] object-contain' />
        </div>
        <h2 className="text-3xl font-semibold mb-4 text-center">Create an account</h2>
        <div>
        <p className="md:text-gray-600 md:mb-6 md:text-center hidden">
          Let's get started with your 30 days free trial
        </p>
        <p className="md:hidden text-gray-800 text-lg font-semibold text-center mb-10">Register Your Account ✍️</p>
        </div>
        
        <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Send From
            </label>
            <div className='relative w-full '>
                <div className='absolute left-3 top-2.5 border-r  '><img src={language.english} alt="" className='w-6 h-6 mr-2' /> </div>
                <input type="text" id='country' className='border p-2.5 pl-14 rounded-md text-[14px] border-[#D3D8DD] w-full' placeholder='Choose your Location' required />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                </div>
              </div>
          </div>

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
              Set Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Set your password"
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

          <div>
            <label className="block text-sm font-medium text-gray-700">
             Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Re-enter your password"
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


          <div className="flex items-center">
            <input
              type="checkbox"
              name="marketing"
              checked={values.marketing}
              onChange={(e) => handleChange({
                target: {
                  name: 'marketing',
                  value: e.target.checked,
                },
              })}
              className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-600">
              If you DO NOT wish to receive marketing information about our products and special offers, please check this box
            </label>
          </div>

          {errors.submit && (
            <p className="text-sm text-red-600">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <SocialButtons />

        <p className="md:mt-6 text-center text-sm text-gray-600 mt-12">
          Already have an account?{' '}
          <Link to="/" className="text-blue-600 hover:text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}