import React, { useState } from 'react';
import Footer from '../components/Footer';
import logo from '../assets/image/logo.svg'
import { NavLink } from 'react-router-dom'
import Sidebar from '../components/SideBar';
import visa from "../assets/image/icons/Visa.svg";
import Navbar from '../components/Navbar';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';


// Card Component
const Card = ({ number, name, expiry, isActive }) => {
  return (
    <div className={`w-full max-w-md h-62 bg-orange-500 rounded-2xl p-6 text-white shadow-lg 
      ${isActive ? 'block' : 'hidden'}`}>
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-8 bg-white/20 rounded" />
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-white/40 rounded-full" />
          <div className="w-6 h-6 bg-white/20 rounded-full" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-lg tracking-wider">{number}</div>
        <div className="flex justify-between">
          <span>{name}</span>
          <span>{expiry}</span>
        </div>
      </div>
    </div>
  );
};

// Modal Component
const AddCardModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-115 max-md:w-[95%] max-md:h-[75%] max-md:overflow-hidden">
        <div className="flex justify-between items-center mb-6">
        <div className='flex flex-col items-center'>
          <h3 className="text-xl text-center font-semibold mb-4">Add new Card</h3>
          <p className='text-gray-600 font-normal text-center'>Enter the information of your beneficiary who will receive the amount of your transaction.</p>
        </div>
          <button onClick={onClose} className="-mt-18 text-gray-900 ">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Card Number</label>
              <input 
                type="text" 
                placeholder="0000 0000 0000 0000"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm mb-1">Expiry Date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div className="w-24">
                <label className="block text-sm mb-1">CVC/CVV</label>
                <input 
                  type="text" 
                  placeholder="***"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Cardholder Name</label>
              <input 
                type="text" 
                placeholder="Full name here"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="saveCard" />
              <label htmlFor="saveCard">Save Card</label>
            </div>
            <button 
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
            >
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CardListItem = ({ cardNumber, status }) => {
    const statusColors = {
      Active: 'bg-green-500',
      Blocked: 'bg-red-500'
    };
  
    return (
      <div className="flex items-center justify-between px-4 py-2 border border-gray-200 rounded-lg mb-3">
        <div className="flex items-center gap-4">
          <img src={visa} alt="Visa" className="h-8 w-12 object-contain" />
          <div>
            <p className="text-xs text-gray-500">Card number</p>
            <p>{cardNumber}</p>
          </div>
        </div>
        <span className={`px-4 py-1 rounded-full text-white text-sm ${statusColors[status]}`}>
          {status}
        </span>
      </div>
    );
  };

  const Settings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentView, setCurrentView] = useState('sidebar');
    const [currentCard, setCurrentCard] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
    const cards = [
      { number: '2367 7823 7856 9837', name: 'Numan Xafar', expiry: '11/12' },
      { number: '2367 7823 7856 9837', name: 'Numan Xafar', expiry: '11/12' }
    ];
  
    const cardList = [
      { cardNumber: '3210 **** **** 4008', status: 'Active' },
      { cardNumber: '3210 **** **** 4008', status: 'Active' },
      { cardNumber: '3210 **** **** 4008', status: 'Blocked' },
      { cardNumber: '3210 **** **** 4008', status: 'Active' },
      { cardNumber: '3210 **** **** 4008', status: 'Active' }
    ];
  
    React.useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const nextCard = () => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    };
  
    const prevCard = () => {
      setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
    };
  
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          {isMobile ? (
            <div className="w-full">
              {currentView === 'sidebar' ? (
                <Sidebar isMobile={true} onNavigate={setCurrentView} />
              ) : (
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6">
                    <button 
                      onClick={() => setCurrentView('sidebar')}
                      className="text-gray-600"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <h1 className="text-2xl font-semibold ml-2">My Cards</h1>
                    <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    + Add new Card
                  </button>
                  </div>
  
                  <div className="relative mb-8">
                    {cards.map((card, index) => (
                      <Card key={index} {...card} isActive={index === currentCard} />
                    ))}
                    
                    <div className="flex justify-center gap-2 mt-4">
                      {cards.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${
                            idx === currentCard ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
  
                    <button 
                      className="absolute opacity-5 left-0 top-1/2 -translate-y-1/2"
                      onClick={prevCard}
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      className="absolute opacity-5 right-0 top-1/2 -translate-y-1/2"
                      onClick={nextCard}
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
  
                  <div className="space-y-2">
                    {cardList.map((card, index) => (
                      <CardListItem 
                        key={index}
                        cardNumber={card.cardNumber}
                        status={card.status}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Sidebar />
              <main className="flex-1 p-6 w-screen mr-28 ml-8">
                <div className="flex justify-between items-center ml-6 mb-4">
                  <h1 className="text-3xl font-semibold">My Cards</h1>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    + Add new Card
                  </button>
                </div>
                <span className='text-gray-200'><hr /></span>
                <div className="grid grid-cols-2 gap-3 mb-8 mt-8">
                  {cards.map((card, index) => (
                    <Card key={index} {...card} isActive={true} />
                  ))}
                </div>
  
                <div className="space-y-2">
                  {cardList.map((card, index) => (
                    <CardListItem 
                      key={index}
                      cardNumber={card.cardNumber}
                      status={card.status}
                    />
                  ))}
                </div>
              </main>
            </>
          )}
        </div>
  
        <AddCardModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={() => {
            setIsModalOpen(false);
          }}
        />
        <Footer />
      </div>
    );
  };
  
  export default Settings