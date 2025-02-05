import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import back from '../../assets/image/icons/backButton.png'

export default function home() {
  const router = useRouter();
  

  return (
<ScrollView>
  <View className="flex-1 bg-white py-2 px-10  font-aeonikBold h-screen">
    {/* Back Button */}
    <View className="flex-1 flex-row items-center justify-between gap-10  mb-8">
      <TouchableOpacity onPress={() => router.push('/sign-up')} className="flex-row items-center">
        <Image source={back} className="w-[30px] h-[30px] object-fill" />
        <Text className="text-gray-800 font-semibold text-[16px] ml-3">Back</Text>
      </TouchableOpacity> 
      <Text className='font-bold text-[18px] flex justify-center items-center'>Flash Transfer</Text>
      <Image source={back} className="w-[30px] h-[30px] object-fill" />
    </View>

    
    <TouchableOpacity 
                className=" p-4 rounded-lg mt-8 bg-[#FFC000] w-full"
                onPress={() => router.push('/cash')}
            >
                <Text className="text-[#181F30] text-center font-semibold text-[14px]">Continue</Text>
            </TouchableOpacity>
  </View>
</ScrollView>

  );
}
