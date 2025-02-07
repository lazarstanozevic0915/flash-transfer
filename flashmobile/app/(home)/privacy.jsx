import { useRouter } from 'expo-router';
import React from 'react'
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import frontBack from '../../assets/image/recipientAds.png'
import frontBack2 from '../../assets/image/recipientAds2.png'
import user1 from '../../assets/image/users/homeUser1.png'
import user2 from '../../assets/image/users/homeUser9.png'
import user3 from '../../assets/image/users/homeUser10.png'
import user4 from '../../assets/image/users/homeUser11.png'
import user5 from '../../assets/image/users/blog-user-1.png'
import user6 from '../../assets/image/users/homeUser12.png'
import user7 from '../../assets/image/users/homeUser2.png'
import user8 from '../../assets/image/users/homeUser3.png'
import { language } from '../../assets/image';

const privacy = () => {
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
      <ScrollView className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5 font-aeonikBold">
          <View className='flex-col pb-10 gap-6'>
              <View className="flex-row justify-between items-center">
                  <View>
                      <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center gap-3">
                          <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                          <Text className="text-[#181F30] font-medium items-center text-[16px]">Back</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <View className='my-4 gap-[30px]'>
                <View className='gap-4'>
                    <Text className='text-[#181F30] text-[18px] font-semibold'>Privacy Policy</Text>
                    <Text className='text-[#6E757D] text-[14px] w-[335px] pr-5 font-normal leading-7'>At Flash Transfer, we respect your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.</Text>
                </View>
                <View className='gap-4'>
                    <Text className='text-[#181F30] text-[18px] font-semibold'>1. Information We Collect</Text>
                    <View className='flex-row gap-2 px-3'>
                        <Text className='text-[30px] -mt-4'>.</Text>
                        <Text className='text-[#6E757D] text-[14px] w-[295px] pr-5 font-normal leading-7 '>Personal Information: Name, email, phone number, payment details, and transaction history.</Text>
                    </View>
                    <View className='flex-row gap-2 px-3'>
                        <Text className='text-[30px] -mt-4'>.</Text>
                        <Text className='text-[#6E757D] text-[14px] w-[295px] pr-5 font-normal leading-7 '>Non-Personal Information: Device data, IP address, and app usage statistics.</Text>
                    </View>
                </View>
                <View className='gap-4'>
                    <Text className='text-[#181F30] text-[18px] font-semibold'>2. How We Use Your Information</Text>
                    <View className='flex-row gap-2 px-3'>
                        <Text className='text-[30px] -mt-4'>.</Text>
                        <Text className='text-[#6E757D] text-[14px] w-[295px] pr-5 font-normal leading-7 '>To process money transfers and manage your account.</Text>
                    </View>
                    <View className='flex-row gap-2 px-3'>
                        <Text className='text-[30px] -mt-4'>.</Text>
                        <Text className='text-[#6E757D] text-[14px] w-[295px] pr-5 font-normal leading-7 '>For fraud prevention and security.</Text>
                    </View>
                    <View className='flex-row gap-2 px-3'>
                        <Text className='text-[30px] -mt-4'>.</Text>
                        <Text className='text-[#6E757D] text-[14px] w-[295px] pr-5 font-normal leading-7 '>To send you updates or promotional materials (with your consent).</Text>
                    </View>
                </View>
                <View className='gap-4'>
                    <Text className='text-[#181F30] text-[18px] font-semibold'>3. Sharing Your Information</Text>
                    <View className='flex-row gap-2 px-3'>
                        <Text className='text-[30px] -mt-4'>.</Text>
                        <Text className='text-[#6E757D] text-[14px] w-[295px] pr-5 font-normal leading-7 '>With service providers (payment processors, identity verification).</Text>
                    </View>
                    <View className='flex-row gap-2 px-3'>
                        <Text className='text-[30px] -mt-4'>.</Text>
                        <Text className='text-[#6E757D] text-[14px] w-[295px] pr-5 font-normal leading-7 '>For legal purposes or to prevent fraud.</Text>
                    </View>
                </View>
                <View className='gap-4'>
                    <Text className='text-[#181F30] text-[18px] font-semibold'>4. Data Security</Text>
                    <Text className='text-[#6E757D] text-[14px] w-[335px] pr-5 font-normal leading-7 '>We use encryption and other security measures to protect your data, but no system is entirely secure.</Text>
                </View>
                <View className='gap-4'>
                    <Text className='text-[#181F30] text-[18px] font-semibold'>5. Your Rights</Text>
                    <Text className='text-[#6E757D] text-[14px] w-[335px] pr-5 font-normal leading-7 '>You can access, update, or delete your personal information. You can also opt-out of marketing communications.</Text>
                </View>
                <View className='gap-4'>
                    <Text className='text-[#6E757D] text-[14px] w-[335px] pr-5 font-normal leading-7 '>Last Update: June 24, 2024</Text>
                </View>
              </View>
          </View>
      </ScrollView>
    )
}

export default privacy