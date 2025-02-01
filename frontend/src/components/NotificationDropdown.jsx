import React from 'react';
import { Check, X, Users } from 'lucide-react';

const NotificationDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Payment sent!',
      description: 'your payment #1234 has been send',
      icon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      id: 2,
      type: 'error',
      title: 'Payment Failed!',
      description: 'your payment #1234 has been send',
      icon: <X className="w-4 h-4 text-red-500 " />
    },
    {
      id: 3,
      type: 'success',
      title: 'Payment sent!',
      description: 'your payment #1234 has been send',
      icon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      id: 4,
      type: 'error',
      title: 'Payment Failed!',
      description: 'your payment #1234 has been send',
      icon: <X className="w-4 h-4 text-red-500" />
    },
    {
      id: 5,
      type: 'success',
      title: 'Payment sent!',
      description: 'your payment #1234 has been send',
      icon: <Check className="w-4 h-4 text-green-500" />
    },
    {
      id: 6,
      type: 'invite',
      title: 'Invite friend',
      description: 'Registration confirmed via affiliate link',
      icon: <Users className="w-4 h-4 text-blue-500" />
    },
    {
      id: 7,
      type: 'success',
      title: 'Payment sent!',
      description: 'your payment #1234 has been send',
      icon: <Check className="w-4 h-4 text-green-500" />
    }
  ];

  return (
    <div className="absolute right-0 top-6 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100">
      {/* Header */}
      <div className="p-4 border-b border-gray-100">
        <h3 className="text-base font-medium">Notifications</h3>
      </div>

      {/* Notifications List */}
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="px-4 py-3 hover:bg-gray-50 flex items-start space-x-3"
          >
            <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-[#F4F5F7]">
              {notification.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {notification.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;