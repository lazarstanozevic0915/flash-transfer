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
import CountryPicker from 'react-native-country-picker-modal';
import Svg, { Circle } from "react-native-svg";

const ReceiverInfo = () => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [countryCode, setCountryCode] = useState('US'); // Default country (United States)
    const [country, setCountry] = useState({
      cca2: 'US', 
      name: { common: 'United States' },
    });
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

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
       <View className="flex flex-col bg-[#EFF0F1] py-4   font-aeonikBold h-full">
        {/* Progress Header */}
              <View className="mb-6 flex-row items-center space-x-3 bg-white w-full px-4 pb-8 pt-16">
                {/* Half Blue - Half Gray Circle */}
                <View className="relative w-10 h-10 mr-4">
                  <Svg height="40" width="40" viewBox="0 0 40 40">
                    {/* Gray Background Circle */}
                    <Circle cx="20" cy="20" r="18" stroke="#E0E0E0" strokeWidth="4" fill="none" />
                    {/* Blue Half Circle */}
                    <Circle cx="20" cy="20" r="18" stroke="#005CEE" strokeWidth="4" fill="none"
                      strokeDasharray="28 113" 
                      strokeLinecap="round"
                      transform="rotate(-90 20 20)" 
                    />
                  </Svg>
                  {/* Centered Text Inside Circle */}
                  <View className="absolute inset-0 flex items-center justify-center">
                    <Text className="text-[#181F30] font-bold text-[14px]">1/4</Text>
                  </View>
                </View>
        
                {/* Text Section */}
                <View className="flex flex-col">
                  <Text className="text-[#181F30] text-[18px] font-bold">Receiver's info</Text>
                  <Text className="text-[#6E757D] text-[14px]">Enter the information.</Text>
                </View>
              </View>
        <View className="mb-4 p-2 px-4">
                <Text className="text-[#181F30] text-[20px] font-bold mb-2">
                  Receiver's info
                </Text>
                <Text className="text-[#6E757D] text-[16px]">
                  You can see all the details of your transaction,{"\n"}check that you have made no mistake if necessary{"\n"}you can modify information on this page.
                </Text>
        </View>
        <View className='flex-row rounded-lg bg-blue-500 px-6 py-3 w-[50%] mx-4 mb-8 items-center gap-2'>
            <Image 
                source={benefit}
                className="object-fill"
            />
            <Text className="text-white text-[15px] font-medium">I'm the benefit</Text>
        </View>

       {/* Country/Region Selector */}
       <Text className='font-semibold text-[14px] mb-2 mx-4'>Receiving country - Currency</Text>
                    <View className='relative  flex-row items-center border p-2 rounded-lg mx-4  bg-[#F4F5F7] border-[#EBECED]'>
                    {country && (
                            <Image source={{ uri: country.flag }} className='w-6 h-4' />
                        )}
                        <CountryPicker
                            countryCode={countryCode} // Default to 'US' if countryCode is null
                            withFilter={true}
                            withFlag={true}
                            withCountryNameButton={true}
                            withAlphaFilter={true}
                            onSelect={(country) => {
                            setCountryCode(country.cca2);
                            setCountry(country);
                            }}
                            />
                        <Image source={downArrow} className="w-[12px] h-[6px] ml-auto" />
                    </View>


                <Text className="font-semibold text-[14px] mb-2 mx-4">Amount sent</Text>
                    <TextInput
                    placeholder="Enter your amount"
                    placeholderTextColor="#6E757D"
                    value={address}
                    onChangeText={setAddress}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-4 mx-4"
                    />

                <Text className="font-semibold text-[14px] mb-2 mx-4">The beneficiary receives</Text>
                    <TextInput
                    placeholder="Enter the beneficiary recieves"
                    placeholderTextColor="#6E757D"
                    value={city}
                    onChangeText={setCity}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mx-4 "
                    />

    <View className="py-4 bg-gray-100 px-4">

    <Text className="text-[18px] font-bold text-gray-800 mt-8">Already added</Text>

    <View className="mt-6 mb-4">
    <View className="flex-row items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
        <Image 
        source={search}
        className='h-6 w-6 object-fill'
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
                  onPress={() => router.push('/receiver-info-crypto')}
              >  
                  <Text className="text-[#181F30] text-center font-semibold text-[14px]">Continue</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  className=" p-4 rounded-lg mt-4 border border-[#6E757D] w-full"
                  onPress={() => router.back()}
              >  
                  <Text className="text-[#6E757D] text-center font-semibold text-[14px]">Cancel</Text>
              </TouchableOpacity>
    </View>
        
       </View>
     </ScrollView>
  )
}

export default ReceiverInfo