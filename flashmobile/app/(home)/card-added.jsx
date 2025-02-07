import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import success from '../../assets/images/card-success.png';
import { router } from 'expo-router';

const CardAdded = () => {
  return (
    <View className="flex-col bg-white justify-between items-center py-8 px-8 font-aeonikBold h-full">
        <View className="mt-20">
        <Image 
            source={success}
            className='h-[270px] w-[260px] mt-16'
        />
      <Text className='text-[24px] font-bold text-[#181F30] text-center mt-5'>Add Card Successful !</Text>
      <Text className='text-[16px] font-normal text-[#6E757D] text-center mt-3'>You Have Successfully top up the wallet</Text>
        </View>
        <TouchableOpacity 
            className=" p-4 rounded-lg mt-8 bg-[#FFC000] w-full"
            onPress={() => router.push('/home')}
        >
            <Text className="text-[#181F30] text-center font-semibold text-[14px]">Continue</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default CardAdded