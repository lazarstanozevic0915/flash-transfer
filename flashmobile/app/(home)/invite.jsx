import { useRouter } from 'expo-router';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import frontBack1 from '../../assets/image/inviteBack.png'
import user1 from '../../assets/image/users/homeUser1.png'
import user2 from '../../assets/image/users/homeUser9.png'
import user3 from '../../assets/image/users/homeUser10.png'
import user4 from '../../assets/image/users/homeUser11.png'
import user5 from '../../assets/image/users/blog-user-1.png'
import user6 from '../../assets/image/users/homeUser12.png'
import user7 from '../../assets/image/users/homeUser2.png'
import user8 from '../../assets/image/users/homeUser3.png'
import { language } from '../../assets/image';

const invite = () => {
   const router = useRouter(); 
    
    const recipientsArray = [
        {
            name: 'Theresa Webb',
            location: 'USA',
            flag: language.usa,
            avatar: user1
        },
        {
            name: 'Kathryn Murphy',
            location: 'France',
            flag: language.french2,
            avatar: user2
        },
        {
            name: 'Bessie Cooper',
            location: 'France',
            flag: language.french2,
            avatar: user3
        },
        {
            name: 'Albert Flores',
            location: 'France',
            flag: language.french2,
            avatar: user4
        },
        {
            name: 'Devon Lane',
            location: 'France',
            flag: language.french2,
            avatar: user5
        },
        {
            name: 'Jenny Wilson',
            location: 'France',
            flag: language.french2,
            avatar: user6
        },
        {
            name: 'Marvin McKinney',
            location: 'France',
            flag: language.french2,
            avatar: user7
        },
        {
            name: 'Robert Fox',
            location: 'France',
            flag: language.french2,
            avatar: user8
        },
    ]

  return (
    <ScrollView className="flex-col gap-6 bg-white py-14 font-aeonikBold">
        <View className='flex-col gap-6'>
            <View className="flex-row justify-between items-center px-5">
                <View>
                    <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center gap-3">
                        <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                        <Text className="text-[#181F30] font-medium items-center text-[16px]">Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='relative flex-col items-center px-5 pb-3 gap-2'>
                <Image source={frontBack1} className='w-[215px] h-[155px] object-fill' />
                <Text className='text-[#181F30] text-[18px] font-semibold'>Invite Friends & Get Bonus</Text>
                <Text className='text-[#6E757D] text-[12px] max-w-[266px] text-center'>Invite your friends to join and earn exclusive bonuses for every referral!</Text>
            </View>
            <View className='bg-[#EFF0F1] p-5 rounded-t-2xl'>
                <View className='flex-row items-center w-full justify-between mb-5'>
                    <Text className='text-[#181F30] text-[20px] font-semibold'>Invite Friends</Text>
                </View>
                <ScrollView>
                    <View className='gap-3 pb-10'>
                            {
                                recipientsArray.map((user, index) => (
                                        <View className='rounded-2xl bg-white px-3.5 py-3.5 flex-row justify-between items-center' key={index} >
                                            <View className='flex-row gap-3'>
                                                <Image source={user.avatar} className='w-[38px] h-[38px] object-fill' />
                                                <View className='flex-col gap-2 items-start'>
                                                    <Text className='text-[#181F30] text-[16px] font-semibold'>{user.name}</Text>
                                                    <View className='flex-row items-center gap-2'>
                                                        <Image source={user.flag} className='w-5 h-5 object-fill' />
                                                        <Text className='text-[#6E757D] text-[12px]'>{user.location}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <TouchableOpacity className='bg-[#2475FF] rounded-md py-1.5 px-3'>
                                                <Text className='text-white text-[14px]'>Invite</Text>
                                            </TouchableOpacity>
                                        </View>
                                ))
                            }
                    </View>
                </ScrollView>
            </View>
        </View>
    </ScrollView>
  )
}

export default invite