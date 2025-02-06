import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const SelectMethod = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('cash');

  const methods = [
    {
      id: 'cash',
      name: 'Cash',
      icon: require('../../assets/images/orange.png'),
    },
    {
      id: 'wave',
      name: 'Wave',
      icon: require('../../assets/images/wave.png'),
    },
    {
      id: 'mtn',
      name: 'MTN',
      icon: require('../../assets/images/mtn.png'),
    },
    {
      id: 'moov',
      name: 'Moov Money',
      icon: require('../../assets/images/moov.png'),
    },
  ];

  const selected = methods.find((method) => method.id === selectedMethod);

  return (
    <View className="flex flex-col bg-[#EFF0F1] py-4 pt-16 px-4 font-aeonikBold h-full">
      {/* Progress Header */}
      <View className="mb-6">
        <View className="flex-row items-center mb-1">
          <View className="h-8 w-8 rounded-full bg-blue-500 items-center justify-center">
            <Text className="text-white font-medium">2/4</Text>
          </View>
          <Text className="ml-3 font-bold text-lg">Payment Method</Text>
        </View>
        <Text className="text-gray-500 ml-11">Enter the informations.</Text>
      </View>

      {/* Title Section */}
      <View className="mb-4 p-2">
        <Text className="text-[#181F30] text-[20px] font-bold mb-2">
          Choose delivery method
        </Text>
        <Text className="text-[#6E757D] text-[18px]">
          Choose delivery method in mobile money,{"\n"}bank deposit, cash pickup.
        </Text>
      </View>

      {/* White Box with Details */}
      <View className="bg-white p-5 rounded-xl shadow-lg">
        <Text className="text-[#273240] text-[14px] font-semibold mb-3">Receiving Method</Text>

        {/* Dropdown Placeholder */}
        <TouchableOpacity
          className="flex-row items-center border border-[#E0E0E0] rounded-lg p-3 mb-4"
          onPress={() => setSelectedMethod(selectedMethod)}
        >
          <Image source={selected.icon} className="w-8 h-8 mr-3" />
          <Text className="font-semibold text-[16px]">{selected.name}</Text>
        </TouchableOpacity>

        {/* Transfer Details */}
        <View className=" pt-4 space-y-3">
          <View className="flex-row justify-between mb-2">
            <Text className="text-[#6E757D] text-[14px]">You sent</Text>
            <Text className="text-black font-bold text-[14px]">100 EUR</Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text className="text-[#6E757D] text-[14px]">Transfer rate</Text>
            <Text className="text-black font-bold text-[14px]">1 EUR = 1 EUR</Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text className="text-[#6E757D] text-[14px]">Fee</Text>
            <Text className="text-black font-bold text-[14px]">+2.50 EUR</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-[#6E757D] text-[14px]">Transfer Time</Text>
            <Text className="text-black font-bold text-[14px]">1 Min</Text>
          </View>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View className="mt-auto mb-6">
        <TouchableOpacity
          className="bg-[#FFC000] rounded-xl py-4 mb-3"
          onPress={() => router.push('')}
        >
          <Text className="text-center font-semibold">Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-transparent rounded-xl py-4 border border-[#6E757D]"
          onPress={() => router.back()}
        >
          <Text className="text-center text-[#6E757D] font-semibold">Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectMethod;
