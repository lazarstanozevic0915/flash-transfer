import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, RadioButton, Pressable } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';
import SocialLoginButtons from '../../components/SocialLoginButtons';
import DatePicker from "react-native-date-picker";

export default function SetIdentity() {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState("Male");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false); 

  const handleRegister = () => {
    // Perform registration logic here
    console.log('Registering user:', { firstName, lastName, gender, dob });
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setDob(currentDate);
    setShowDatePicker(false);
  };

  return (
    <ScrollView>
        <View className="flex-1 bg-white py-20 px-10 font-aeonikBold">
          <View className="flex-1 flex-row items-start mb-8" >
            <TouchableOpacity onPress={() => router.push('/sign-up')} className="flex-row items-center">
            <Image
                source={logo}
                className="w-[40px] h-[30px]"
            />
            </TouchableOpacity>
            <Text className="text-gray-800 font-semibold text-[16px] ml-2 mt-2" >Back</Text>
          </View>
          
          <View className="mb-8">
            <Text className="text-[24px] font-bold mb-2">Set your Identity</Text>
            <Text className="text-[#6E757D] text-[16px]/7 mb-2">Input your personal information and {'\n'}register  your account!</Text>
          </View>
          <View className="space-y-4">
            <Text className='font-semibold text-[14px] mb-2'>First Name</Text>
            <TextInput
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={setFirstName}
              className=" border border-[#EBECED] p-4 rounded-lg mb-2"
            
            />
            

            <Text className='font-semibold text-[14px] mb-2'>Last Name</Text>
            <TextInput
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={setLastName}
              className=" border border-[#EBECED] p-4 rounded-lg mb-2"
            />
      {/* Gender Selection */}
      <Text className="mt-4 text-sm font-semibold">Gender</Text>
            <View className="flex-row mt-2">
              {["Male", "Female"].map((item) => (
                <Pressable
                  key={item}
                  onPress={() => setGender(item)}
                  className={`flex-row items-center px-4 py-2 border rounded-md mr-4 w-[45%] ${
                    gender === item ? "border-gray-300" : "border-gray-300"
                  }`}
                >
                  <View
                    className={`w-4 h-4 rounded-full border p ${
                      gender === item ? "border-white bg-[#FFC000]" : "border-gray-400"
                    } mr-2`}
                  />
                  <Text>{item}</Text>
                </Pressable>
              ))}
            </View>

            {/* Date of Birth */}
            {/* <Text className="mt-4 text-sm font-semibold">Date of Birth</Text>
            <TouchableOpacity onPress={() => setOpen(true)} className="border p-2 rounded-md mt-1">
              <Text>{date.toDateString()}</Text>
            </TouchableOpacity>
            <DatePicker modal open={open} date={date} onConfirm={(d) => { setOpen(false); setDate(d); }} onCancel={() => setOpen(false)} mode="date" /> */}

            {/* Terms & Conditions with Checkbox */}
            <View className="flex-row items-center mt-4">
              <Pressable
                onPress={() => setIsChecked(!isChecked)}
                className={`w-5 h-5 rounded-sm border-2 ${
                  isChecked ? "bg-blue-500 border-blue-500" : "border-gray-400"
                } flex items-center justify-center mr-2`}
              >
                {isChecked && <Text className="text-white">✔</Text>}
              </Pressable>
              <Text>
                I agree with <Text className="text-blue-500">Terms of use</Text>
              </Text>
            </View>

            
          </View>
          
          <TouchableOpacity 
            className=" p-4 rounded-lg mt-8 bg-[#FFC000]"
            onPress={() => router.push('/set-identity')}
          >
            <Text className="text-gray-900 text-center font-bold text-[14px]">Get Registered</Text>
          </TouchableOpacity>
          
            <SocialLoginButtons />

            <Text className="text-center mt-16 text-[14px]">
                      Already have an account?
                      <TouchableOpacity onPress={() => router.push('/sign-in')}><Text className='text-blue-500'> Login</Text></TouchableOpacity>
                    </Text>
        </View>
        </ScrollView>
  );
}
