import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import done from '../../assets/image/icons/done.png'
import { icons, language } from '../../assets/image';

const language2 = () => {

    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeLanguage, setActiveLanguage] = useState('English')

    const languages = [
        { flag: language.arabic2 , name: 'Arabic' },
        { flag: language.english2 , name: 'English' },
        { flag: language.french2 , name: 'French' },
        { flag: language.germany2 , name: 'Germany' },
        { flag: language.italy2 , name: 'Italian' },
        { flag: language.spanish2 , name: 'Spanish' },
    ]

    // Filter and search logic
    const filteredData = useMemo(() => {
    // If currencies or searchQuery is null/undefined, return empty array
    if (!languages) return [];
    
    return languages.filter(item => {
        // Null checks for item properties
        const name = item.name?.toLowerCase() || '';
        const query = searchQuery.toLowerCase();
    
        // Search filter
        const searchMatch = (
        name.includes(query)
        );
    
        return searchMatch;
    });
    }, [languages, searchQuery]);

  return (
    <View className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5 font-aeonikBold">
        <View className="flex-row justify-between items-center">
            <View>
                <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center gap-3">
                    <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                    <Text className="text-[#181F30] font-medium items-center text-[16px]">Back</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View className="relative w-full">
            <TextInput 
                type="text" 
                className='w-full border border-[#D3D8DD] text-[14px] bg-white rounded-lg px-4 py-3 pl-12 '
                value={searchQuery}
                onChangeText={setSearchQuery} 
                placeholder='Search Language' 
                placeholderTextColor="#6E757D"
            />
            <View className="absolute left-3 bottom-2.5">
                <Image source={icons.search2} alt="" className='h-6 w-6 object-fill' />
            </View>
        </View>
        <View className=''>
            {filteredData.map((item, index) => (
                <TouchableOpacity
                key={index}
                onPress={() => setActiveLanguage(item.name)}
                className="p-3 border-b border-[#D3D8DD] flex-row items-center justify-between rounded-2xl gap-3 mb-3"
                >
                    <View className='flex-row items-center gap-3'>
                        <View className='h-6 w-6 rounded-full bg-[#F4F5F7] flex items-center justify-center'>
                            <Image source={item.flag} className='w-full h-full object-fill' />
                        </View>
                        <Text className='text-[16px] text-[#181F30] font-medium' >{item.name}</Text>
                    </View>
                    { 
                        activeLanguage === item.name &&
                        <View>
                            <Image source={done} />
                        </View>
                    }
                </TouchableOpacity>
            ))}
        </View>
    </View>
  )
}

export default language2