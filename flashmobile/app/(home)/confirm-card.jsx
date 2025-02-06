import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

import downArrow from '../../assets/image/icons/arrow-short-down.png';
import back from '../../assets/image/back2.png';
import mastercard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/Visa.png';
import add from '../../assets/images/add.png';
import atm from '../../assets/images/ATM.png';

const ConfirmCard = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Toggle between Mastercard & Visa
  const [cardType, setCardType] = useState(mastercard);

  const toggleCardType = () => {
    setCardType((prevCard) => (prevCard === mastercard ? visa : mastercard));
  };

  return (
    <View className="flex flex-col bg-[#EFF0F1] py-4 pt-16 px-4 font-aeonikBold h-full">
      {/* Back Button */}
      <View className="flex-row items-start mb-2">
        <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
          <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
          <Text className="text-gray-800 font-semibold items-center text-[16px] ml-3">Back</Text>
        </TouchableOpacity>
      </View>

      <View className="my-4">
        <Text className="text-[20px] font-bold">Confirm Card</Text>
      </View>

      <View className='rounded-2xl flex items-center border-white'>
        <Image 
          source={atm}
          className='object-fill w-[460px]'
        />
      </View>

      {/* Form Fields */}
      <View className="space-y-4 mt-4">
        {/* Card Holder Name */}
        <Text className="font-semibold text-[14px] mb-2">Card Holder Name</Text>
        <TextInput
          placeholder="Numan Xafar"
          placeholderTextColor="#6E757D"
          value={name}
          onChangeText={setName}
          className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
        />

        {/* Card Number */}
        <Text className="font-semibold text-[14px] mb-4">Card Number</Text>
        <View className="relative w-full">
          <TextInput
            placeholder="2367   7823   2367   7823"
            placeholderTextColor="#6E757D"
            className="border p-4 rounded-md text-[14px] bg-[#FFFFFF] border-[#D3D8DD] w-full mb-2"
          />
          {/* Clickable Card Type Image */}
          <TouchableOpacity className="absolute right-3 top-1/2 -translate-y-1/2" onPress={toggleCardType}>
            <Image source={cardType} className="w-[32px] h-[20px]" />
          </TouchableOpacity>
        </View>

        {/* Expiry Date & CVV */}
        <View className="flex-row space-x-4 gap-2 mb-2 mt-4">
          <View className="flex-1">
            <Text className="font-semibold text-[14px] mb-2">Expiry Date</Text>
            <TextInput
              placeholder="11/12"
              placeholderTextColor="#6E757D"
              value={date}
              onChangeText={setDate}
              className="border bg-white border-[#EBECED] p-4 rounded-2xl"
            />
          </View>

          <View className="flex-1">
            <Text className="font-semibold text-[14px] mb-2">3-digit CVV</Text>
            <TextInput
              placeholder="354"
              placeholderTextColor="#6E757D"
              value={cvv}
              onChangeText={setCvv}
              className="border bg-white border-[#EBECED] p-4 rounded-2xl"
            />
          </View>
        </View>
      </View>

      {/* Add New Card Button */}
      <View className="mt-auto mb-2 ">
        <TouchableOpacity className="bg-[#FFC000] rounded-xl py-4 flex-row items-center justify-center" onPress={() => router.push('')}>
          <Text className="text-center text-black font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmCard;
