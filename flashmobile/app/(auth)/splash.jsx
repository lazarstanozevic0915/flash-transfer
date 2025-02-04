import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';

export default function SplashScreen() {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/sign-in');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center p-12">
      <Image 
        source={logo}
        className="w-32 h-32 mb-4 mt-20"
      />
      <Text className="font-bold text-gray-800 mb-2 text-center text-[32px]">Flash Transfer</Text>
      <Text className="text-sm text-gray-600 mt-2">Your Best Money Transfer Partner</Text>
      <View className="flex-1 justify-end items-end p-4">
        <Text>
        Secured by <Text className='text-blue-500'>flash-transfer</Text> 
        </Text>
      </View>
    </View>
  );
}