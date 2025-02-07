import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import micheal from '../../assets/images/micheal.png';
import Billy from '../../assets/images/Billy.png';
import dollar from '../../assets/images/dollar.png';
import run from '../../assets/images/run.png';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

const Bank = ({ color = "black" }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <G clip-path="url(#clip0_498_21225)">
    <Path d="M11.5773 0.065567C10.9164 0.32338 0.505442 5.04838 0.374192 5.1515C0.28513 5.22182 0.163255 5.37182 0.102317 5.489C0.00856718 5.66244 -0.00549532 5.74682 0.00856718 6.05619C0.0226297 6.36557 0.0413797 6.44057 0.163255 6.61869C0.332005 6.85307 0.54763 7.01244 0.796067 7.07807C0.913255 7.11088 4.73357 7.12025 12.0976 7.11557L23.2258 7.1015L23.4179 6.99838C23.807 6.79213 23.9992 6.45463 23.9992 5.98588C23.9992 5.62963 23.8726 5.34838 23.6242 5.1515C23.5351 5.08119 20.9617 3.89994 17.9054 2.5265C12.6039 0.140567 12.3367 0.0280671 12.0461 0.0140047C11.8726 0.00931692 11.6711 0.0280671 11.5773 0.065567Z" fill={color}/>
    <Path d="M2.1572 8.14241C1.90876 8.31116 1.82907 8.56428 1.94157 8.83147C2.03063 9.04241 2.19938 9.15022 2.49001 9.17835L2.7197 9.20178V14.058V18.919L2.36345 18.9705C1.90876 19.0362 1.67438 19.1908 1.48688 19.5471C1.3697 19.7768 1.35563 19.8424 1.3697 20.1424C1.38376 20.4237 1.4072 20.508 1.52907 20.6815C1.68845 20.9112 1.90876 21.0705 2.15251 21.1408C2.26501 21.169 5.66345 21.1877 12.0056 21.1877C22.5666 21.1877 21.8869 21.2065 22.2478 20.9299C22.4681 20.7612 22.6416 20.3815 22.6416 20.0674C22.6369 19.458 22.2244 19.0315 21.5728 18.9565L21.2822 18.9237V14.058V9.18772H21.4463C21.54 9.18772 21.6806 9.1596 21.765 9.1221C22.1822 8.94866 22.2009 8.32991 21.7931 8.12366C21.7041 8.07678 19.5853 8.06272 11.9775 8.06272C2.9072 8.06272 2.26501 8.06741 2.1572 8.14241ZM8.1572 14.0627V18.9377H6.54001H4.92282V14.0627V9.18772H6.54001H8.1572V14.0627ZM13.5947 14.0627V18.9377H11.9775H10.3603V14.0627V9.18772H11.9775H13.5947V14.0627ZM19.0791 14.0627V18.9377H17.4619H15.8447V14.0627V9.18772H17.4619H19.0791V14.0627Z" fill={color}/>
    <Path d="M0.684375 21.8673C0.276563 22.0126 0 22.4251 0 22.8985C0 23.3626 0.229688 23.7282 0.632812 23.911C0.810938 23.9954 1.25625 24.0001 11.9906 24.0001C24.3281 24.0001 23.3297 24.0235 23.6672 23.7048C23.9625 23.4235 24.075 22.9782 23.9531 22.547C23.8875 22.3032 23.6391 22.036 23.3719 21.9095L23.1328 21.797L12 21.8017C2.65313 21.8017 0.839063 21.811 0.684375 21.8673Z" fill={color}/>
    </G>
    <Defs>
    <ClipPath id="clip0_498_21225">
    <Rect width="24" height="24" fill="white"/>
    </ClipPath>
    </Defs>
    </Svg>
);

const ReviewDetails = () => {
  const router = useRouter();

  return (
    <ScrollView>
    <View className="flex flex-col bg-[#EFF0F1] py-4 pt-16 px-4 font-aeonikBold">
      {/* Progress Header */}
      <View className="mb-6">
        <View className="flex-row items-center p-2">
          <View className="h-8 w-8 rounded-full bg-blue-500 items-center justify-center">
            <Text className="text-white font-medium">3/4</Text>
          </View>
          <View className='flex flex-col ml-3'>
          <Text className=" font-bold text-[18px] mb-2">Review Details</Text>
          <Text className="text-[#6E757D] text-[14px]">Enter the informations.</Text>
          </View>
        </View>
      </View>

      {/* Title Section */}
      <View className="mb-4 p-2">
        <Text className="text-[#181F30] text-[20px] font-bold mb-2">
        Review Details
        </Text>
        <Text className="text-[#6E757D] text-[18px]">
        Check all details informations.
        </Text>
      </View>

      {/* White Box with Details */}
      <View className="bg-white p-5 rounded-xl shadow-lg">
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
            <Text className="text-[#6E757D] text-[14px] font-medium">Bank Transfer</Text>
            <Bank />
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

      <View className="bg-white p-5 rounded-xl shadow-lg mt-8 mb-8">
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
            <Text className="text-[#6E757D] text-[14px] font-medium">Bank Transfer</Text>
            <Image
              source={dollar}
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
      <View className="mt-20 mb-2 justify-end">
        <TouchableOpacity
          className="bg-[#FFC000] rounded-xl py-4 mb-3"
          onPress={() => router.push('/reciept')}
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

export default ReviewDetails;
