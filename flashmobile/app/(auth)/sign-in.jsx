import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native';
import { Link, useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    router.push('');
  };

  return (
    <View className="flex-1 bg-white py-32 px-10">
      <View className="mb-8 items-center">
        <Image
          source={logo}
          className="w-24 h-24"
        />
      </View>
      
      <Text className="font-bold text-gray-800 mb-2 text-center text-[32px]">Flash Transfer</Text>
      <Text className="text-xl font-normal text-gray-800 mb-8 text-center">Welcome Back</Text>
      
      <View className="space-y-4">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="border border-[#EBECED] p-4 rounded-lg mb-4"
          keyboardType="email-address"
        />
        
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          className=" border border-[#EBECED] p-4 rounded-lg"
          secureTextEntry
        />
        
        <TouchableOpacity className="items-end">
          <Text className="text-blue-600">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        className="bg-blue-500 p-4 rounded-lg mt-8"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold">Login</Text>
      </TouchableOpacity>
      
      
        <Text className="text-center">
          Don't have an account? 
        <Link className='text-blue-500' href="/(auth)/sign-up">Sign up</Link>
        </Text>
    
    </View>
  );
}
