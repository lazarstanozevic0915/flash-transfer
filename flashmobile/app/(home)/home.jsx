import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import menu from '../../assets/image/menu-fries.png';
import usdt from '../../assets/image/icons/currency/usdt.png';
import fra from '../../assets/image/icons/currency/fra.png';
import downArrow from '../../assets/image/icons/arrow-short-down.png'
import swap from '../../assets/image/icons/exchange-vertical.png'

export default function home() {
  const router = useRouter();
  

  return (
  <ScrollView>
    <View className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5  font-aeonikBold h-screen">
        <View className="flex-row justify-between items-center">
          <TouchableOpacity className='flex items-center justify-center p-3 rounded-full bg-white'>
            <Image source={menu} className='w-6 h-6 object-fill'  />
          </TouchableOpacity>
          <Text className='text-[18px] text-[#181F30] font-bold'>Flash Transfer</Text>
          <TouchableOpacity className='flex items-center justify-center p-3 rounded-full bg-white'>
            <Image source={menu} className='w-6 h-6 object-fill'  />
          </TouchableOpacity>
        </View>

        <View className='flex-col relative gap-3.5'>
          <View className='bg-white flex-col items-center gap-3.5 rounded-2xl p-4 pb-12'>
            <View className='flex-row justify-between w-full items-center'>
              <TouchableOpacity className='flex-row items-center gap-2'>
                <Image source={usdt} className='w-9 h-9 object-fill ' />
                <Text className='text-[20px] text-[#181F30] font-normal'>USDT</Text>
                <Image source={downArrow} className='w-[12px] h-[6px] object-fill ' />
              </TouchableOpacity>
              <TouchableOpacity className='flex items-center justify-between py-1.5 px-3 border border-[#EBECED] rounded-3xl gap-2'>
                <Text className='text-[14px] text-[#181F30] font-normal'>Send</Text>
              </TouchableOpacity>
            </View>
            <Text>
              <TextInput 
                placeholder="0.9382"
                placeholderTextColor="#6E757D"
                className='text-[32px] font-semibold text-[#181F30]'
                keyboardType="numeric"
              />
            </Text>
            <Text className='text-[#181F30] text-[14px] font-normal'>Amount Send</Text>
          </View>
          <View className='bg-white flex-col items-center gap-3.5 rounded-2xl p-4 pb-12'>
            <View className='flex-row justify-between w-full items-center'>
              <TouchableOpacity className='flex-row items-center gap-2'>
                <Image source={fra} className='w-9 h-9 object-fill ' />
                <Text className='text-[20px] text-[#181F30] font-normal'>EUR</Text>
                <Image source={downArrow} className='w-[12px] h-[6px] object-fill ' />
              </TouchableOpacity>
              <TouchableOpacity className='flex items-center justify-between py-1.5 px-3 border border-[#EBECED] rounded-3xl gap-2'>
                <Text className='text-[14px] text-[#181F30] font-normal'>Receive</Text>
              </TouchableOpacity>
            </View>
            <Text>
              <TextInput 
                placeholder="0.9382"
                placeholderTextColor="#6E757D"
                className='text-[32px] font-semibold text-[#181F30]'
                keyboardType="numeric"
                aria-disabled={true}
              />
            </Text>
            <Text className='text-[#181F30] text-[14px] font-normal'>Received Amount</Text>
          </View>
          <TouchableOpacity className='bg-white p-3 rounded-full border-[6px] border-[#EFF0F1] items-center justify-center absolute top-[142px] left-[142px] ' >
            <Image source={swap} className='w-5 h-5 object-fill' />
          </TouchableOpacity>
        </View>
      
        <TouchableOpacity 
            className=" p-4 rounded-xl bg-[#FFC000] w-full"
            onPress={() => router.push('/cash')}
        >
            <Text className="text-[#181F30] text-center font-medium text-[14px]">Continue</Text>
        </TouchableOpacity>

        <View className='p-4 border rounded-2xl border-[#D3D8DD] flex-col gap-8'>
          <View className=' flex-col gap-2'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Exchange Rate</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>1 USDT = 1 EUR</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Fee</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>+2.50 EUR</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Transfer Time</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>1 Min</Text>
            </View>
          </View>
          <View className='h-[1px] w-full border border-[#D3D8DD] bg-[#D3D8DD]'></View>
          <View className=' flex-col gap-2'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Total to Pay</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>102.50 EUR</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Recipient Gets</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>100.00 EUR</Text>
            </View>
          </View>
        </View>

        <View className='flex-col gap-4'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-[#273240] text-[18px]font-semibold'>Recent transactions</Text>
            <TouchableOpacity className=' py-1.5 px-3 bg-[#2475FF] rounded-lg border'>
              <Text className='text-[#FFFFFF] text-[14px] font-medium'>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  </ScrollView>
  );
}

