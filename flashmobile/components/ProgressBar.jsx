// ProgressBar.js
import { View } from 'react-native';
import React from 'react';

const ProgressBar = ({ 
  percentage = 0,
  className = "",
  barColor = "bg-green-500",
  bgColor = "bg-gray-200"
}) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <View className={`w-full h-2.5 ${bgColor} rounded-full overflow-hidden ${className}`}>
      <View 
        className={`h-full ${barColor} rounded-full`}
        style={{
          width: `${clampedPercentage}%`,
        }}
      />
    </View>
  );
};

export default ProgressBar;