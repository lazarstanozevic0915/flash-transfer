import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import frontBack from '../../assets/image/ContactUsBack.png'
import user1 from '../../assets/image/users/homeUser1.png'
import user2 from '../../assets/image/users/homeUser9.png'
import user3 from '../../assets/image/users/homeUser10.png'
import user4 from '../../assets/image/users/homeUser11.png'
import user5 from '../../assets/image/users/blog-user-1.png'
import user6 from '../../assets/image/users/homeUser12.png'
import user7 from '../../assets/image/users/homeUser2.png'
import user8 from '../../assets/image/users/homeUser3.png'
import { language } from '../../assets/image';


const contactUs = () => {
    const router = useRouter(); 
    const [ subject, setSubject ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

  return (
    <ScrollView className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5 font-aeonikBold">
        <View className='flex-col gap-6 pb-10'>
            <View className="flex-row justify-between items-center">
                <View>
                    <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center gap-3">
                        <Image source={back} className="w-[40px] h-[40px] object-fill mt-2" />
                        <Text className="text-[#181F30] font-medium items-center text-[16px]">Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='relative items-center mt-10'>
                <Image source={frontBack} className='w-[282px] h-[250px] object-fill' />
            </View>
            <View>
                <View className='mt-2 mb-5 gap-2'>
                    <Text className='text-[#181F30] text-[18px] font-semibold'>How can we help you?</Text>
                    <Text className='text-[#6E757D] text-[14px] leading-7 w-[280px] font-semibold'>It looks like you have problems with our {`\n`}system. We are here to help you, so, please get in touche with us.</Text>
                </View>
                <View className='gap-4'>
                    <View className='gap-2'>
                        <Text>Subject</Text>
                        <TextInput
                            placeholder="Subject"
                            placeholderTextColor="#6E757D"
                            value={subject}
                            onChangeText={setSubject}
                            className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                        />  
                    </View>
                    <View className='gap-2'>
                        <Text>Email</Text>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="#6E757D"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                        />  
                    </View>
                    <View className='gap-2'>
                        <Text>Message</Text>
                        <TextInput
                            placeholder="Type your message..."
                            placeholderTextColor="#6E757D"
                            multiline = {true}
                            numberOfLines = {10}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            className=" border border-[#EBECED] bg-white text-[14px] p-4 min-h-[154px] rounded-xl"
                        />  
                    </View>
                    <TouchableOpacity className='w-full bg-[#FFC000] py-4 items-center rounded-xl'>
                            <Text className='text-[14px] text-[#181F30] font-medium'>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

export default contactUs