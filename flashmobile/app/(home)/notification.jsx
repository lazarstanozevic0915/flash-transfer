import { useRouter } from 'expo-router';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import done from '../../assets/image/icons/done.png'
import clear from '../../assets/image/icons/clear.png'
import group from '../../assets/image/icons/group.png'
import trash from '../../assets/image/icons/trashIcon.png'
import nftImage1 from '../../assets/image/nftImage1.png'
import nftImage2 from '../../assets/image/nftImage2.png'

const notification = () => {
    const router = useRouter(); 

    const nfts = [
        {
            image: nftImage1,
            desc: 'Discount on transaction fees - Bronze #44'
        },
        {
            image: nftImage2,
            desc: 'Discount on transaction fees - Silver #30'
        },
        {
            image: nftImage2,
            desc: 'Discount on transaction fees - Silver #30'
        },
        {
            image: nftImage1,
            desc: 'Discount on transaction fees - Bronze #44'
        },
    ]

      const notifications = [
        {
          action: 'Payment sent!',
          desc: 'your payment #1234 has been send',
          icon: done
        },
        {
          action: 'Payment Failed!',
          desc: 'your payment #1234 has been send',
          icon: clear
        },
        {
          action: 'Payment sent!',
          desc: 'your payment #1234 has been send',
          icon: done
        },
        {
          action: 'Payment Failed!',
          desc: 'your payment #1234 has been send',
          icon: clear
        },
        {
          action: 'Payment sent!',
          desc: 'your payment #1234 has been send',
          icon: done
        },
        {
          action: 'Invite friend',
          desc: 'Registration confirmed via affiliate link',
          icon: group
        },
        {
          action: 'Payment sent!',
          desc: 'your payment #1234 has been send',
          icon: done
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
            <View className='flex-row items-center w-full justify-center mb-5'>
                <Text className='text-[#181F30] text-[20px] font-semibold'>Notifications</Text>
                <TouchableOpacity className='rounded-full p-2.5 flex items-center bg-[#2475FF] justify-center'>
                    <Image source={trash} className='w-6 h-6 object-fill' />
                </TouchableOpacity>
            </View>
            <View className='gap-1'>
                {notifications.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    // onPress={() => handleSelect(item, type)}
                    className="p-3 border border-gray-100 bg-white flex-row rounded-2xl gap-3 mb-3"
                >
                    <View className='h-10 w-10 rounded-full bg-[#F4F5F7] flex items-center justify-center'>
                        <Image source={item.icon} />
                    </View>
                    <View className='flex-col items-start gap-2'>
                        <Text className='text-[16px] text-[#181F30] font-semibold' >{item.action}</Text>
                        <Text className='text-[14px] text-[#6E757D] max-w-[172px]'>{item.desc}</Text>
                    </View>
                </TouchableOpacity>
                ))}
            </View>
        </View>
    </ScrollView>
  )
}

export default notification