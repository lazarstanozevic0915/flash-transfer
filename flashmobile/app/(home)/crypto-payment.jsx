import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList, Alert } from "react-native";
import * as Clipboard from "expo-clipboard";
import { X } from "lucide-react-native";

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
    <View className="flex-1 bg-gray-100 items-center justify-center p-4">
      <Text className="text-lg font-bold text-gray-900 mb-2">Crypto Payment</Text>
      <Text className="text-gray-500 mb-4">Enter the information.</Text>

      <View className="bg-white rounded-lg p-4 shadow w-full">
        <Text className="font-bold mb-2">Send Crypto Payment</Text>
        <Text className="text-gray-500 text-sm mb-4">
          Send payment to this crypto address:
        </Text>
        <View className="flex-row justify-between items-center border border-gray-300 rounded-md p-3 bg-gray-200">
          <Text className="text-gray-900">{cryptoAddress}</Text>
          <TouchableOpacity onPress={handleCopy}>
            <Text className="text-blue-600 font-bold">Copy</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-center text-gray-500 my-4">Or Pay</Text>
        <Text className="font-bold text-center">Wallet Connect</Text>

        <TouchableOpacity 
          className="bg-blue-600 py-3 rounded-lg mt-2"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-center font-bold">
            {connectedWallet ? `${connectedWallet} Connected` : "Connect Wallet"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal for wallet selection */}
      <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black/50">
          <View className="bg-white p-4 rounded-t-2xl max-h-1/2">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Connect Wallet</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X size={24} color="black" />
              </TouchableOpacity>
            </View>
            <FlatList
            data={wallets}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
                <TouchableOpacity 
                className="flex-row justify-between items-center py-3 border-b border-gray-200"
                onPress={() => handleConnect(item.name)}
                >
                <View className="flex-row items-center space-x-3">
                    <Image source={item.icon} className="w-8 h-8" resizeMode="contain" />
                    <Text className="text-gray-900 font-medium">{item.name}</Text>
                </View>
                <Text className="text-blue-600 font-bold">Connect</Text>
                </TouchableOpacity>
            )}
            />

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CryptoPayment;
