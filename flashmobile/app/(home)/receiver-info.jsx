import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import UM from '../../assets/image/icons/UM.png';
import downArrow from '../../assets/image/icons/arrow-short-down.png';
import robert from '../../assets/images/robert.png';
import theresa from '../../assets/images/theresa.png';
import courtney from '../../assets/images/courtney.png';
import search from '../../assets/images/search.png';
import benefit from '../../assets/images/benefit.png';

const ReceiverInfo = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [mobile, setMobile] = useState('');
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [zip, setZip] = useState('');

    const recentReceipts = [
        { id: 1, name: "Theresa Webb", country: "USA", flag: "🇺🇸", image: theresa },
        { id: 2, name: "Courtney Henry", country: "France", flag: "🇫🇷", image: courtney },
        { id: 3, name: "Robert Fox", country: "USA", flag: "🇺🇸", image: robert },
        { id: 4, name: "Devone Lane", country: "France", flag: "🇫🇷", image: robert },
      ];

      const filteredReceipts = recentReceipts.filter(receipt =>
        receipt.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return (
<ScrollView>
       <View className="flex flex-col bg-[#EFF0F1] py-4 pt-16 px-4  font-aeonikBold h-full">
        <View className="flex-row items-center p-2">
                  <View className="h-8 w-8 rounded-full bg-blue-500 items-center justify-center">
                    <Text className="text-white font-medium">1/4</Text>
                  </View>
                  <View className='flex flex-col ml-3'>
                  <Text className=" font-bold text-[18px] mb-2">Receiver's info</Text>
                  <Text className="text-[#6E757D] text-[14px]">Enter the informations.</Text>
                  </View>
        </View>
        <View className="mb-4 p-2">
                <Text className="text-[#181F30] text-[20px] font-bold mb-2">
                  Receiver's info
                </Text>
                <Text className="text-[#6E757D] text-[16px]">
                  You can see all the details of your transaction,{"\n"}check that you have made no mistake if necessary{"\n"}you can modify information on this page.
                </Text>
        </View>
        <View className='flex-row rounded-lg bg-blue-500 px-6 py-3 w-[50%] mb-6 items-center gap-2'>
            <Image 
                source={benefit}
                className="object-fill"
            />
            <Text className="text-white text-[15px] font-medium">I'm the benefit</Text>
        </View>

        <Text className='font-semibold text-[14px] mb-2'>Recieving country - Currency</Text>
                          
            <View className='relative w-full'>
                <View className='absolute left-3 top-2.5  z-50'>
                    <Image 
                    source={UM} 
                    className='w-7 h-5 mr-2 object-fill' 
                    />
                </View>
                <TextInput
                    placeholder='Choose your Location'
                    placeholderTextColor="#6E757D"
                    className='border p-2.5 pl-14 rounded-md text-[14px] bg-[#EBECED] border-[#D3D8DD] w-full mb-2'
                    required
                />
                <View className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Image
                        source={downArrow}
                        className="w-[12px] h-[6px]"
                    />
                </View>
                </View>

                <Text className="font-semibold text-[14px] mb-2">Amount sent</Text>
                    <TextInput
                    placeholder="Enter your amount"
                    placeholderTextColor="#6E757D"
                    value={address}
                    onChangeText={setAddress}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                    />

                <Text className="font-semibold text-[14px] mb-2">The beneficiary receives</Text>
                    <TextInput
                    placeholder="Enter the beneficiary recieves"
                    placeholderTextColor="#6E757D"
                    value={city}
                    onChangeText={setCity}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                    />

    <View className="px-2 py-4 bg-gray-100">

    <Text className="text-[18px] font-bold text-gray-800 mt-8">Already added</Text>

    <View className="mt-6 mb-4">
    <View className="flex-row items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
        <Image 
        source={search}
        className='h-8 w-8 object-fill'
        />
        <TextInput
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
        className="flex-1 ml-2 text-[16px] text-gray-800"
        placeholderTextColor="#6E757D"
        />
    </View>
    </View>

    {filteredReceipts.map((item) => (
    <View key={item.id} className="flex-row items-center justify-between bg-white p-3 rounded-lg mb-2 shadow-sm">
        <View className="flex-row items-center">
        <Image 
            source={item.image}
            className="w-10 h-10 rounded-full"
        />
        <View className='ml-2'>
            <Text className="text-[16px] font-semibold text-[#181F30]">{item.name}</Text>
            <View className='flex flex-row items-center'>
            <Text className="text-lg mr-2 ">{item.flag}</Text>
            <Text className="text-[12px] text-[#6E757D]">{item.country}</Text>
            </View>
        </View>
        </View>
        <TouchableOpacity 
        className="px-4 py-2 rounded-lg bg-blue-500"
        >
        <Text 
        className="text-[14px] font-normal text-white"
        >
            Transfer again
            </Text>
        </TouchableOpacity>
    </View>
      ))}
      <TouchableOpacity 
                  className=" p-4 rounded-lg mt-8 bg-[#FFC000] w-full"
                  onPress={() => router.push('/edit-receiver-info')}
              >  
                  <Text className="text-[#181F30] text-center font-semibold text-[14px]">Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  className=" p-4 rounded-lg mt-4 border border-[#6E757D] w-full"
                  onPress={() => router.push('')}
              >  
                  <Text className="text-[#6E757D] text-center font-semibold text-[14px]">Cancel</Text>
              </TouchableOpacity>
    </View>
        
       </View>
     </ScrollView>
  )
}

export default ReceiverInfo