import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import back from '../../assets/image/back2.png';
import wallet from '../../assets/images/Wallet Default.png';

const AddNewCard = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [cvv, setCvv] = useState('');



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
        <Text className="text-[20px] font-bold">Add New Card</Text>
      </View>

      <View className='rounded-2xl flex items-center border-white border-8'>
        <Image 
          source={wallet}
          className='object-fill'
        />
      </View>

      {/* Form Fields */}
      <View className="space-y-4 mt-4">
        {/* Card Holder Name */}
        <Text className="font-semibold text-[14px] mb-2">Card Holder Name</Text>
        <TextInput
          placeholder="|"
          placeholderTextColor="#6E757D"
          value={name}
          onChangeText={setName}
          className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
        />

        {/* Card Number */}
        <Text className="font-semibold text-[14px] mb-4">Card Number</Text>
        <View className="relative w-full">
          <TextInput
            placeholder="|"
            placeholderTextColor="#6E757D"
            className="border p-4 rounded-md text-[14px] bg-[#FFFFFF] border-[#D3D8DD] w-full mb-2"
          />
        </View>

        {/* Expiry Date & CVV */}
        <View className="flex-row space-x-4 gap-2 mb-2 mt-4">
          <View className="flex-1">
            <Text className="font-semibold text-[14px] mb-2">Expiry Date</Text>
            <TextInput
              placeholder="|"
              placeholderTextColor="#6E757D"
              value={date}
              onChangeText={setDate}
              className="border bg-white border-[#EBECED] p-4 rounded-2xl"
            />
          </View>

          <View className="flex-1">
            <Text className="font-semibold text-[14px] mb-2">3-digit CVV</Text>
            <TextInput
              placeholder="|"
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
        <TouchableOpacity className="bg-[#FFC000] rounded-xl py-4 flex-row items-center justify-center" onPress={() => router.push('/scan-card')}>
          <Text className="text-center text-black font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddNewCard;
