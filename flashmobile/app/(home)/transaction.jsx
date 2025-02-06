import { useRouter } from 'expo-router';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import user1 from '../../assets/image/users/homeUser1.png'
import user2 from '../../assets/image/users/homeUser2.png'
import user3 from '../../assets/image/users/homeUser3.png'
import user4 from '../../assets/image/users/homeUser4.png'
import user5 from '../../assets/image/users/homeUser5.png'
import user6 from '../../assets/image/users/homeUser6.png'
import user7 from '../../assets/image/users/homeUser7.png'
import user8 from '../../assets/image/users/homeUser8.png'

const transaction = () => {

    const router = useRouter(); 

    const transactions = [
    {
        name: 'Jane Cooper',
        date: '24 May, 2020',
        action: 'Send',
        amount: '$396.84',
        avatar: user4
    },
    {
        name: 'Marvin McKinney',
        date: '24 May, 2020',
        action: 'Receive',
        amount: '$396.84',
        avatar: user1
    },
    {
        name: 'Guy Hawkins',
        date: '24 May, 2020',
        action: 'Receive',
        amount: '$396.84',
        avatar: user2
    },
    {
        name: 'Kathryn Murphy',
        date: '24 May, 2020',
        action: 'Receive',
        amount: '$396.84',
        avatar: user5
    },
    {
        name: 'Esther Howard',
        date: '24 May, 2020',
        action: 'Send',
        amount: '$396.84',
        avatar: user6
    },
    {
        name: 'Robert Fox',
        date: '24 May, 2020',
        action: 'Receive',
        amount: '$396.84',
        avatar: user7
    },
    {
        name: 'Annette Black',
        date: '24 May, 2020',
        action: 'Receive',
        amount: '$396.84',
        avatar: user8
    },
    {
        name: 'Ralph Edwards',
        date: '24 May, 2020',
        action: 'Send',
        amount: '$396.84',
        avatar: user3
    },
    ]
          

  return (
    <ScrollView className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5  font-aeonikBold">
        <View className="flex-row mb-8 justify-between items-center">
            <View>
                <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center gap-3">
                    <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                    <Text className="text-[#181F30] font-medium items-center text-[16px]">Back</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <View className='flex-row items-center w-full justify-between mb-5'>
                <Text className='text-[#181F30] text-[20px] font-semibold'>My Transaction</Text>
            </View>
            <View className='gap-3'>
                {
                    transactions.map((user, index) => (
                        <View className='rounded-2xl bg-white px-3.5 py-3.5 flex-row justify-between items-center' key={index} >
                            <View className='flex-row gap-2'>
                            <Image source={user.avatar} />
                            <View className='flex-col gap-2 items-start'>
                                <Text className='text-[#181F30] text-[16px] font-semibold'>{user.name}</Text>
                                <Text className='text-[12px] text-[#6E757D] font-normal'>{user.date}</Text>
                            </View>
                            </View>
                            <View className='flex-col gap-2 items-end'>
                                <Text className={`text-[12px] font-medium ${user.action === 'Send' ? 'text-[#FF3E24]' : 'text-[#00C735]'}`}>{user.action}</Text>
                                <Text className='text-[14px] text-[#181F30] font-medium'>{user.amount}</Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    </ScrollView>
  )
}

export default transaction