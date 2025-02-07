import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'

const settings = () => {
    const router = useRouter(); 
    const [ activePage, setActivePage]  = useState('affiliate');

  return (
    <ScrollView className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5 font-aeonikBold">
        <View className='flex-col gap-6'>
            <View className="flex-row justify-between items-center">
                <View>
                    <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center gap-3">
                        <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                        <Text className="text-[#181F30] font-medium items-center text-[16px]">Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='my-5 gap-5'>
                <View className='flex-row items-center w-full justify-between '>
                    <Text className='text-[#181F30] text-[20px] font-semibold'>Affiliation</Text>
                </View>
                <View className='flex-row mb-8 gap-4 border-b border-[#D3D8DD]'>
                    <TouchableOpacity onPress={() => setActivePage('affiliate')} className={`px-3 py-2.5 text-[14px] ${activePage === 'affiliate' && 'border-b border-[#2475FF]'}`}>
                        <Text className={`${activePage === 'affiliate' ? 'text-[#2475FF]' : 'text-[#6E757D]'}`}>My Affiliate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActivePage('history')} className={`px-3 py-2.5 text-[14px] ${activePage === 'history' && 'border-b border-[#2475FF]'}`}>
                        <Text className={`${activePage === 'history' ? 'text-[#2475FF]' : 'text-[#6E757D]'}`}>History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActivePage('leaderboard')} className={`px-3 py-2.5 text-[14px] ${activePage === 'leaderboard' && 'border-b border-[#2475FF]'}`}>
                        <Text className={`${activePage === 'leaderboard' ? 'text-[#2475FF]' : 'text-[#6E757D]'}`}>Leaderboard</Text>
                    </TouchableOpacity>
                </View>    
                {
                    activePage === 'affiliate' && (
                        <View className='gap-4'>
                            <View className='items-center gap-2.5 py-5 px-4 rounded-2xl bg-white'>
                                <Text className='text-[#181F30] text-[22px] font-semibolde'>26$ earned</Text>
                                <Text className='text-[#6E757D] w-[80%] leading-6 text-[14px] text-center ' >Every time someone rents a vehicle or
                                rents their own vehicle using your referral link, you receive 3% of the rental amount.</Text>
                            </View>    
                        </View>
                    )
                }
                {
                    activePage === 'history' && (
                        <View>

                        </View>
                    )
                }
                {
                    activePage === 'leaderboard' && (
                        <View>

                        </View>
                    )
                }
            </View>
        </View>
    </ScrollView>
  )
}

export default settings