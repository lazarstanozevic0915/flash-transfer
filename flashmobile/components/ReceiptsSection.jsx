import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import alex from '../assets/images/alex.png';
import Billy from '../assets/images/Billy.png';
import courtney from '../assets/images/courtney.png';
import james from '../assets/images/james.png';
import mark from '../assets/images/mark.png';
import micheal from '../assets/images/micheal.png';
import robert from '../assets/images/robert.png';
import theresa from '../assets/images/theresa.png';

const frequentReceipts = [
  { id: 1, name: "Michael", image: micheal },
  { id: 2, name: "Billy", image: Billy },
  { id: 3, name: "Mark", image: mark },
  { id: 4, name: "James", image: james },
  { id: 5, name: "Alex", image: alex },
];

const recentReceipts = [
  { id: 1, name: "Theresa Webb", country: "USA", flag: "🇺🇸", image: theresa },
  { id: 2, name: "Courtney Henry", country: "France", flag: "🇫🇷", image: courtney },
  { id: 3, name: "Robert Fox", country: "USA", flag: "🇺🇸", image: robert },
];

export default function ReceiptsSection() {
  return (
    <View className="px-4 py-4 bg-gray-100">
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
      {recentReceipts.map((item) => (
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
          <TouchableOpacity className="bg-blue-500 px-4 py-1 rounded-lg">
            <Text className="text-white text-[14px] font-normal">Share</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
