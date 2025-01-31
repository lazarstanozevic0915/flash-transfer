export default function AuthLayout({ children, illustration }) {
    return (
      <div className="flex min-h-screen">
        <div className="w-1/2 bg-gray-50 p-12 flex items-center justify-center">
          {illustration}
        </div>
        <div className="w-1/2 p-12 flex items-center justify-center">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    )
  }
  