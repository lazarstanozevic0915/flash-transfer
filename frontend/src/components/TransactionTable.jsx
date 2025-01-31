import React, { useMemo, useState, useEffect } from 'react';
import { MoreVertical, ChevronDown } from 'lucide-react';

const TransactionTable = ({ searchQuery, filterType }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const transactions = [
    { name: 'Jerome Bell', date: 'Dec 4, 2019 20:42', location: 'Senegal', amount: '$6700', status: 'Complete' },
    { name: 'Robert Fox', date: 'Dec 4, 2019 20:42', location: 'Nigeria', amount: '$2300', status: 'Pending' },
    { name: 'Darrell Steward', date: 'Dec 4, 2019 20:42', location: 'Ghana', amount: '$4500', status: 'Failed' },
    { name: 'Guy Hawkins', date: 'Dec 4, 2019 20:42', location: 'Senegal', amount: '$6700', status: 'Complete' },
    { name: 'Kristin Watson', date: 'Dec 4, 2019 20:42', location: 'Kenya', amount: '$3400', status: 'Pending' },
    { name: 'Dianne Russell', date: 'Dec 4, 2019 20:42', location: 'Senegal', amount: '$6700', status: 'Complete' },
    { name: 'Ralph Edwards', date: 'Dec 4, 2019 20:42', location: 'Uganda', amount: '$1200', status: 'Failed' },
    { name: 'Ronald Richards', date: 'Dec 4, 2019 20:42', location: 'Senegal', amount: '$6700', status: 'Complete' },
    { name: 'Floyd Miles', date: 'Dec 4, 2019 20:42', location: 'Tanzania', amount: '$5600', status: 'Pending' },
    { name: 'Eleanor Pena', date: 'Dec 4, 2019 20:42', location: 'Senegal', amount: '$6700', status: 'Complete' },
    { name: 'Arlene McCoy', date: 'Dec 4, 2019 20:42', location: 'Rwanda', amount: '$8900', status: 'Failed' },
  ];

  const handleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
      setShowFilterMenu(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'complete':
        return 'bg-[#00C735] text-white';
      case 'pending':
        return 'bg-[#FFA500] text-white';
      case 'failed':
        return 'bg-[#FF4444] text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Filter and search logic
  const filteredData = useMemo(() => {
    return transactions.filter(item => {
      const searchMatch = (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.amount.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const statusMatch = 
        statusFilter === 'all' || 
        item.status.toLowerCase() === statusFilter.toLowerCase();

      return searchMatch && statusMatch;
    });
  }, [searchQuery, statusFilter]);

  const FilterMenu = () => (
    <div 
      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-3">
        <div className="mb-3">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Status</h3>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full p-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="complete">Complete</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setStatusFilter('all')}
            className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800"
          >
            Reset
          </button>
          <button
            onClick={() => setShowFilterMenu(false)}
            className="px-3 py-1.5 text-sm bg-[#2475FF] text-white rounded-md hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full dm-sans">
      <div className="flex justify-end mb-4 relative">
        <button 
          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
          onClick={(e) => {
            e.stopPropagation();
            setShowFilterMenu(!showFilterMenu);
          }}
        >
          Filter by
          <ChevronDown className="w-4 h-4" />
        </button>
        {showFilterMenu && <FilterMenu />}
      </div>

      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-4 px-6 text-left text-[13px] text-[#6E757D] font-normal">Name</th>
            <th className="py-4 px-6 text-left text-[13px] text-[#6E757D] font-normal">Date</th>
            <th className="py-4 px-6 text-left text-[13px] text-[#6E757D] font-normal">Location</th>
            <th className="py-4 px-6 text-left text-[13px] text-[#6E757D] font-normal">Amount</th>
            <th className="py-4 px-6 text-left text-[13px] text-[#6E757D] font-normal">Status</th>
            <th className="py-4 px-6 text-left text-[13px] text-[#6E757D] font-normal">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white border border-[#F6F6F6] rounded-b-xl">
          {filteredData.length > 0 ? (
            filteredData.map((transaction, index) => (
              <tr key={index} className="border-t border-[#D3D8DD]">
                <td className="py-4 px-6 text-[14px] text-[#111827]">{transaction.name}</td>
                <td className="py-4 px-6 text-[14px] text-[#6E757D]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="#6E757D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10.6667 1.33333V4" stroke="#6E757D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5.33333 1.33333V4" stroke="#6E757D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 6.66667H14" stroke="#6E757D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {transaction.date}
                  </div>
                </td>
                <td className="py-4 px-6 text-[14px] text-[#6E757D]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 6.66667C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66667C2 5.07537 2.63214 3.54925 3.75736 2.42403C4.88258 1.29881 6.4087 0.666672 8 0.666672C9.5913 0.666672 11.1174 1.29881 12.2426 2.42403C13.3679 3.54925 14 5.07537 14 6.66667Z" stroke="#6E757D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 8.66667C9.10457 8.66667 10 7.77124 10 6.66667C10 5.5621 9.10457 4.66667 8 4.66667C6.89543 4.66667 6 5.5621 6 6.66667C6 7.77124 6.89543 8.66667 8 8.66667Z" stroke="#6E757D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {transaction.location}
                  </div>
                </td>
                <td className="py-4 px-6 text-[14px] text-[#111827]">{transaction.amount}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 text-[12px] rounded-full ${getStatusColor(transaction.status)}`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 px-6 relative">
                  <button 
                    className="p-1 hover:bg-gray-100 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDropdown(index);
                    }}
                  >
                    <MoreVertical className="w-4 h-4 text-[#6E757D]" />
                  </button>
                  {activeDropdown === index && (
                    <div className="absolute right-4 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="py-1">
                        <button className="w-full px-4 py-2 text-left text-[14px] text-[#2475FF] hover:bg-gray-50">
                          Track
                        </button>
                        <button className="w-full px-4 py-2 text-left text-[14px] text-[#6E757D] hover:bg-gray-50">
                          Show detail
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="py-8 text-center text-gray-500">
                No results found for your search criteria
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;