import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import downArrow from '../assets/image/icons/arrow-short-down.png'

const DateSelection2 = ({ onDateChange }) => {
  const [year, setYear] = useState('Year');
  const [month, setMonth] = useState('Month');
  const [day, setDay] = useState('Day');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleSelect = (value, type) => {
    switch (type) {
      case 'year':
        setYear(value);
        break;
      case 'month':
        setMonth(value);
        break;
      case 'day':
        setDay(value);
        break;
    }
    setActiveDropdown(null);
    if (onDateChange) {
      onDateChange({ year, month, day });
    }
  };

  const renderDropdown = (type, data, value) => {
    return (
      <View className="flex-1">
        <TouchableOpacity
          onPress={() => setActiveDropdown(type)}
          className="bg-white flex-row justify-between items-center rounded-xl px-5 py-4 mr-2"
        >
            <Text className="text-gray-600">{value}</Text>
            <Image
                source={downArrow}
                className="w-[12px] h-[6px]"
            />
        </TouchableOpacity>

        <Modal
          visible={activeDropdown === type}
          transparent={true}
          animationType="slide"
        >
          <TouchableOpacity 
            className="flex-1 bg-black/50"
            onPress={() => setActiveDropdown(null)}
          >
            <View className="bg-white mt-auto rounded-t-xl">
              <View className="p-4 border-b border-gray-200 flex-row justify-between items-center">
                <Text className="font-semibold text-lg">Select {type}</Text>
                <TouchableOpacity onPress={() => setActiveDropdown(null)}>
                  <Text className="text-blue-500">Done</Text>
                </TouchableOpacity>
              </View>
              <ScrollView className="max-h-72">
                {data.map((item) => (
                  <TouchableOpacity
                    key={item}
                    onPress={() => handleSelect(item, type)}
                    className="p-4 border-b border-gray-100"
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  };

  return (
    <View>
      <Text className="font-semibold text-[14px] mb-2">Date of Birth</Text>
      <View className="flex-row">
        {renderDropdown('year', years, year)}
        {renderDropdown('month', months, month)}
        {renderDropdown('day', days, day)}
      </View>
    </View>
  );
};

export default DateSelection2;