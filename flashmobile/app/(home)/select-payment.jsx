import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const SelectPayment = () => {
  const router = useRouter();
  const [selectedProvider, setSelectedProvider] = useState(null);

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

      {/* Mobile Money Selection Section */}
      <View className="mb-6">
        <Text className="text-[#181F30] text-[20px] font-bold mb-6">
          Select your mobile money
        </Text>

        {/* Show warning only when no provider is selected */}
        {!selectedProvider && (
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
      <View className="mt-auto mb-6">
        <TouchableOpacity
          className="bg-[#FFC000] rounded-xl py-4 mb-3"
          onPress={() => selectedProvider && router.push('/select-method')}
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
