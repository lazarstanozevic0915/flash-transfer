import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import arrowUp from '../../assets/image/icons/arrow-up.png'
import telegram from '../../assets/image/socials/telegram.png'
import X from '../../assets/image/socials/X.png'
import discord from '../../assets/image/socials/discord.png'
import user1 from '../../assets/image/users/homeUser13.png'
import user2 from '../../assets/image/users/homeUser11.png'
import user3 from '../../assets/image/users/profileUser.png'
import user4 from '../../assets/image/users/homeUser14.png'
import user5 from '../../assets/image/users/homeUser1.png'
import * as Clipboard from 'expo-clipboard';
import { icons, rankIcons } from '../../assets/image';
import { Check, ChevronUp } from 'lucide-react-native';
import { cn } from "nativewind";

const settings = () => {
    const router = useRouter(); 
    const [ activePage, setActivePage]  = useState('affiliate');

    const referralCode = 'RSN8T9D';
    const referralLink = 'hulkrent.com/RSN8T9D';

    const copyToClipboard = async (text) => {
        await Clipboard.setStringAsync(text);
        <Alert>
            <Text>Text Copied!</Text>
        </Alert>
    };

    const LeaderboardItem = ({ user }) => (
        <View className="flex-row items-center border-b border-[#D3D8DD] justify-between gap-2.5 py-2 px-4">
            <View className='flex-row w-[47.6%] gap-2 items-center'>
                <Image
                    source={user.image}
                    className="w-[38px] h-[38px] rounded-full"
                />
                <View >
                    <Text className="text-[#181F30] text-[14px] font-medium">{user.name}</Text>
                </View>
            </View>
            <View className='w-[22.3%] items-center'>
                {
                    user.rank === 1 && (
                        <Image source={rankIcons.grade1} className='w-8 h-8 object-fill' />
                    )
                }
            </View>
          <View className="flex-row w-[17.2%] items-center justify-center">
            <View className="p-1 rounded-full items-center justify-center bg-[#D9D9D9]">
                <ChevronUp color={`#000000`} size={12} />
            </View>
            <Text className="ml-1 text-base">{user.points}</Text>
          </View>
        </View>
    );

    const users = [
        { id: 1, name: 'Darrell Steward', points: 987, image: user1, rank: 1 },
        { id: 2, name: 'Robert Fox', points: 987, image: user2, rank: 1 },
        { id: 3, name: 'Albert Flores', points: 987, image: user3, rank: 1 },
        { id: 4, name: 'Marvin McKinney', points: 987, image: user4, rank: 1 },
        { id: 5, name: 'Cody Fisher', points: 987, image: user5, rank: 1 },
        { id: 6, name: 'Cody Fisher', points: 987, image: user5, rank: 1 },
        { id: 7, name: 'Cody Fisher', points: 987, image: user5, rank: 1 },
    ];

    const history = [
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    {
        name: 'Invested 15.60$',
        date: 'Thu, 24 Aug at 10am',
        action: 'Affiliation Earning',
        amount: '$1.50 USDC',
        avatar: arrowUp
    },
    ]

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
                <View className='flex-row mb-6 gap-4 border-b border-[#D3D8DD]'>
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
                        <View className='gap-4 mt-2'>
                            <View className='items-center gap-2.5 py-5 px-4 rounded-2xl bg-white'>
                                <Text className='text-[#181F30] text-[22px] font-semibolde'>26$ earned</Text>
                                <Text className='text-[#6E757D] w-[80%] leading-6 text-[14px] text-center ' >Every time someone rents a vehicle or
                                rents their own vehicle using your referral link, you receive 3% of the rental amount.</Text>
                            </View> 
                            <View className='gap-2'>
                                <Text className='text-[#181F30] text-[14px] font-medium'>Referral Code</Text>
                                <TouchableOpacity onPress={() => copyToClipboard(referralCode)} className='flex-row items-center' >
                                    <TextInput 
                                        value={referralCode}
                                        className=" border border-[#D3D8DD] w-[84%] text-[#6E757D] bg-white text-[14px] p-4 rounded-s-xl"
                                    />
                                    <TouchableOpacity onPress={() => copyToClipboard(referralCode)} className='w-[52px] h-[46px] rounded-e-xl flex items-center justify-center bg-white border border-[#D3D8DD] '>
                                        <Image source={icons.copy} className='w-5 h-5 object-fill' />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>   
                            <View className='gap-2'>
                                <Text className='text-[#181F30] text-[14px] font-medium'>Referral Link</Text>
                                <TouchableOpacity onPress={() => copyToClipboard(referralLink)} className='flex-row items-center' >
                                    <TextInput 
                                        value={referralLink}
                                        className=" border border-[#D3D8DD] w-[84%] text-[#6E757D] bg-white text-[14px] p-4 rounded-s-xl"
                                    />
                                    <TouchableOpacity onPress={() => copyToClipboard(referralLink)} className='w-[52px] h-[46px] rounded-e-xl flex items-center justify-center bg-white border border-[#D3D8DD] '>
                                        <Image source={icons.copy} className='w-5 h-5 object-fill' />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>  
                            <View className='items-center mt-[54px] gap-4'>
                                <Text className='text-[#6E757D] text-[14px] '>Share Socials</Text>
                                <View className='flex-row gap-5'>
                                    <TouchableOpacity>
                                        <Image source={telegram} className='w-8 h-8 object-fill' />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={X} className='w-8 h-8 object-fill' />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Image source={discord} className='w-8 h-8 object-fill' />
                                    </TouchableOpacity>
                                </View>
                            </View> 
                        </View>
                    )
                }
                {
                    activePage === 'history' && (
                        <View>
                            <View className='gap-3'>
                    {
                        history.map((user, index) => (
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
                    )
                }
                {
                    activePage === 'leaderboard' && (
                    <View className="flex-col gap-4">
                        <Text className='text-[#181F30] text-[16px] font-semibold'>Ranking</Text>
                        <View>
                            <View className="flex-row px-4 justify-between py-3 border-b border-gray-200">
                            <Text className="text-gray-600  w-[47.6%]">User name</Text>
                            <Text className="w-[22.3%] text-center text-gray-600">Rank</Text>
                            <Text className="w-[17.2%] text-right text-gray-600">Points</Text>
                            </View>
                            
                            <ScrollView>
                                <View className='gap-5'>
                                    {users.map(user => (
                                        <LeaderboardItem key={user.id} user={user} />
                                    ))}
                                </View>  
                            </ScrollView>
                        </View>
                          <TouchableOpacity 
                            className="m-4 py-3 rounded-xl border border-[#2475FF] items-center"
                          >
                            <Text className="text-[#2475FF]">Show more</Text>
                          </TouchableOpacity>
                    </View>
                    )
                }
            </View>
        </View>
    </ScrollView>
  )
}

export default settings