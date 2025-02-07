import { useRouter } from 'expo-router';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import frontBack from '../../assets/image/atm-card.png'



const myCard = () => {
    const router = useRouter(); 
    
    const MyCards = [
        {
            number: '6736 **** **** 7843',
            expiryDate: '02/05'
        },
    ]


  return (
    <ScrollView className="flex-col gap-6 bg-[#EFF0F1] py-14 font-aeonikBold">
        <View className='flex-col gap-6'>
            <View className="flex-row px-5 justify-between items-center">
                <View>
                    <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center gap-3">
                        <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                        <Text className="text-[#181F30] font-medium items-center text-[16px]">Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View className='flex-row items-center w-full justify-between mb-5'>
                    <Text className='text-[#181F30] text-[20px] font-semibold px-5'>My Cards</Text>
                </View>
                <Image source={frontBack}  />
                <ScrollView className='min-h-[450px] bg-white rounded-t-[20px] p-5'>
                    <View className='flex-col justify-between min-h-[420px]'>
                        <View className='flex-col gap-4 py-5 border-t border-[#EBECED] '>
                            <Text className='txet-[#181F30] text-[14px] font-semibold'>Card details</Text>
                            <ScrollView>
                                <View className='flex-col gap-5'>
                                    {
                                        MyCards.map((card, index) => 
                                            <View className='flex-col gap-3 border-[#EBECED] border-b pb-4' key={index}>
                                                <View className='flex-row justify-between items-center'>
                                                    <Text className='text-[#6E757D] text-[14px] font-medium'>
                                                        Card Number
                                                    </Text>
                                                    <Text className='text-[#000000] text-[14px] font-medium'>
                                                        {card.number}
                                                    </Text>
                                                </View>
                                                <View className='flex-row justify-between items-center'>
                                                    <Text className='text-[#6E757D] text-[14px] font-medium'>
                                                        Expiration Date
                                                    </Text>
                                                    <Text className='text-[#000000] text-[14px] font-medium'>
                                                        {card.expiryDate}
                                                    </Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <TouchableOpacity className='w-full bg-[#FFC000] py-4 items-center rounded-xl'>
                            <Text className='text-[14px] text-[#181F30] font-medium'>+ Add Card</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    </ScrollView>
  )
}

export default myCard