export default function AuthLayout({ children, illustration }) {
    return (
      <div className="flex min-h-screen">
        <div className="md:w-1/2 bg-gray-50 p-12 md:flex items-center justify-center hidden">
          {illustration}
        </div>
        <div className="md:w-1/2 w-full md:p-12 flex items-center px-4 py-12 justify-center">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    )
  }
  