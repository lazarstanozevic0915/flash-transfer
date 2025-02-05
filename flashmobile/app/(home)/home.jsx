import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import menu from '../../assets/image/menu-fries.png'

export default function home() {
  const router = useRouter();
  

  return (
  <ScrollView>
    <View className="flex flex-col bg-[#EFF0F1] py-10 px-10  font-aeonikBold h-screen">
      {/* Back Button */}
        <View className="flex-row justify-between items-center">
          <TouchableOpacity className='flex items-center justify-center p-3 rounded-full bg-white'>
            <Image source={menu} className='w-6 h-6 object-fill'  />
          </TouchableOpacity>
          <Text className='text-[18px] text-[#181F30] font-bold'>Flash Transfer</Text>
          <TouchableOpacity className='flex items-center justify-center p-3 rounded-full bg-white'>
            <Image source={menu} className='w-6 h-6 object-fill'  />
          </TouchableOpacity>
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

