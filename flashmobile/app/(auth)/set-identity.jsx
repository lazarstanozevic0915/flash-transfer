import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, RadioButton, Pressable } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import logo from '../../assets/images/logo.png';
import SocialLoginButtons from '../../components/SocialLoginButtons';
import back from '../../assets/image/icons/backButton.png'
import DatePicker from "react-native-date-picker";
import DateSelection from '../../components/DateSelection';

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
    {/* Back Button */}
    <View className="flex-1 flex-row items-start mb-8">
      <TouchableOpacity onPress={() => router.push('/sign-up')} className="flex-row items-center">
        <Image source={back} className="w-[30px] h-[30px] object-fill" />
        <Text className="text-gray-800 font-semibold text-[16px] ml-3">Back</Text>
      </TouchableOpacity>
    </View>

    {/* Title Section */}
    <View className="mb-8">
      <Text className="text-[24px] font-bold mb-2">Set your Identity</Text>
      <Text className="text-[#6E757D] text-[16px] leading-7">
        Input your personal information and {"\n"}register your account!
      </Text>
    </View>

    {/* Form Fields */}
    <View className="space-y-4">
      {/* First Name */}
      <Text className="font-semibold text-[14px] mb-2">First Name</Text>
      <TextInput
        placeholder="Enter your first name"
        placeholderTextColor="#6E757D"
        value={firstName}
        onChangeText={setFirstName}
        className="border border-[#EBECED] p-4 rounded-lg mb-2"
      />

      {/* Last Name */}
      <Text className="font-semibold text-[14px] mb-2">Last Name</Text>
      <TextInput
        placeholder="Enter your last name"
        placeholderTextColor="#6E757D"
        value={lastName}
        onChangeText={setLastName}
        className="border border-[#EBECED] p-4 rounded-lg mb-2"
      />

      {/* Gender Selection */}
      <Text className="mt-4 text-sm font-semibold">Gender</Text>
      <View className="flex-row mt-2">
        {["Male", "Female"].map((item) => (
          <Pressable
            key={item}
            onPress={() => setGender(item)}
            className={`flex-row items-center px-4 py-4 border rounded-md mr-4 w-[45%] ${
              gender === item ? "border-[#FFC000]" : "border-gray-300"
            }`}
          >
            <View
              className={`w-4 h-4 rounded-full border ${
                gender === item ? "border-[#FFC000] bg-[#FFC000]" : "border-gray-400"
              } mr-2`}
            />
            <Text>{item}</Text>
          </Pressable>
        ))}
      </View>

      {/* Date Selection */}
      <View className="mt-5 mb-3">
        <DateSelection />
      </View>

      {/* Checkbox Agreement */}
      <View className="flex-row items-center mt-4">
        <Pressable
          onPress={() => setIsChecked(!isChecked)}
          className={`w-5 h-5 rounded-sm border-2 ${
            isChecked ? "bg-blue-500 border-blue-500" : "border-gray-400"
          } flex items-center justify-center`}
        >
          {isChecked && <Text className="text-white text-[8px]">✔</Text>}
        </Pressable>
        <Text className="ml-2">
          I agree with <Text className="text-blue-500">Terms of use</Text>
        </Text>
      </View>
    </View>

    {/* Get Registered Button */}
    <TouchableOpacity
      className="p-4 rounded-lg mt-8 bg-[#FFC000]"
      onPress={() => router.push('/verification')}
    >
      <Text className="text-gray-900 text-center font-bold text-[14px]">Get Registered</Text>
    </TouchableOpacity>

    {/* Social Login Buttons */}
    <SocialLoginButtons />

    {/* Already Have an Account Section (Fixed) */}
    <View className="flex-row justify-center mt-16">
      <Text className="text-[14px]">Already have an account?</Text>
      <TouchableOpacity onPress={() => router.push('/sign-in')}>
        <Text className="text-blue-500 text-[14px]"> Login</Text>
      </TouchableOpacity>
    </View>
  </View>
</ScrollView>

  );
}
