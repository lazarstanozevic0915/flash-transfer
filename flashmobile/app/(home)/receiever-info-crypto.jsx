import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, TextInput, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import Svg, { Circle } from "react-native-svg";
import { currency, icons } from "../../assets/image";

const ReceiverInfoCrypto = () => {
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [selectedBlockchain, setSelectedBlockchain] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const currencies = [
    { network: "EVM", logo: currency.usdt, label: "USDT" },
    { network: "ETH", logo: currency.eth2, label: "Ethereum" },
    { network: "EVM", logo: currency.usdc2, label: "USDC" },
    { network: "POL", logo: currency.polygon2, label: "Polygon" },
    { network: "ETH", logo: currency.optimism2, label: "Optimism" },
    { network: "BNB", logo: currency.bnb2, label: "Binance Smart Chain" },
    { network: "SOL", logo: currency.solanaIcon22, label: "Solana" },
    { network: "ETH", logo: currency.base2, label: "Base" },
    { network: "TON", logo: currency.ton2, label: "Ton" },
    { network: "SUI", logo: currency.sui2, label: "Sui" },
  ];

  return (
    <ScrollView>
      <View className="flex-col bg-white items-center pt-16 font-aeonikBold">
        {/* Progress Header */}
        <View className="mb-6 flex-row items-center space-x-3 bg-white w-full px-4 pb-4 pt-4">
          <View className="relative w-10 h-10 mr-4">
            <Svg height="40" width="40" viewBox="0 0 40 40">
              <Circle cx="20" cy="20" r="18" stroke="#E0E0E0" strokeWidth="4" fill="none" />
              <Circle
                cx="20"
                cy="20"
                r="18"
                stroke="#005CEE"
                strokeWidth="4"
                fill="none"
                strokeDasharray="28 113"
                strokeLinecap="round"
                transform="rotate(-90 20 20)"
              />
            </Svg>
            <View className="absolute inset-0 flex items-center justify-center">
              <Text className="text-[#181F30] font-bold text-[14px]">1/4</Text>
            </View>
          </View>
          <View className="flex flex-col">
            <Text className="text-[#181F30] text-[18px] font-bold">Receiver's info</Text>
            <Text className="text-[#6E757D] text-[14px]">Enter the information.</Text>
          </View>
        </View>

        {/* Input Section */}
        <View className="bg-[#EFF0F1] rounded-lg p-4 shadow w-full rounded-t-xl">
          <Text className="text-[22px] font-bold mb-2">Confirm Crypto Address</Text>
          <Text className="text-gray-500 text-[16px] mb-4">
            Enter the Crypto Address of an EVM chain: (ETH, Polygon, Base, Arbitrum, Optimism ...)
          </Text>

          {/* Crypto Address Input */}
          <TextInput
            className="bg-white px-4 py-3 rounded-lg mb-4 text-black"
            placeholder="0x..."
            placeholderTextColor="#6E757D"
            value={cryptoAddress}
            onChangeText={setCryptoAddress}
          />

          {/* Select Crypto Dropdown */}
          <TouchableOpacity
            className="bg-white px-4 py-3 rounded-lg mb-4 flex-row items-center justify-between"
            onPress={() => setModalVisible(true)}
          >
            {selectedCrypto ? (
              <View className="flex-row items-center">
                <Image source={selectedCrypto.logo} className="w-6 h-6 mr-2" />
                <Text className="text-black">{selectedCrypto.label}</Text>
              </View>
            ) : (
              <Text className="text-gray-500">Select the Crypto</Text>
            )}
          </TouchableOpacity>

          {/* Select Blockchain Dropdown */}
          <TouchableOpacity
            className="bg-white px-4 py-3 rounded-lg mb-4 flex-row items-center justify-between"
            onPress={() => setModalVisible(true)}
          >
            {selectedBlockchain ? (
              <Text className="text-black">{selectedBlockchain.label}</Text>
            ) : (
              <Text className="text-gray-500">Select the Blockchain</Text>
            )}
          </TouchableOpacity>

          {/* Modal for Selecting Crypto */}
          <Modal visible={modalVisible} animationType="slide" transparent={true}>
            <View className="flex-1 justify-center bg-black/50">
              <View className="bg-white rounded-lg p-4 mx-6">
                <Text className="text-center font-bold text-[18px] mb-4">Select Crypto</Text>
                <FlatList
                  data={currencies}
                  keyExtractor={(item) => item.label}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className="flex-row items-center p-3 border-b border-gray-200"
                      onPress={() => {
                        setSelectedCrypto(item);
                        setModalVisible(false);
                      }}
                    >
                      <Image source={item.logo} className="w-6 h-6 mr-2" />
                      <Text className="text-black">{item.label}</Text>
                    </TouchableOpacity>
                  )}
                />
                <TouchableOpacity className="mt-4 py-2 bg-red-500 rounded-lg" onPress={() => setModalVisible(false)}>
                  <Text className="text-center text-white">Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* Continue and Back Buttons */}
          <View className="mt-auto mb-6 px-4">
            <TouchableOpacity className="bg-[#FFC000] rounded-xl py-4 mb-3" onPress={() => router.push("/review-details")}>
              <Text className="text-center font-semibold">Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-transparent rounded-xl py-4 border border-[#6E757D]" onPress={() => router.back()}>
              <Text className="text-center text-[#6E757D] font-semibold">Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReceiverInfoCrypto;
