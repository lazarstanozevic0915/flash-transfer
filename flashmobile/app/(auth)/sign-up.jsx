import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    router.push('');
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="mb-12 items-center">
        <Image
          source={logo}
          className="w-24 h-24"
        />
      </View>
      
      <Text className="text-2xl font-bold text-gray-800 mb-8 text-center">Welcome Back</Text>
      
      <View className="space-y-4">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="bg-gray-100 p-4 rounded-lg"
          keyboardType="email-address"
        />
        
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          className="bg-gray-100 p-4 rounded-lg"
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
      
      <TouchableOpacity 
        className="mt-4"
        onPress={() => router.push('')}
      >
        <Text className="text-center">
          Don't have an account? <Text className="text-blue-600">Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
