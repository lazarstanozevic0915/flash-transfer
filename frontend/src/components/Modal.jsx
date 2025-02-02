export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 backdrop-blur-[2px]"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex md:min-h-full min-h-[85%] md:mt-0 mt-29 min-w-screen items-center justify-center px-20 max-md:px-2 py-8 max-md:w-full">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white p-4 shadow-xl">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
          >
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}