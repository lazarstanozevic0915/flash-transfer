import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import checkIcon from '../../assets/images/Subtract.png';
import printIcon from '../../assets/images/Print.png';
import trackingIcon from '../../assets/images/eye-tracking.png';
import Svg, { Circle } from "react-native-svg";

const Receipt = () => {
  const router = useRouter();

  return (
    <ScrollView>
    <View className="flex flex-col bg-[#EFF0F1] pb-16 font-aeonikBold">
      {/* Progress Header */}
            <View className="mb-6 flex-row items-center space-x-3 bg-white w-full px-4 pb-8 pt-16">
              {/* Half Blue - Half Gray Circle */}
              <View className="relative w-10 h-10 mr-4">
                <Svg height="40" width="40" viewBox="0 0 40 40">
                  {/* Gray Background Circle */}
                  <Circle cx="20" cy="20" r="18" stroke="#E0E0E0" strokeWidth="4" fill="none" />
                  {/* Blue Half Circle */}
                  <Circle cx="20" cy="20" r="18" stroke="#005CEE" strokeWidth="4" fill="none"
                    strokeDasharray="85 113" 
                    strokeLinecap="round"
                    transform="rotate(-90 20 20)" 
                  />
                </Svg>
                {/* Centered Text Inside Circle */}
                <View className="absolute inset-0 flex items-center justify-center">
                  <Text className="text-[#181F30] font-bold text-[14px]">3/4</Text>
                </View>
              </View>
      
              {/* Text Section */}
              <View className="flex flex-col">
                <Text className="text-[#181F30] text-[18px] font-bold">Received</Text>
                <Text className="text-[#6E757D] text-[14px]">Enter the information.</Text>
              </View>
            </View>
            <View className="px-4">

      <View className="bg-white p-4 rounded-xl shadow w-full mb-4 ">
        <Text className="text-[#181F30] text-[20px] font-bold mb-2">Received</Text>
        <View className="flex-row items-center mb-2">
          <Text className="text-[#181F30] text-[16px] font-semibold">You are almost done</Text>
          <Image source={checkIcon} className="w-5 h-5 ml-2" />
        </View>
        <Text className="text-[#6E757D] text-[15px] font-normal">
          Here is the summary of your order. Please follow{"\n"}the instructions displayed.
        </Text>
      </View>
      
      <View className="bg-white p-6 rounded-xl shadow w-full mt-4">
        <Text className="text-[#181F30] text-[18px] font-bold mb-6">Instructions For Making{"\n"}Payment</Text>
        
        <Text className="text-[#2475FF] font-normal text-[15px] mb-2">Step 1</Text>
        <Text className="text-[#6E757D] mb-6 text-[16px] font-medium">Log In To Your Bank’s Website</Text>
        
        <Text className="text-[#2475FF] font-normal mb-2 text-[15px]">Step 2</Text>
        <Text className="text-[#6E757D] mb-4 text-[16px] font-medium">
          Transfer The Total Amount To “Orange{"\n"}Money” (Beneficiary):
        </Text>
        
        <View className=" pt-2">
          <View className="flex flex-row justify-between border-b border-gray-200 mb-2 py-4">
            <Text className="text-[#6E757D] text-[14px] font-medium">Beneficiary</Text>
            <Text className="text-black font-semibold text-[14px] ">Orange Money</Text>
          </View>
          <View className="flex flex-row justify-between mb-2 border-b border-gray-200 py-4">
            <Text className="text-[#6E757D] text-[14px] font-medium">Address</Text>
            <Text className="text-black font-semibold text-[14px]  text-right">Schubertring 11,A 1010{"\n"}Vienna, Austria</Text>
          </View>
          <View className="flex flex-row justify-between mb-2 border-b border-gray-200 py-4">
            <Text className="text-[#6E757D] text-[14px] font-medium">Name Of The Bank</Text>
            <Text className="text-black font-semibold text-[14px] text-right ">Orange Money{"\n"}Bank Gmbh</Text>
          </View>
          <View className="flex flex-row justify-between mb-2 border-b border-gray-200 py-4">
            <Text className="text-gray-700">Rising</Text>
            <Text className="text-black font-semibold text-[14px] ">203,90 EUR</Text>
          </View>
          <View className="flex flex-row justify-between mb-2 border-b border-gray-200 py-4">
            <Text className="text-gray-700">Bic/Swift</Text>
            <Text className="text-black font-semibold text-[14px] ">Wulibatwn</Text>
          </View>
          <View className="flex flex-row justify-between mb-2 border-b border-gray-200 py-4">
            <Text className="text-[#6E757D] text-[14px] font-medium">Were Going</Text>
            <Text className="text-black font-semibold">At651988001000000018</Text>
          </View>
          <View className="flex flex-row justify-between border-b border-gray-200 py-4">
            <Text className="text-[#6E757D] text-[14px] font-medium">Payment Reference (Required)</Text>
            <Text className="text-black font-semibold text-[14px]">EB9740837, Nu{"\n"}man ,USA</Text>
          </View>
        </View>
        
        <Text className="text-[#2475FF] font-normal mb-2 mt-4 text-[15px]">Step 3</Text>
        <Text className="text-[#6E757D] mb-6 text-[16px] font-medium">
          Your Money Will Be Available Once We Have{"\n"}Received The Total Amount Of 203.90 EUR
        </Text>
      </View>
      
      <View className="bg-white p-4 rounded-xl shadow w-full mt-4 flex-row items-center">
        <Image source={trackingIcon} className="w-12 h-12 mr-3" />
        <Text className="text-[#6E757D] font-medium text-[16px]">Tracking Number (FTN):{"\n"}
        <Text className="text-black text-[16px] font-semibold mt-2 ml-2">771 824 9542</Text></Text>
      </View>
      
      <TouchableOpacity className="bg-[#FFC000] rounded-xl py-4 flex-row items-center justify-center mt-4"
        onPress={() => (router.push('/payment-done'))}
      >
        <Image source={printIcon} className="w-6 h-6 mr-2" />
        <Text className="text-center font-semibold">Print</Text>
      </TouchableOpacity>
            </View>
      
    </View>
    </ScrollView>
  );
};

export default Receipt;
