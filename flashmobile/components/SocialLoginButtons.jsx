import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import  google from "../assets/image/icons/google.svg";
import  facebook from "../assets/image/icons/facebook.svg";
import  apple from "../assets/image/icons/apple.svg";
import  wallet from "../assets/image/icons/wallet.svg";
import Svg, { Path } from 'react-native-svg';

// Import as inline SVG components
const GoogleIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path d="M19.99 10.187c0-.82-.069-1.648-.212-2.452H10.2v4.633h4.808a4.11 4.11 0 0 1-1.796 2.707v3h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
    <Path d="M10.2 20c2.43 0 4.467-.806 5.956-2.18l-2.908-3c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.96v3.094C2.438 17.718 6.091 20 10.2 20Z" fill="#34A853"/>
    <Path d="M5.164 11.969c-.18-.54-.28-1.117-.28-1.703 0-.586.1-1.163.28-1.703V5.469H.96A9.977 9.977 0 0 0 0 10c0 1.614.386 3.14 1.06 4.531l4.104-3.562Z" fill="#FBBC05"/>
    <Path d="M10.2 3.844c1.322 0 2.508.454 3.44 1.345l2.582-2.582C14.66.891 12.623 0 10.2 0 6.091 0 2.438 2.282.96 5.469l4.104 3.562c.708-2.127 2.692-3.687 5.036-3.687Z" fill="#EA4335"/>
  </Svg>
);

const FacebookIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z" fill="#1877F2"/>
  </Svg>
);

const AppleIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path d="M10.188 3.382c1.027-1.247 2.717-2.175 4.155-2.225.363 1.588-.308 3.195-1.258 4.362-1.027 1.247-2.634 2.175-4.156 2.225-.363-1.588.308-3.195 1.259-4.362zM7.055 19.645c-1.418-.82-2.595-1.963-3.479-3.362-1.248-1.987-1.963-4.362-1.963-6.899C1.613 5.027 4.64 2 8.325 2c1.418 0 2.717.533 3.763 1.428-1.027 1.247-1.993 2.881-1.993 4.626 0 3.68 3.027 6.706 6.707 6.706.696 0 1.367-.12 1.993-.33.164.615.258 1.259.258 1.927 0 1.778-.696 3.4-1.834 4.626-1.027 1.028-2.471 1.614-3.996 1.614-1.418 0-2.717-.533-3.763-1.428z" fill="#000"/>
  </Svg>
);


const WalletIcon = () => (
  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <Path d="M17.5 4H2.5C1.673 4 1 4.673 1 5.5v9c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5zm-15 1h15c.276 0 .5.224.5.5V6H2v-.5c0-.276.224-.5.5-.5zm15 10h-15c-.276 0-.5-.224-.5-.5V8h16v6.5c0 .276-.224.5-.5.5zm-14-4h6v1h-6v-1z" fill="#6E757D"/>
  </Svg>
);


export default function SocialLoginButtons() {
  return (
    <>
    <View className="mt-6">
      <View className="text-center mb-4">
        <Text className="text-sm text-gray-500 text-center">OR</Text>
      </View>
      <View className="flex-row flex-wrap justify-between gap-4">
        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          {/* <Image source={google} className="h-6 w-6 mr-2" /> */}
          <GoogleIcon />
          <Text className="text-sm text-[#6E757D]">Google</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          {/* <Image source={facebook} className="h-6 w-6 mr-2" /> */}
          <FacebookIcon />
          <Text className="text-sm text-[#6E757D]">Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          {/* <Image source={apple} className="h-6 w-6 mr-2" /> */}
          <AppleIcon />;
          <Text className="text-sm text-[#6E757D]">Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="flex flex-row items-center justify-center px-8 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        >
          {/* <Image source={wallet} className="h-6 w-6 mr-2" /> */}
          <WalletIcon />
          <Text className="text-sm text-[#6E757D]">Wallet</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}