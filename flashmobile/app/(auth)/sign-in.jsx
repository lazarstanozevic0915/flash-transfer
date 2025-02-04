import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
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
    <View className="flex-1 bg-white py-28 px-10">
      <View className="mb-8 items-center">
        <Image
          source={logo}
          className="w-24 h-24"
        />
      </View>
      
      <Text className="font-bold text-gray-800 mb-2 text-center text-[32px]">Flash Transfer</Text>
      <Text className="text-xl font-normal text-gray-800 mb-8 text-center">Welcome Back 👋</Text>
      
      <View className="space-y-4">
      <Text className='font-semibold text-[12px]'>Email or Phone</Text>
        <TextInput
          placeholder="Enter your email or phone"
          placeholderTextColor="#6E757D"
          value={email}
          onChangeText={setEmail}
          className="border border-[#EBECED] p-4 rounded-lg mb-4"
          keyboardType="email-address"
          accessibilityLabel="Email or Phone Input"
          accessibilityHint="Enter your email or phone number"
        />
        <Text className='font-semibold text-[12px]'>Password</Text>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#6E757D"
          value={password}
          onChangeText={setPassword}
          className=" border border-[#EBECED] p-4 rounded-lg"
          secureTextEntry
        />
        
        <TouchableOpacity className="items-end mt-2">
          <Text className="text-blue-600 text-[14px]">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        className=" p-4 rounded-lg mt-8 bg-[#FFC000]"
        onPress={handleLogin}
      >
        <Text className="text-gray-900 text-center font-bold">Login</Text>
      </TouchableOpacity>

      
      <SocialLoginButtons />
      
        <Text className="text-center mt-16">
          Don't have an account? 
          <TouchableOpacity onPress={() => router.push('/sign-up')}><Text className='text-blue-500'> Register now</Text></TouchableOpacity>
        </Text>
    
    </View>
  );
}
