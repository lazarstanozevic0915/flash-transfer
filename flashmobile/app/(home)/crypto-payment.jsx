import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, Alert, Image, ScrollView } from "react-native";
import * as Clipboard from "expo-clipboard";
import { X } from "lucide-react-native";
import QR from '../../assets/images/QR.png'
import copy from '../../assets/images/copy.png'
import { router } from "expo-router";
import Svg, { Circle } from "react-native-svg";

const wallets = [
    { name: "Flash Wallet", icon: require("../../assets/images/logo.png") },
    { name: "Metamask", icon: require("../../assets/images/metamask.png") },
    { name: "Phantom", icon: require("../../assets/images/Phantom.png") },
    { name: "Ledger", icon: require("../../assets/images/ledger.png") },
  ];
  

const CryptoPayment = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(null);
  const cryptoAddress = "1A1zP1eP5QGefi2DMPTfTL5SL...";

  const handleCopy = async () => {
    await Clipboard.setStringAsync(cryptoAddress);
    Alert.alert("Copied!", "Crypto address copied to clipboard.");
  };

  const handleConnect = (wallet) => {
    setConnectedWallet(connectedWallet === wallet ? null : wallet);
    setModalVisible(false);
  };

  return (
    <ScrollView>
    <View className="flex-col bg-white items-center pt-16 font-aeonikBold">
{/* Progress Header */}
      <View className="mb-6 flex-row items-center space-x-3 bg-white w-full px-4 pb-4 pt-4">
        {/* Half Blue - Half Gray Circle */}
        <View className="relative w-10 h-10 mr-4">
          <Svg height="40" width="40" viewBox="0 0 40 40">
            {/* Gray Background Circle */}
            <Circle cx="20" cy="20" r="18" stroke="#E0E0E0" strokeWidth="4" fill="none" />
            {/* Blue Half Circle */}
            <Circle cx="20" cy="20" r="18" stroke="#005CEE" strokeWidth="4" fill="none"
              strokeDasharray="113 113" 
              strokeLinecap="round"
              transform="rotate(-90 20 20)" 
            />
          </Svg>
          {/* Centered Text Inside Circle */}
          <View className="absolute inset-0 flex items-center justify-center">
            <Text className="text-[#181F30] font-bold text-[14px]">4/4</Text>
          </View>
        </View>

        {/* Text Section */}
        <View className="flex flex-col">
          <Text className="text-[#181F30] text-[18px] font-bold">Payment Method</Text>
          <Text className="text-[#6E757D] text-[14px]">Enter the information.</Text>
        </View>
      </View>

      <View className="bg-[#EFF0F1] rounded-lg p-4 shadow w-full rounded-t-xl">
        <Text className=" text-[22px] font-bold mb-2">Send Crypto Payment</Text>
        <Text className="text-gray-500 text-[16px] mb-4">
          Send payment to this crypto address:
        </Text>
        <View className="flex-row justify-between items-center border border-gray-300 rounded-md p-3 bg-white">
          <Text className="text-gray-900">{cryptoAddress}</Text>
          <TouchableOpacity onPress={handleCopy} className="flex-row items-center gap-2 ">
            <Image 
              source={copy}
            />
            <Text className="text-[#2475FF] font-normal">Copy</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-center text-gray-500 text-[15px] my-4">Or Pay</Text>
        <Text className="font-bold text-start text-[16px]">Wallet Connect</Text>

        <TouchableOpacity 
          className=" border border-[#2475FF] py-3 rounded-lg mt-2 mb-8"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-[#2475FF] text-center font-medium text-[14px]">
            {connectedWallet ? `${connectedWallet} Connected` : "Connect Wallet"}
          </Text>
        </TouchableOpacity>
        <View className="flex justify-center items-center">
        <Image
          source={QR}
          className="object-fill"
        />
        </View>
       <TouchableOpacity
        className=" border border-[#6E757D] py-3 rounded-lg mt-16"
        onPress={() => router.back()}
       >
        <Text className="text-[#D3D8DD] text-center font-medium text-[14px]">
          Cancel
        </Text>
       </TouchableOpacity>
      </View>

      {/* Modal for wallet selection */}
      <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white p-4 rounded-t-2xl pb-8">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-[16px] font-bold text-[#181F30]">Connect Wallet</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X size={24} color="black" />
              </TouchableOpacity>
            </View>
            <FlatList
            data={wallets}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <TouchableOpacity 
                className="flex-row justify-between items-center py-3"
                onPress={() => handleConnect(item.name)}
                >
                <View className="flex-row items-center space-x-3 gap-4">
                    <Image source={item.icon} className="w-8 h-8" resizeMode="contain" />
                    <Text className="text-gray-900 font-medium">{item.name}</Text>
                </View>
                <Text className="text-[#181F30] font-normal rounded-2xl bg-[#D3D8DD] py-2 px-4" onPress={()=> (router.push('/payment-done'))}>Connect</Text>
                </TouchableOpacity>
            )}
            />

          </View>
        </View>
      </Modal>
    </View>
    </ScrollView>
  );
};

export default CryptoPayment;
