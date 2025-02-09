import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import micheal from '../../assets/images/micheal.png';
import Billy from '../../assets/images/Billy.png';
import dollar from '../../assets/images/dollar.png';
import bitcoin from '../../assets/images/bitcoin.png';
import run from '../../assets/images/run.png';
import Svg, { ClipPath, Defs, G, Path, Rect,Circle } from 'react-native-svg';

const ReviewDetailsCryptoR = () => {
  const router = useRouter();

  return (
    <ScrollView>
    <View className="flex flex-col bg-[#EFF0F1] py-4 font-aeonikBold">
      {/* Progress Header */}
                    <View className="mb-6 flex-row items-center space-x-3 bg-white w-full px-4 pb-8 pt-16">
                      {/* Half Blue - Half Gray Circle */}
                      <View className="relative w-10 h-10 mr-4">
                        <Svg height="40" width="40" viewBox="0 0 40 40">
                          {/* Gray Background Circle */}
                          <Circle cx="20" cy="20" r="18" stroke="#E0E0E0" strokeWidth="4" fill="none" />
                          {/* Blue Half Circle */}
                          <Circle cx="20" cy="20" r="18" stroke="#005CEE" strokeWidth="4" fill="none"
                            strokeDasharray="85 113" 
                            strokeLinecap="round"
                            transform="rotate(-90 20 20)" 
                          />
                        </Svg>
                        {/* Centered Text Inside Circle */}
                        <View className="absolute inset-0 flex items-center justify-center">
                          <Text className="text-[#181F30] font-bold text-[14px]">3/4</Text>
                        </View>
                      </View>
              
                      {/* Text Section */}
                      <View className="flex flex-col">
                        <Text className="text-[#181F30] text-[18px] font-bold">Receiver's info</Text>
                        <Text className="text-[#6E757D] text-[14px]">Enter the information.</Text>
                      </View>
                    </View>

      {/* Title Section */}
      <View className="mb-4 p-2 px-4 rounded-t-2xl">
        <Text className="text-[#181F30] text-[20px] font-bold mb-2">
        Review Details
        </Text>
        <Text className="text-[#6E757D] text-[18px]">
        Check all details informations.
        </Text>
      </View>

      {/* White Box with Details */}
      <View className="bg-white p-5 rounded-xl shadow-lg mx-4">
        <View className='flex flex-row items-center justify-between p-1'>

        <Text className="text-[#273240] text-[16px] font-semibold mb-3">Sender Details</Text>
        <TouchableOpacity onPress={() => router.push('/sender-details')}>
        <Text className="text-[#2475FF] text-[14px] font-normal mb-3">Edit</Text>
        </TouchableOpacity>
        </View>

        <View className='flex flex-row items-center justify-between border-t border-b border-[#EBECED] py-4 px-2'>
          <View className='flex flex-row'>
          <Image source={micheal} className="w-13 h-13 rounded-full border-2 border-[#FFC000] object-fill"/>
          <View>
            <Text className='text-[#181F30] font-semibold text-[16px] ml-3'>Numan Xaffar</Text>
            <Text className='text-[#6A6A6A] font-medium text-[16px] ml-3'>USA</Text>
            
          </View>
          </View>
          <TouchableOpacity className='rounded-xl bg-[#00C735] py-3 px-4'>
            <Text className='text-white text-[12px] font-normal'>KYC</Text>
          </TouchableOpacity>
        </View>
    

        {/* Transfer Details */}
        <View className=" pt-4 space-y-3">
          <View className="flex-row justify-between mb-4">
            <Text className="text-[#6E757D] text-[14px] font-medium">Cash</Text>
            <Image
              source={dollar}
              className="object-fill"
            />
          </View>

          <View className="flex-row justify-between mb-4">
            <Text className="text-[#6E757D] text-[14px] font-medium">Source of funds</Text>
            <Text className="text-black font-semibold text-[14px]">Saving</Text>
          </View>

          <View className="flex-row justify-between mb-2">
            <Text className="text-[#6E757D] text-[14px] font-medium">Purpose </Text>
            <Text className="text-black font-semibold text-[14px]">Saving</Text>
          </View>

        </View>
      </View>

      <View className="bg-white p-5 rounded-xl shadow-lg mt-8 mb-8 mx-4">
        <View className='flex flex-row items-center justify-between p-1'>

        <Text className="text-[#273240] text-[16px] font-semibold mb-3">Receiver details</Text>
        <TouchableOpacity onPress={() => router.push('/receiver-info')}>
        <Text className="text-[#2475FF] text-[14px] font-normal mb-3">Edit</Text>
        </TouchableOpacity>
        </View>

        <View className='flex flex-row items-center justify-between border-t border-b border-[#EBECED] py-4 px-2'>
          <View className='flex flex-row'>
          <Image source={Billy} className="w-13 h-13 rounded-full border-2 border-[#FFC000] object-fill"/>
          <View>
            <Text className='text-[#181F30] font-semibold text-[16px] ml-3'>Kamran Xaffar</Text>
            <Text className='text-[#6A6A6A] font-medium text-[16px] ml-3'>USA</Text>
          </View>
          </View>
        </View>
    

        {/* Transfer Details */}
        <View className=" pt-4 space-y-3">
          <View className="flex-row justify-between mb-3">
            <Text className="text-[#6E757D] text-[14px] font-medium">Crypto Wallet Adress: 0x................</Text>
            <Image
              source={bitcoin}
              className="object-fill"
            />
          </View>

          <View className="flex-row justify-between mb-6">
            <Text className="text-[#6E757D] text-[14px] font-medium">Receiver Country</Text>
            <Text className="text-black font-semibold text-[14px]">France</Text>
          </View>

          <View className="flex-row justify-between mb-3">
            <Text className="text-[#6E757D] text-[14px] font-medium">You sent</Text>
            <Text className="text-black font-semibold text-[14px]">100 EUR</Text>
          </View>
          <View className="flex-row justify-between mb-3">
            <Text className="text-[#6E757D] text-[14px] font-medium">Transfer rate </Text>
            <Text className="text-black font-semibold text-[14px]">1 EUR = 1 EUR</Text>
          </View>
          <View className="flex-row justify-between mb-6">
            <Text className="text-[#6E757D] text-[14px] font-medium">Fee</Text>
            <Text className="text-black font-semibold text-[14px]">+2.50 USDT</Text>
          </View>
          <View className="flex-row justify-between mb-3 border-t border-[#EBECED] pt-4">
            <Text className="text-[#181F30] text-[15px] font-semibold">Total to pay</Text>
            <Text className="text-black font-semibold text-[18px]">100 EUR</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-[#181F30] text-[15px] font-medium">Recipient Gets</Text>
            <Text className="text-[#181F30] font-semibold text-[16px]">100.00 EUR</Text>
          </View>
          <View className="flex-row justify-between mb-2 mt-4">
            <View className=" flex-row gap-3 items-center">
              <View className="rounded-full p-2 bg-[#F4F5F7]">
              <Image 
                source={run}
                className=" object-fill"
              />
              </View>
            <Text className="text-[#181F30] text-[15px] font-bold">Avalability</Text>
            </View>
        <TouchableOpacity className='rounded-full bg-[#00C735] py-3 px-4'>
            <Text className='text-white text-[13px] font-normal'>Immediate</Text>
          </TouchableOpacity>
          </View>

        </View>
      </View>

      

      {/* Bottom Buttons */}
      <View className="mt-20 mb-2 mx-4 justify-end">
        <TouchableOpacity
          className="bg-[#FFC000] rounded-xl py-4 mb-3"
          onPress={() => router.push('/payment-done')}
        >
          <Text className="text-center font-semibold">Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-transparent rounded-xl py-4 border border-[#6E757D]"
          onPress={() => router.back()}
        >
          <Text className="text-center text-[#6E757D] font-semibold">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default ReviewDetailsCryptoR;
