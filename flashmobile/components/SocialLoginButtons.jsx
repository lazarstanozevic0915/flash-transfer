import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import  google from "../assets/image/icons/google.svg";
import  facebook from "../assets/image/icons/facebook.svg";
import  apple from "../assets/image/icons/apple.svg";
import  wallet from "../assets/image/icons/wallet.svg";

export default function SocialLoginButtons() {
  return (
    <>
    <View className="mt-6">
      <View className="text-center mb-4">
        <Text className="text-sm text-gray-500 text-center">OR</Text>
      </View>
      <View className="flex-row flex-wrap justify-between gap-12">
        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          <Image source={google} className="h-5 w-5 mr-2" />
          <Text className="text-sm text-[#6E757D]">Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          <Image source={facebook} className="h-5 w-5 mr-2" />
          <Text className="text-sm text-[#6E757D]">Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          <Image source={apple} className="h-5 w-5 mr-2" />
          <Text className="text-sm text-[#6E757D]">Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          <Image source={wallet} className="h-5 w-5 mr-2" />
          <Text className="text-sm text-[#6E757D]">Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}