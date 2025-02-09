import { View, Text, TouchableOpacity, Image, FlatList, Modal } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Svg, { Circle } from "react-native-svg";
import { useUser } from "../../context/UserContext";

const SelectMethod = () => {
  const router = useRouter();
  const { activePay, activeReceive } = useUser();
  const [selectedMethod, setSelectedMethod] = useState("cash");
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(false);
  

  const methods = [
    { id: "cash", name: "Cash", icon: require("../../assets/images/orange.png") },
    { id: "wave", name: "Wave", icon: require("../../assets/images/wave.png") },
    { id: "mtn", name: "MTN", icon: require("../../assets/images/mtn.png") },
    { id: "moov", name: "Moov Money", icon: require("../../assets/images/moov.png") },
  ];

  const selected = methods.find((method) => method.id === selectedMethod);

  const handleSubmit = () => {
    if (!selectedMethod ) {
      setError(true);
    } else {
        setError(false);
        if(activePay === 'cash' && activeReceive === 'cash') {
            router.push('/review-details-cash');
        } else if ( activePay === 'card' && activeReceive === 'cash') {
            router.push('/review-details-card');   
        }
        else if ( activePay === 'wallet' && activeReceive === 'cash') {
          router.push('/review-details-cryptos');   
        }
        else{
            router.push('/review-details-bank');

        }
    }
};

  return (
    <View className="flex flex-col bg-[#EFF0F1] py-4  font-aeonikBold h-full">
      {/* Progress Header */}
      <View className="mb-6 flex-row items-center space-x-3 bg-white w-full px-4 pb-8 pt-16">
        {/* Half Blue - Half Gray Circle */}
        <View className="relative w-10 h-10 mr-4">
          <Svg height="40" width="40" viewBox="0 0 40 40">
            {/* Gray Background Circle */}
            <Circle cx="20" cy="20" r="18" stroke="#E0E0E0" strokeWidth="4" fill="none" />
            {/* Blue Half Circle */}
            <Circle cx="20" cy="20" r="18" stroke="#005CEE" strokeWidth="4" fill="none"
              strokeDasharray="56.5 113" 
              strokeLinecap="round"
              transform="rotate(-90 20 20)" 
            />
          </Svg>
          {/* Centered Text Inside Circle */}
          <View className="absolute inset-0 flex items-center justify-center">
            <Text className="text-[#181F30] font-bold text-[14px]">2/4</Text>
          </View>
        </View>

        {/* Text Section */}
        <View className="flex flex-col">
          <Text className="text-[#181F30] text-[18px] font-bold">Payment Method</Text>
          <Text className="text-[#6E757D] text-[14px]">Enter the information.</Text>
        </View>
      </View>

      {/* Title Section */}
      <View className="mb-4 p-2 rounded-t-3xl px-4 ">
        <Text className="text-[#181F30] text-[20px] font-bold mb-2">Choose delivery method</Text>
        <Text className="text-[#6E757D] text-[18px]">
          Choose delivery method in mobile money,{"\n"}bank deposit, cash pickup.
        </Text>
      </View>

      {/* White Box with Details */}
      <View className="bg-white p-5 rounded-xl shadow-lg mx-4 ">
        <Text className="text-[#273240] text-[14px] font-semibold mb-3">Receiving Method</Text>

        {/* Dropdown Trigger */}
        <TouchableOpacity
          className="flex-row items-center border border-[#E0E0E0] rounded-lg p-3 mb-4"
          onPress={() => setModalVisible(true)}
        >
          <Image source={selected.icon} className="w-8 h-8 mr-3" />
          <Text className="font-semibold text-[16px]">{selected.name}</Text>
        </TouchableOpacity>

        {/* Modal for Selecting Method */}
        <Modal transparent={true} visible={modalVisible} animationType="fade">
          <View className="flex-1 justify-center items-center bg-transparent bg-opacity-50">
            <View className="bg-white p-5 rounded-lg w-4/5">
              <Text className="text-[16px] font-bold mb-3">Select Payment Method</Text>

              <FlatList
                data={methods}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    className="flex-row items-center p-3 border-b border-gray-200"
                    onPress={() => {
                      setSelectedMethod(item.id);
                      setModalVisible(false);
                    }}
                  >
                    <Image source={item.icon} className="w-8 h-8 mr-3" />
                    <Text className="text-[16px]">{item.name}</Text>
                  </TouchableOpacity>
                )}
              />

              <TouchableOpacity className="mt-3" onPress={() => setModalVisible(false)}>
                <Text className="text-center text-red-500 font-semibold">Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Transfer Details */}
        <View className="pt-4 space-y-3">
          <View className="flex-row justify-between mb-2">
            <Text className="text-[#6E757D] text-[14px]">You sent</Text>
            <Text className="text-black font-bold text-[14px]">100 EUR</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-[#6E757D] text-[14px]">Transfer rate</Text>
            <Text className="text-black font-bold text-[14px]">1 EUR = 1 EUR</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-[#6E757D] text-[14px]">Fee</Text>
            <Text className="text-black font-bold text-[14px]">+2.50 EUR</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-[#6E757D] text-[14px]">Transfer Time</Text>
            <Text className="text-black font-bold text-[14px]">1 Min</Text>
          </View>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View className="mt-auto mb-6 px-4">
        <TouchableOpacity className="bg-[#FFC000] rounded-xl py-4 mb-3" onPress={handleSubmit}>
          <Text className="text-center font-semibold">Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-transparent rounded-xl py-4 border border-[#6E757D]" onPress={() => router.back()}>
          <Text className="text-center text-[#6E757D] font-semibold">Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectMethod;
