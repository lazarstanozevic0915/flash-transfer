import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import { PasswordIllustration } from '../components/Illustrations'

export default function ForgotPassword() {
  return (
    <AuthLayout illustration={<PasswordIllustration />}>
      <div>
        <h2 className="text-2xl font-semibold mb-1 text-center">Forgot Password</h2>
        <p className="text-gray-600 mb-6 text-center">Reset your password to securely regain access to your account</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter your Email to reset your password</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Send an email
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="text-blue-600 hover:text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
