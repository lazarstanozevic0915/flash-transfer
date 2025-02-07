import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, TextInput, View } from 'react-native'
import back from '../../assets/image/back2.png'
import download from '../../assets/image/icons/download.png'
import plane from '../../assets/image/icons/plane.png'


const trackTransfer = () => {

    const router = useRouter(); 
    const [ activePage, setActivePage ] = useState('Send');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trackingNumber = e.target['tracking-number'];
        if (trackingNumber === '' || trackingNumber !== 10) {
          setError('Enter 10-Digit tracking number');
        } else {
          setActivePage('status');
          setStatus(trackingNumber.endsWith('1') ? 'inProgress' : 'cancelled');
        }
    };
    

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
            <View className='flex-col gap-3'>
                <Text className='text-[#181F30] text-[24px] font-semibold'>Track a Transfer</Text>
                <Text className='text-[#6E757D] text-[16px] max-w-[335px] leading-8 pr-2'>Home is behind, the world ahead and there are many paths to tread through shadows {`\n`} to the edge.</Text>
                <View className='flex-row p-1 rounded-xl bg-white'>
                    <TouchableOpacity onPress={() => setActivePage('Send')} className={`flex-row items-center justify-center rounded-[10px] gap-2 w-[164px] py-2 ${activePage === 'Send' && 'bg-[#FFC000]'}`}>
                        <Image source={plane} className='w-6 h-6 object-fill' />
                        <Text>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setActivePage('Receive')} className={`flex-row items-center justify-center rounded-[10px] gap-2 w-[164px] py-2 ${activePage === 'Receive' && 'bg-[#FFC000]'}`}>
                        <Image source={download} className='w-6 h-6 object-fill' />
                        <Text>Receive</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-col bg-white gap-4 p-5 rounded-xl">
                  <View className="flex flex-col gap-2">
                    <Text className="text-[#181F30] text-[14px] font-medium">
                      Enter Tracking Number
                    </Text>
                    <View className="relative gap-2 w-full">
                      <TextInput
                        type="text"
                        name="tracking-number"
                        id="tracking-number"
                        className="p-3 border w-full border-[#D3D8DD] text-[14px] font-semibold"
                        placeholder="Flash Tracking Number (FTN)"
                        placeholderTextColor="#6E757D"
                        onChangeText={() => setError('')}
                      />
                      {error && (
                        <View className="right-2 bottom-2 absolute rounded-full w-6 items-center justify-center h-6 bg-[#FF3E24] text-[14px] flex">
                          <Text className='text-white '>!</Text>
                        </View>
                      )}
                    </View>
                    {error && <Text className="text-[#FF3E24] text-[12px] font-medium">{error}</Text>}
                  </View>
                  <TouchableOpacity onPress={handleSubmit} className="py-1.5 items-center w-full bg-[#FFC000] rounded-xl">
                    <Text className='text-[#181F30] text-[14px] h-6 items-center justify-center mt-1 font-medium'>
                        Continue
                    </Text>
                  </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default trackTransfer