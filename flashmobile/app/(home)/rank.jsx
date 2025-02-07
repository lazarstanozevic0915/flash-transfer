import { useRouter } from 'expo-router';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
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
import { language, rankIcons } from '../../assets/image';
import ProgressBar from '../../components/ProgressBar';


const rank = () => {
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

    const ranks = [
        { level: '1st', progress: 85, icon: rankIcons.grade1 },
        { level: '2nd', progress: 70, icon: rankIcons.grade3 },
        { level: '3rd', progress: 60, icon: rankIcons.grade2 },
        { level: '4th', progress: 50, icon: rankIcons.grade4 },
        { level: '5th', progress: 40, icon: rankIcons.grade5 },
        { level: '6th', progress: 30, icon: rankIcons.grade10 },
        { level: '7th', progress: 20, icon: rankIcons.grade6 },
        { level: '8th', progress: 20, icon: rankIcons.grade7 },
        { level: '9th', progress: 20, icon: rankIcons.grade8 },
        { level: '10th', progress: 20, icon: rankIcons.grade9 },
      ];

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
            <View>
                <View className='flex-row items-center w-full justify-between mb-5'>
                    <Text className='text-[#181F30] text-[20px] font-semibold'>Loyalty Rank</Text>
                </View>
                <ScrollView>
                    <View className='gap-3 pb-10'>
                        <View className="gap-5">
                            {ranks.map((rank) => (
                            <View key={rank.level} className="flex-row p-3 bg-white gap-3 rounded-2xl items-center">
                                <View className='p-2.5 bg-[#F4F5F7] rounded-full'>
                                    <Image source={rank.icon} className='w-8 h-8 object-fill' />
                                </View>
                                <View className='w-[71%]'>
                                    <ProgressBar percentage={rank.progress} />
                                </View>
                                <Text className="text-base font-medium">{rank.level}</Text>
                            </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    </ScrollView>
  )
}

export default rank