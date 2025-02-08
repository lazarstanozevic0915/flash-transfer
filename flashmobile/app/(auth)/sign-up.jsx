import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';
import Svg, { Path } from 'react-native-svg';
import { language } from '../../assets/image';
import UM from '../../assets/image/icons/UM.png'
import downArrow from '../../assets/image/icons/arrow-short-down.png'
import SocialLoginButtons from '../../components/SocialLoginButtons';
import CountryPicker from 'react-native-country-picker-modal';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('US'); // Default country (United States)
  const [country, setCountry] = useState({
      cca2: 'US', 
      name: { common: 'United States' },
    });
  const handleLogin = () => {
    // Add your login logic here
    router.push('');
  };

  return (
    <ScrollView>
        <View className="flex-1 bg-white py-20 px-8 font-aeonikBold">
          <View className="mb-4 items-center">
            <Image
              source={logo}
              className="w-24 h-24"
            />
          </View>
          
          <Text className="font-bold text-gray-800 mb-2 text-center text-[32px]">Flash Transfer</Text>
          <Text className="text-[18px] font-medium text-gray-800 mb-8 text-center">Register Your Account ✍️</Text>
          
          <View className="space-y-4">
          {/* Country/Region Selector */}
          <Text className='font-semibold text-[14px] mb-2'>Send From</Text>
                    <View className='relative w-full flex-row items-center border p-2 rounded-lg bg-[#F4F5F7] border-[#EBECED] mb-2'>
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

            <Text className='font-semibold text-[14px] mb-2'>Enter Your Mail</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#6E757D"
              value={email}
              onChangeText={setEmail}
              className=" border border-[#EBECED] p-4 rounded-lg mb-2"
            />
            <Text className='font-semibold text-[14px] mb-2'>Set Password</Text>
            <TextInput
              placeholder="Set your Password"
              placeholderTextColor="#6E757D"
              value={password}
              onChangeText={setPassword}
              className=" border border-[#EBECED] p-4 rounded-lg mb-2"
              secureTextEntry
            />
            <Text className='font-semibold text-[14px] mb-2'>Confirm Password</Text>
            <TextInput
              placeholder="Re-enter Password"
              placeholderTextColor="#6E757D"
              value={password}
              onChangeText={setPassword}
              className=" border border-[#EBECED] p-4 rounded-lg mb-2"
              secureTextEntry
            />

          </View>
          
          <TouchableOpacity 
            className=" p-4 rounded-lg mt-8 bg-[#FFC000]"
            onPress={() => router.push('/set-identity')}
          >
            <Text className="text-gray-900 text-center font-bold text-[14px]">Continue</Text>
          </TouchableOpacity>
          
            <SocialLoginButtons />

            <View className="flex-row justify-center mt-16">
                <Text className="text-[14px] text-center">Already have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/sign-in')}>
                 <Text className="text-blue-500 text-[14px]"> Login</Text>
              </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
  );
}
