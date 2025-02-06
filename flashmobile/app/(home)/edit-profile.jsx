import React, { useState } from 'react'
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import back from '../../assets/image/back2.png'
import { profileIcons } from '../../assets/image';
import DateSelection2 from '../../components/DateSelection2';
import downArrow from '../../assets/image/icons/arrow-short-down.png'


const editProfile = () => {

  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail] = useState('');
  const [ permanentAddress, setPermanentAddress] = useState('');
  const [ presentAddress, setPresentAddress] = useState('');
  const [ city, setCity] = useState('');
  const [ state, setState] = useState('');
  const [ zip, setZip] = useState('');

  return (
    <ScrollView>
        <View className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5  font-aeonikBold">
            <View className="flex-row justify-between items-center">
                <View>
                    <TouchableOpacity onPress={() => router.push('/profile')} className="flex-row items-center">
                        <Image source={back} className="w-16 h-16 mt-3 object-fill" />
                    </TouchableOpacity>
                </View>
                <Text className='text-[18px] text-[#181F30] font-bold'>Edit Profile</Text>
                <View className='w-6 h-6 mr-12'></View>
            </View>
            <View className='flex-col items-center mt-6 mb-5 gap-4'>
                <View className='relative flex-col items-center'>
                    <Image source={profileIcons.profileImage} className='w-[122px] h-[122px] object-fill' />
                    <Image source={profileIcons.camera} className='w-8 h-8 object-fill absolute bottom-1 right-2' />
                </View>
            </View>
            <View className='flex-col gap-4'>
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>First Name</Text>
                <TextInput
                    placeholder="Alex"
                    placeholderTextColor="#6E757D"
                    value={firstName}
                    onChangeText={setFirstName}
                    className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                  />               
              </View>
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>Last Name</Text>
                <TextInput
                    placeholder="Smeth"
                    placeholderTextColor="#6E757D"
                    value={lastName}
                    onChangeText={setLastName}
                    className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                  />               
              </View>
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>Password</Text>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#6E757D"
                    value={password}
                    onChangeText={setPassword}
                    className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                    secureTextEntry
                  />               
              </View>
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>Email Address</Text>
                <TextInput
                    placeholder="alexsmeth@gmail.com"
                    placeholderTextColor="#6E757D"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    accessibilityLabel="Email or Phone Input"
                    accessibilityHint="Enter your email or phone number"
                    className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                  />               
              </View>
              <DateSelection2 />
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>Permanent Address</Text>
                <TextInput
                    placeholder="San Jose, California, USA"
                    placeholderTextColor="#6E757D"
                    value={permanentAddress}
                    onChangeText={setPermanentAddress}
                    className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                  />               
              </View>
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>Present Address</Text>
                <TextInput
                    placeholder="San Jose, California, USA"
                    placeholderTextColor="#6E757D"
                    value={presentAddress}
                    onChangeText={setPresentAddress}
                    className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                  />               
              </View>
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>City*</Text>
                <TextInput
                    placeholder="San Jose"
                    placeholderTextColor="#6E757D"
                    value={city}
                    onChangeText={setCity}
                    className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                  />               
              </View>
              <View className='flex-col gap-2'>
                <Text className='text-[#181F30] text-[14px] font-medium'>Country/Region</Text>
                <TouchableOpacity className='flex-row items-center'>
                  <View className='py-3 px-4 border border-[#D3D8DD] rounded-s-xl'>
                    <Image source={profileIcons.usaFlag} className='w-6 h-4 object-fill' />
                  </View>
                  <View className='py-3 px-4 border flex-row items-center justify-between w-[84%] border-[#D3D8DD] rounded-e-xl'>
                    <Text className='text-[#6E757D] text-[14px]'>Choose your location</Text>
                    <Image source={downArrow} className='w-[12px] h-[6px] object-fill' />
                  </View>
                </TouchableOpacity>              
              </View>
              <View className='flex-row w-full items-center gap-4'>
                <View className='flex-col gap-2 w-[48%]'>
                  <Text className='text-[#181F30] text-[14px] font-medium'>State*</Text>
                  <TextInput
                      placeholder="USA"
                      placeholderTextColor="#6E757D"
                      value={state}
                      onChangeText={setState}
                      className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                    />               
                </View>
                <View className='flex-col gap-2 w-[48%]'>
                  <Text className='text-[#181F30] text-[14px] font-medium'>ZIP*</Text>
                  <TextInput
                      placeholder="24742"
                      placeholderTextColor="#6E757D"
                      keyboardType="numeric"
                      value={zip}
                      onChangeText={setZip}
                      className=" border border-[#EBECED] bg-white text-[14px] p-4 rounded-xl"
                    />               
                </View>
              </View>
              <TouchableOpacity onPress={() => router.push('/profile')} className='bg-[#FFC000] py-4 mt-2 text-[14px] rounded-xl items-center justify-center'>
                <Text className='text-[#181F30] font-medium'>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default editProfile