import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import CountryPicker from 'react-native-country-picker-modal';
import downArrow from '../../assets/image/icons/arrow-short-down.png';
import Svg, { Circle } from "react-native-svg";

const EditReceiverInfo = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [countryCode, setCountryCode] = useState('US'); // Default country (United States)
    const [country, setCountry] = useState({
      cca2: 'US', 
      name: { common: 'United States' },
    });    
    const [error, setError] = useState(false);

    const validateForm = () => {
        if (!firstName || !lastName || !email || !mobile || !address || !city || !state || !zip || !country) {
            setError(true);
        } else {
            setError(false);
            router.push('/enter-card'); // Change route as needed
        }
    };

    return (
        <ScrollView>
            <View className="flex-col gap-6 bg-[#EFF0F1] pb-8  font-aeonikBold">
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

                {/* Error Message */}
                {error && (
                    <TouchableOpacity className="bg-red-100 rounded-xl py-2 px-4 mb-4 border border-[#FF3E24]">
                        <Text className="text-[#FF3E24] text-[15px]">
                            <Text className="rounded-full border border-[#FF3E24] p-2">!</Text> Enter your receiver's name exactly as it appears on their ID
                        </Text>
                    </TouchableOpacity>
                )}

                {/* Form Fields */}
                <View className="space-y-4 px-4">
                    {/* First Name */}
                    <Text className="font-semibold text-[14px] mb-2">First Name</Text>
                    <TextInput
                        placeholder="Enter your first name"
                        placeholderTextColor="#6E757D"
                        value={firstName}
                        onChangeText={setFirstName}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-4"
                    />

                    {/* Last Name */}
                    <Text className="font-semibold text-[14px] mb-2">Last Name</Text>
                    <TextInput
                        placeholder="Enter your last name"
                        placeholderTextColor="#6E757D"
                        value={lastName}
                        onChangeText={setLastName}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-4"
                    />

                    {/* Email */}
                    <Text className="font-semibold text-[14px] mb-2">Email Address</Text>
                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="#6E757D"
                        value={email}
                        onChangeText={setEmail}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-4"
                    />

                    {/* Mobile */}
                    <Text className="font-semibold text-[14px] mb-2">Mobile money</Text>
                    <TextInput
                        placeholder="Enter Mobile Money"
                        placeholderTextColor="#6E757D"
                        value={mobile}
                        onChangeText={setMobile}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-4"
                    />

                    {/* Country/Region Selector */}
                    <Text className='font-semibold text-[14px] mb-2'>Country/Region</Text>
                    <View className='relative w-full flex-row items-center border p-2 rounded-lg bg-[#F4F5F7] border-[#EBECED]'>
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

                    {/* Address */}
                    <Text className="font-semibold text-[14px] mb-2">Street Address</Text>
                    <TextInput
                        placeholder="Enter your Street address"
                        placeholderTextColor="#6E757D"
                        value={address}
                        onChangeText={setAddress}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-4"
                    />

                    {/* City */}
                    <Text className="font-semibold text-[14px] mb-2">City*</Text>
                    <TextInput
                        placeholder="Enter your City"
                        placeholderTextColor="#6E757D"
                        value={city}
                        onChangeText={setCity}
                        className="border bg-white border-[#EBECED] p-4 rounded-2xl mb-4"
                    />

                    {/* State and ZIP */}
                    <View className="flex-row space-x-4 gap-2 mb-4">
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
                </View>

                <View className="px-4">
                {/* Continue Button */}
                <TouchableOpacity
                    className="p-4 rounded-lg mt-4 bg-[#FFC000] w-full"
                    onPress={() => router.push('/receiver-info-crypto')}
                >
                    <Text className="text-[#181F30] text-center font-semibold text-[14px]">Continue</Text>
                </TouchableOpacity>

                {/* Cancel Button */}
                <TouchableOpacity
                    className="p-4 rounded-lg border border-[#6E757D] w-full mt-4
                    "
                    onPress={() => router.push('/receiver-info')}
                >
                    <Text className="text-[#6E757D] text-center font-semibold text-[14px]">Cancel</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default EditReceiverInfo;
