import { Link } from 'react-router-dom'
import AuthLayout from '../components/AuthLayout'
import { PasswordIllustration } from '../components/Illustrations'
import logo from '../assets/image/logo.svg'
import api from '../api/axios'
import { useState } from 'react'

export default function ForgotPassword() {
  const [ email, setEmail ] = useState()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await api.post('/forgot-password', 
        {
          "email" : email
        }
      )
      alert(response.data.statusDesc);
      return response.data.statusDesc
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthLayout illustration={<PasswordIllustration />}>
      <div>
        <div className=' md:hidden flex justify-center items-center  -mt-40 mb-3'>
          <img src={logo} alt="" className='h-[80px] w-[80px] object-contain' />
        </div>
        <h2 className=" text-3xl font-semibold md:mb-1 mb-3 text-center">Forgot Password</h2>
        <p className="text-gray-600 mb-6 text-center text-sm">Reset your password to securely regain access <br /> to your account</p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Enter your Email to reset your password</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent font-medium rounded-md shadow-sm text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
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
