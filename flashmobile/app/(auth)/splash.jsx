import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';

export default function SplashScreen() {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)/sign-in');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex flex-col h-[100vh] font-aeonikBold bg-white items-center justify-center pt-[18vh] px-12 pb-8">
      <View className="flex flex-col items-center">
        <Image 
          source={logo}
          className="w-32 h-32 mb-4 mt-20"
        />
        <Text className="font-semibold text-[#181F30] mb-2 text-center text-[32px]">Flash Transfer</Text>
        <Text className="text-[16px] text-[#6E757D] mt-1">Your Best Money Transfer Partner</Text>
      </View>
      <View className="flex-1 justify-end items-end p-4">
        <Text className='text-[#878787] text-[16px]'>
        Secured by <Text className='text-[#2475FF] text-[16px]'>flash-transfer</Text> 
        </Text>
      </View>
    </View>
  );
}