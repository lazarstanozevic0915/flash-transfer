import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { Link, useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';
import SocialLoginButtons from '../../components/SocialLoginButtons';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    // Add your login logic here
    router.push('/'); // Redirect to the home page or dashboard after login
  };

  return (
    <ScrollView>
    <View className="flex-1 bg-white  px-10 py-28 pb-8">
      <View className="mb-4 items-center">
        <Image
          source={logo}
          className="w-[110px] h-[110px]"
        />
      </View>
      
      <Text className="font-semibold text-[#181F30] mb-4 text-center text-[32px]">Flash Transfer</Text>
      <Text className="text-[20px] font-medium text-[#192031] mb-8 text-center">Welcome Back 👋</Text>
      
      <View className="space-y-4">
      <Text className='font-medium text-[14px]'>Email or Phone</Text>
        <TextInput
          placeholder="Enter your email or phone"
          placeholderTextColor="#6E757D"
          value={email}
          onChangeText={setEmail}
          className="border border-[#EBECED] p-4 rounded-lg mt-2 mb-4 text-[14px] font-normal"
          keyboardType="email-address"
          accessibilityLabel="Email or Phone Input"
          accessibilityHint="Enter your email or phone number"
        />
        <Text className='font-medium text-[14px]'>Password</Text>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#6E757D"
          value={password}
          onChangeText={setPassword}
          className=" border border-[#EBECED] p-4 mt-2 rounded-lg text-[14px] font-normal"
          secureTextEntry
        />
        
        <TouchableOpacity className="items-end mt-4">
          <Text className="text-[#2475FF] font-medium text-[14px]">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        className=" p-4 rounded-lg mt-8 bg-[#FFC000]"
        onPress={handleLogin}
      >
        <Text className="text-[#181F30] text-center font-medium">Log in</Text>
      </TouchableOpacity>

      
      <SocialLoginButtons />
      
        <Text className="text-center mt-16">
          Don't have an account? 
          <TouchableOpacity onPress={() => router.push('/sign-up')}><Text className='text-blue-500'> Register now</Text></TouchableOpacity>
        </Text>
    </View>
    </ScrollView>
  );
}
