import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import back from '../../assets/image/icons/backButton.png'
import { useRouter } from 'expo-router';

const Verification = () => {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(120);
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    // Check if all digits are filled
    if (!code.includes('')) {
      handleSubmit();
    }
  }, [code]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    // Handle verification logic here
    console.log('Submitting code:', code.join(''));
    // You can add your API call or navigation logic here
  };

  const handleCodeChange = (text, index) => {
    if (text.length > 1) {
      // If user pastes multiple digits
      const digits = text.split('').slice(0, 4);
      const newCode = [...code];
      digits.forEach((digit, i) => {
        if (index + i < 4) {
          newCode[index + i] = digit;
        }
      });
      setCode(newCode);
      // Focus last input or move to appropriate input
      const nextIndex = Math.min(index + digits.length, 3);
      inputRefs.current[nextIndex]?.focus();
    } else {
      // Single digit input
      const newCode = [...code];
      newCode[index] = text;
      setCode(newCode);
      
      // Auto-focus next input
      if (text !== '' && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      // Move to previous input on backspace if current input is empty
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex flex-col justify-start h-full bg-white py-20 px-10 font-aeonikBold">
      <View className="flex-row items-start mb-8">
        <TouchableOpacity onPress={() => router.back()} className="flex-row items-center">
          <Image
            source={back}
            className="w-[30px] h-[30px] object-fill"
          />
          <Text className="text-gray-800 font-semibold text-[16px] ml-3">Back</Text>
        </TouchableOpacity>
      </View>

      <View className="mb-8">
        <Text className="text-[24px] font-bold mb-2">Verify your code</Text>
        <Text className="text-[#6E757D] text-[16px]/7 mb-2">
          Check your SMS inbox, we have sent {'\n'}
          you the code at <Text className="text-blue-500">numanzafar@gmail.com</Text>
        </Text>
      </View>

      <View className="flex-row justify-between mb-4">
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            className={`w-16 h-16 border-2 rounded-lg text-center text-2xl font-bold
              ${digit ? 'border-[#FFC000]' : 'border-gray-200'}`}
          />
        ))}
      </View>

      <View className="flex-row justify-between mb-8">
        <TouchableOpacity 
          onPress={() => setTimer(120)} 
          disabled={timer > 0}
        >
          <Text className={`${timer > 0 ? 'text-gray-400' : 'text-blue-500'}`}>
            Didn't get the code? Resend
          </Text>
        </TouchableOpacity>
        <Text className="text-gray-400">{formatTime(timer)}</Text>
      </View>
    </View>
  );
};

export default Verification;