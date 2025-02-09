import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Svg, { Circle } from "react-native-svg";
import { useUser } from '../../context/UserContext';

const SelectPayment = () => {
  const { activePay, activeReceive } = useUser();
  const router = useRouter();
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [error, setError] = useState(false);

  const providers = [
    {
      id: 'orange',
      name: 'Orange Money',
      description: 'Payment Mobile Money account',
      icon: require('../../assets/images/orange.png'),
    },
    {
      id: 'wave',
      name: 'Wave',
      description: 'Payment Mobile Money account',
      icon: require('../../assets/images/wave.png'),
    },
    {
      id: 'mtn',
      name: 'MTN',
      description: 'Payment Mobile Money account',
      icon: require('../../assets/images/mtn.png'),
    },
    {
      id: 'moov',
      name: 'Moov Money',
      description: 'Payment Mobile Money account',
      icon: require('../../assets/images/moov.png'),
    },
  ];

   const handleSubmit = () => {
            if (!selectedProvider ) {
              setError(true);
            } else {
                setError(false);
                if(activePay === 'cash' && activeReceive === 'mobile') {
                    router.push('/review-details-mobile');
                } else if ( activePay === 'wallet' && activeReceive === 'mobile') {
                    router.push('/review-details-cryptosm');
                    
                }
                else{
                    router.push('/review-details-mobile');
    
                }
            }
        };

  return (
    <View className="flex flex-col bg-[#EFF0F1] py-4 font-aeonikBold h-full">
      {/* Progress Header */}
            <View className="mb-6 flex-row items-center space-x-3 bg-white w-full px-4 pb-8 pt-16">
              {/* Half Blue - Half Gray Circle */}
              <View className="relative w-10 h-10 mr-4">
                <Svg height="40" width="40" viewBox="0 0 40 40">
                  {/* Gray Background Circle */}
                  <Circle cx="20" cy="20" r="18" stroke="#E0E0E0" strokeWidth="4" fill="none" />
                  {/* Blue Half Circle */}
                  <Circle cx="20" cy="20" r="18" stroke="#005CEE" strokeWidth="4" fill="none"
                    strokeDasharray="56.5 113" 
                    strokeLinecap="round"
                    transform="rotate(-90 20 20)" 
                  />
                </Svg>
                {/* Centered Text Inside Circle */}
                <View className="absolute inset-0 flex items-center justify-center">
                  <Text className="text-[#181F30] font-bold text-[14px]">2/4</Text>
                </View>
              </View>
      
              {/* Text Section */}
              <View className="flex flex-col">
                <Text className="text-[#181F30] text-[18px] font-bold">Payment Method</Text>
                <Text className="text-[#6E757D] text-[14px]">Enter the information.</Text>
              </View>
            </View>

      {/* Mobile Money Selection Section */}
      <View className="mb-6 px-4">
        <Text className="text-[#181F30] text-[20px] font-bold mb-6">
          Select your mobile money
        </Text>

        {/* Show warning only when no provider is selected */}
        { !selectedProvider && (
          <TouchableOpacity className="bg-red-100 rounded-xl p-4 mb-4 border border-[#FF3E24]">
            <Text className="text-[#FF3E24] text-[14px]">
              <Text className="rounded-full border border-[#FF3E24] p-2">!</Text> Select Mobile Money First
            </Text>
          </TouchableOpacity>
        )}

        {/* Provider Cards */}
        {providers.map((provider) => (
          <TouchableOpacity
            key={provider.id}
            className={`bg-white rounded-xl py-3 px-3 mb-3 flex-row items-center ${
              selectedProvider === provider.id ? 'border border-blue-500' : ''
            }`}
            onPress={() => setSelectedProvider(provider.id)}
          >
            <Image source={provider.icon} className="w-16 h-16 rounded-lg object-fill" />
            <View className="ml-3">
              <Text className="font-bold text-[15px] mb-2">{provider.name}</Text>
              <Text className="text-[#6E757D] text-[14px]">{provider.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Buttons */}
      <View className="mt-auto mb-6 px-4">
        <TouchableOpacity
          className="bg-[#FFC000] rounded-xl py-4 mb-3"
          onPress={handleSubmit}
          disabled={!selectedProvider}
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

export default SelectPayment;
