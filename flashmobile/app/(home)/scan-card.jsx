import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

import card from '../../assets/images/scancard.png'; // Replace with your card image
import closeIcon from '../../assets/images/close.png'; // Replace with your close button icon

const ScanCard = () => {
  const router = useRouter();
  const borderOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Blinking animation (fade in and out)
    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(borderOpacity, {
          toValue: 0.3,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(borderOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    );

    blinkAnimation.start();

    // Navigate to /confirm-card after 10 seconds
    const timer = setTimeout(() => {
      blinkAnimation.stop(); // Stop animation before navigating
      router.push('/confirm-card');
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View className="flex-col bg-[#EFF0F1] justify-between items-center px-6 py-20 h-full">
      <View>

      {/* Scan Prompt */}
      <Text className="text-center text-[18px] font-semibold text-black mb-20 mt-20">
        Scan your card inside the frame
      </Text>

      {/* Card Frame */}
      <View className="relative w-[320px] h-[180px] mt-8">
        {/* Card Image */}
        <Image source={card} className="w-full h-full rounded-lg" />

        {/* Animated Borders */}
        <Animated.View
          style={{ opacity: borderOpacity }}
          className="absolute -top-4 -left-4 w-20 h-20  rounded-lg border-t-2 border-l-2 border-[#FFC000]"
        />
        <Animated.View
          style={{ opacity: borderOpacity }}
          className="absolute -top-4 -right-4 w-20 h-20 rounded-lg border-t-2 border-r-2 border-[#FFC000]"
        />
        <Animated.View
          style={{ opacity: borderOpacity }}
          className="absolute -bottom-4 -left-4 w-20 h-20 rounded-lg border-b-2 border-l-2 border-[#FFC000]"
        />
        <Animated.View
          style={{ opacity: borderOpacity }}
          className="absolute -bottom-4 -right-4 w-20 h-20 rounded-lg border-b-2 border-r-2 border-[#FFC000]"
        />
      </View>
      </View>

      {/* Close Button */}
      <TouchableOpacity
        className="mt-12 bg-[#FFC000] p-8 rounded-full justify-end w-[75px] h-[75px]"
        onPress={() => router.back()}
      >
        <Image source={closeIcon} className="object-fill" />
      </TouchableOpacity>
    </View>
  );
};

export default ScanCard;
