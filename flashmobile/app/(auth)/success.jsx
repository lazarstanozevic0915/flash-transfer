import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import success from '../../assets/images/success.png';
import { router } from 'expo-router';

const Success = () => {
  return (
    <View className="flex-1 bg-white justify-center items-center py-16 px-8 font-aeonikBold">
        <Image 
            source={success}
            className='h-[290px] w-[260px]'
        />
      <Text className='text-[24px] font-bold text-[#181F30] text-center mt-5'>Your Account is Set!</Text>
      <Text className='text-[16px] font-normal text-[#6E757D] text-center mt-3'>You Have Successfully top up the wallet</Text>
        <TouchableOpacity 
            className=" p-4 rounded-lg mt-8 bg-[#FFC000] w-full"
            onPress={() => router.push('/home')}
        >
            <Text className="text-[#181F30] text-center font-semibold text-[14px]">Get Started</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Success