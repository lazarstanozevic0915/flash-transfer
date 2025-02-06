import { useRouter } from 'expo-router';
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import nftImage1 from '../../assets/image/nftImage1.png'
import nftImage2 from '../../assets/image/nftImage2.png'

const nft = () => {
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
            <Text className='text-[#181F30] text-[20px] font-semibold mb-5'>NFT</Text>
            <View className='flex-row flex-wrap gap-5'>
                {
                    nfts.map((item, index) => (
                        <View className='p-2 pb-4 bg-white rounded-2xl flex-col gap-3 items-center' key={index}>
                            <Image source={item.image} />
                            <Text className='text-[14px] text-[#181F30] w-[133px] font-medium'>{item.desc}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    </ScrollView>
  )
}

export default nft