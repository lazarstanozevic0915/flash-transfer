import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import alex from '../assets/images/alex.png';
import Billy from '../assets/images/Billy.png';
import courtney from '../assets/images/courtney.png';
import james from '../assets/images/james.png';
import mark from '../assets/images/mark.png';
import micheal from '../assets/images/micheal.png';
import robert from '../assets/images/robert.png';
import theresa from '../assets/images/theresa.png';
import search from '../assets/images/search.png';
import { router } from "expo-router";
import { useState } from "react";



export default function ReceiptsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [invitedUsers, setInvitedUsers] = useState(new Set());

  const frequentReceipts = [
    { id: 1, name: "Michael", image: micheal },
    { id: 2, name: "Billy", image: Billy },
    { id: 3, name: "Mark", image: mark },
    { id: 4, name: "James", image: james },
    { id: 5, name: "Alex", image: alex },
    { id: 6, name: "Sarah", image: Billy },
  ];
  
  const recentReceipts = [
    { id: 1, name: "Theresa Webb", country: "USA", flag: "🇺🇸", image: theresa },
    { id: 2, name: "Courtney Henry", country: "France", flag: "🇫🇷", image: courtney },
    { id: 3, name: "Robert Fox", country: "USA", flag: "🇺🇸", image: robert },
  ];

  const handleInvite = (userId) => {
    setInvitedUsers(prev => {
      const newSet = new Set(prev);
      newSet.add(userId);
      return newSet;
    });
  };

  const filteredReceipts = recentReceipts.filter(receipt =>
    receipt.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="px-2 py-4 bg-gray-100">
      {/* Frequent Receipts */}
      <Text className="text-[18px] font-bold text-gray-800 mb-2">Frequent Receipts</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row">
        {frequentReceipts.map((item) => (
          <View key={item.id} className="items-center mx-2">
            <Image
              source={item.image}
              className="w-12 h-12 rounded-full border border-gray-300"
            />
            <Text className="text-[14px] font-normal mt-1 text-[#181F30]">{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Recent Receipts */}
      <Text className="text-[18px] font-bold text-gray-800 mt-8 mb-2">Recent Receipts</Text>

      <View className="mt-8 mb-4">
        <View className="flex-row items-center bg-white px-4 py-2 rounded-lg border border-gray-200">
          <Image 
            source={search}
            className='h-8 w-8 object-fill'
          />
          <TextInput
            placeholder="Search receipts"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="flex-1 ml-2 text-[16px] text-gray-800"
            placeholderTextColor="#6E757D"
          />
        </View>
      </View>

      {filteredReceipts.map((item) => (
        <View key={item.id} className="flex-row items-center justify-between bg-white p-3 rounded-lg mb-2 shadow-sm">
          <View className="flex-row items-center">
            <Image 
                source={item.image}
                className="w-10 h-10 rounded-full"
            />
            <View className='ml-2'>
              <Text className="text-[16px] font-semibold text-[#181F30]">{item.name}</Text>
              <View className='flex flex-row items-center'>
                <Text className="text-lg mr-2 ">{item.flag}</Text>
              <Text className="text-[12px] text-[#6E757D]">{item.country}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity 
          className={`px-4 py-2 rounded-lg ${
            invitedUsers.has(item.id) 
              ? "bg-[#F4F5F7] rounded-lg" 
              : "bg-blue-500"
          }`}
          onPress={() => handleInvite(item.id)}
          disabled={invitedUsers.has(item.id)}
          >
            <Text 
            className={`text-[14px] font-normal ${
              invitedUsers.has(item.id) 
                ? "text-[#6E757D]" 
                : "text-white"
            }`}
            >
              {invitedUsers.has(item.id) ? "Invited" : "Invite"}
              </Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity 
                  className=" p-4 rounded-lg mt-8 bg-[#FFC000] w-full"
                  onPress={() => router.push('/select-payment')}
              >  
                  <Text className="text-[#181F30] text-center font-semibold text-[14px]">Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                  className=" p-4 rounded-lg mt-4 border border-[#6E757D] w-full"
                  onPress={() => router.push('')}
              >  
                  <Text className="text-[#6E757D] text-center font-semibold text-[14px]">Cancel</Text>
              </TouchableOpacity>
    </View>
  );
}
