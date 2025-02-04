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

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    router.push('');
  };

  return (
    <ScrollView>
        <View className="flex-1 bg-white py-20 px-10 font-aeonikBold">
          <View className="mb-8 items-center">
            <Image
              source={logo}
              className="w-24 h-24"
            />
          </View>
          
          <Text className="font-bold text-gray-800 mb-2 text-center text-[32px]">Flash Transfer</Text>
          <Text className="text-[16px] font-medium text-gray-800 mb-8 text-center">Register Your Account ✍️</Text>
          
          <View className="space-y-4">
          <Text className='font-semibold text-[14px]'>Send From</Text>

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

            <Text className='font-semibold text-[14px] mb-2'>Enter Your Mail</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#6E757D"
              value={password}
              onChangeText={setPassword}
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
