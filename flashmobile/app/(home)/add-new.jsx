import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import bell from '../../assets/image/icons/notification-bell.png';
import menu from '../../assets/image/menu-fries.png';
import back from '../../assets/image/back2.png'
import { router } from 'expo-router';
import UM from '../../assets/image/icons/UM.png'
import downArrow from '../../assets/image/icons/arrow-short-down.png'

const AddNew = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

  return (
    <ScrollView>
    <View className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5  font-aeonikBold">
            <View className="flex-row justify-between items-center">
                  <TouchableOpacity className='flex items-center justify-center p-3 rounded-full bg-white'>
                    <Image source={menu} className='w-6 h-6 object-fill'  />
                  </TouchableOpacity>

                  <TouchableOpacity className='flex items-center justify-center p-3 rounded-full bg-white'>
                    <Image source={bell} className='w-6 h-6 object-fill'  />
                  </TouchableOpacity>
            </View>
            {/* Back Button */}
            <View className=" flex-row items-start mb-2">
                    <TouchableOpacity onPress={() => router.push('/cash')} className="flex-row items-center">
                    <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                    <Text className="text-gray-800 font-semibold  items-center text-[16px] ml-3">Back</Text>
                    </TouchableOpacity>
            </View>
            <View className="">
                  <Text className="text-[18px] font-bold">Add New Contact</Text>
            </View>
            {/* Form Fields */}
                <View className="space-y-4">
                  {/* First Name */}
                  <Text className="font-semibold text-[14px] mb-2">First Name*</Text>
                  <TextInput
                    placeholder="Enter your first name"
                    placeholderTextColor="#6E757D"
                    value={firstName}
                    onChangeText={setFirstName}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                  />
            
                  {/* Last Name */}
                  <Text className="font-semibold text-[14px] mb-2">Last Name*</Text>
                  <TextInput
                    placeholder="Enter your last name"
                    placeholderTextColor="#6E757D"
                    value={lastName}
                    onChangeText={setLastName}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                  />
                  {/* Last Name */}
                  <Text className="font-semibold text-[14px] mb-2">Email Address</Text>
                  <TextInput
                    placeholder="Enter your email"
                    placeholderTextColor="#6E757D"
                    value={email}
                    onChangeText={setEmail}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                  />
                  {/* Last Name */}
                  <Text className="font-semibold text-[14px] mb-2">Mobile money</Text>
                  <TextInput
                    placeholder="Enter Mobile Money"
                    placeholderTextColor="#6E757D"
                    value={mobile}
                    onChangeText={setMobile}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                  />

                  <Text className='font-semibold text-[14px] mb-2'>Country/Region*</Text>
                  
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

                  {/* Last Name */}
                  <Text className="font-semibold text-[14px] mb-2">Street Address*</Text>
                  <TextInput
                    placeholder="Enter your Street address"
                    placeholderTextColor="#6E757D"
                    value={address}
                    onChangeText={setAddress}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                  />
                  {/* Last Name */}
                  <Text className="font-semibold text-[14px] mb-2">City*</Text>
                  <TextInput
                    placeholder="Enter your Cit"
                    placeholderTextColor="#6E757D"
                    value={city}
                    onChangeText={setCity}
                    className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-2"
                  />

                    <View className="flex-row space-x-4 gap-2 mb-2">
                    {/* State Input */}
                    <View className="flex-1">
                        <Text className="font-semibold text-[14px] mb-2">State*</Text>
                        <TextInput
                        placeholder=""
                        placeholderTextColor="#6E757D"
                        value={state}
                        onChangeText={setState}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl"
                        />
                    </View>

                    {/* ZIP Input */}
                    <View className="flex-1">
                        <Text className="font-semibold text-[14px] mb-2">ZIP*</Text>
                        <TextInput
                        placeholder=""
                        placeholderTextColor="#6E757D"
                        value={zip}
                        onChangeText={setZip}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl"
                        />
                    </View>
                    </View>

                <Text className='font-semibold text-[14px] mb-2'>Purpose</Text>
                  <View className='relative w-full'>
                    
                      <TextInput
                          placeholder='Choose'
                          placeholderTextColor="#6E757D"
                          className='border p-2.5 rounded-md text-[14px] bg-[#EBECED] border-[#D3D8DD] w-full mb-2 '
                          required
                      />
                      <View className="absolute right-3 top-1/2 -translate-y-1/2">
                          <Image
                              source={downArrow}
                              className="w-[12px] h-[6px]"
                          />
                      </View>
                      </View>

                      <Text className='font-semibold text-[14px] mb-2'>Source of funds</Text>
                    <View className='relative w-full'>
                        <TextInput
                            placeholder='Choose'
                            placeholderTextColor="#6E757D"
                            className='border p-2.5 rounded-md text-[14px] bg-[#EBECED] border-[#D3D8DD] w-full mb-2'
                            required
                        />
                        <View className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Image
                                source={downArrow}
                                className="w-[12px] h-[6px]"
                            />
                        </View>
                        </View>
            </View> 
            <TouchableOpacity 
                className=" p-4 rounded-lg mt-2 bg-[#FFC000] w-full"
                onPress={() => router.push('')}
            >  
                    <Text className="text-[#181F30] text-center font-semibold text-[14px]">Continue</Text>
            </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default AddNew