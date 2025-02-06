import { View, Text, ScrollView, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import menu from '../../assets/image/menu-fries.png';
import bell from '../../assets/image/icons/notification-bell.png';
import done from '../../assets/image/icons/done.png'
import clear from '../../assets/image/icons/clear.png'
import group from '../../assets/image/icons/group.png'
import check from '../../assets/images/check.png'
import code from '../../assets/images/code.png'
import { useRouter } from 'expo-router';

const PaymentComplete= () => {
    const router = useRouter();
    const [activeDropdown, setActiveDropdown] = useState(null);

  const notifications = [
      {
        action: 'Payment sent!',
        desc: 'your payment #1234 has been send',
        icon: done
      },
      {
        action: 'Payment Failed!',
        desc: 'your payment #1234 has been send',
        icon: clear
      },
      {
        action: 'Payment sent!',
        desc: 'your payment #1234 has been send',
        icon: done
      },
      {
        action: 'Payment Failed!',
        desc: 'your payment #1234 has been send',
        icon: clear
      },
      {
        action: 'Payment sent!',
        desc: 'your payment #1234 has been send',
        icon: done
      },
      {
        action: 'Invite friend',
        desc: 'Registration confirmed via affiliate link',
        icon: group
      },
      {
        action: 'Payment sent!',
        desc: 'your payment #1234 has been send',
        icon: done
      },
    ]
    
    const items = [
      'Visit our merchant partner.',
      'Present your order number.',
      'Pay in cash.',
    ];
    
  return (
    <ScrollView>
    <View className="flex flex-col bg-[#FFFFFF] py-4 pt-16 px-4 font-aeonikBold h-full">
      <View className="flex-row justify-between items-center">
                <View>
                  <TouchableOpacity onPress={() => router.push('/profile')} className='flex items-center justify-center p-3 rounded-full bg-[#EFF0F1]'>
                    <Image source={menu} className='w-6 h-6 object-fill'  />
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity onPress={() => setActiveDropdown('notification')} className='flex items-center justify-center p-3 rounded-full bg-[#EFF0F1]'>
                    <Image source={bell} className='w-6 h-6 object-fill bg-[#EFF0F1]'  />
                  </TouchableOpacity>
                  <Modal
                      visible={activeDropdown === 'notification'}
                      transparent={true}
                      animationType="slide"
                    >
                      <TouchableOpacity 
                        className="flex-1 bg-black/50"
                        onPress={() => setActiveDropdown(null)}
                      >
                        <View className="bg-[#EFF0F1] p-5 mt-auto rounded-t-xl">
                          <View className="border-b border-gray-200 mb-5 flex-row justify-between items-center">
                            <Text className="font-bold text-[16px]">Notifications</Text>
                            <TouchableOpacity onPress={() => setActiveDropdown(null)}>
                              <Text className="text-[#6E757D] flex items-center">X</Text>
                            </TouchableOpacity>
                          </View>
                          <ScrollView className='max-h-[450px] min-h-[400px]'>
                            {notifications.map((item, index) => (
                              <TouchableOpacity
                                key={index}
                                // onPress={() => handleSelect(item, type)}
                                className="p-3 border border-gray-100 bg-white flex-row rounded-2xl gap-3 mb-3"
                              >
                                <View className='h-10 w-10 rounded-full bg-[#F4F5F7] flex items-center justify-center'>
                                  <Image source={item.icon} />
                                </View>
                                <View className='flex-col items-start gap-2'>
                                  <Text className='text-[16px] text-[#181F30] font-semibold' >{item.action}</Text>
                                  <Text className='text-[14px] text-[#6E757D] max-w-[180px]'>{item.desc}</Text>
                                </View>
                              </TouchableOpacity>
                            ))}
                          </ScrollView>
                        </View>
                      </TouchableOpacity>
                  </Modal>
                </View>
              </View>
              <View className="flex flex-col items-center justify-center mt-8 gap-2">
                <Image 
                  source={check}
                />
                <Text className='text-center text-[24px] font-bold text-[#181F30]'>Payment Complete</Text>
              </View>
              <View className='p-4 border rounded-2xl border-[#D3D8DD] flex-col gap-3 my-8'>
                       
                    <View className='flex-row justify-between items-center'>
                      <Text className='text-[16px] text-[#6A6A6A] font-normal'>You Sent</Text>
                      <Text className='text-[16px] text-[#181F30] font-semibold '>100 EUR</Text>
                    </View>
                    <View className='flex-row justify-between items-center'>
                      <Text className='text-[16px] text-[#6A6A6A] font-normal'>Transfer Rate</Text>
                      <Text className='text-[16px] text-[#181F30] font-semibold '>1 USDT = 1 EUR</Text>
                    </View>
                    <View className='flex-row justify-between items-center'>
                      <Text className='text-[16px] text-[#6A6A6A] font-normal'>Fee</Text>
                      <Text className='text-[16px] text-[#181F30] font-semibold '>1 Min</Text>
        
                  </View>
                    <View className='flex-row justify-between items-center'>
                      <Text className='text-[16px] text-[#6A6A6A] font-normal'>Transfer Time</Text>
                      <Text className='text-[16px] text-[#181F30] font-semibold '>1 Min</Text>
                    </View>
                    <View className='flex-row justify-between items-center'>
                      <Text className='text-[16px] text-[#6A6A6A] font-normal'>Recipient Gets</Text>
                      <Text className='text-[16px] text-[#181F30] font-semibold '>100.00 EUR</Text>
                    </View>
                    <View className='flex-row justify-between items-center'>
                      <Text className='text-[16px] text-[#6A6A6A] font-normal'>Total to pay</Text>
                      <Text className='text-[16px] text-[#181F30] font-semibold '>102.50 EUR</Text>
                    </View>
                        
              </View>

              <View className='py-3 px-4 bg-[#F4F5F7] rounded-lg flex-row gap-2'>
                <Image 
                  source={code}
                  className="object-fill"
                />
                <Text className="text-[15px] font-medium text-[#2475FF]">
                Tracking number (FTN): 771 824 9542
                </Text>
              </View>

              <View className='my-4 px-2'>
                <Text className='text-[18px] font-bold text-[#181F30]'>
                Receiver Instructions
                </Text>
                <View className="p-2">
                {items.map((item, index) => (
                <Text key={index} className="text-[15px] text-[#6E757D] mb-2">
                {index + 1}. {item}
                </Text>
              ))}
              </View>
              </View>

              <View className="mt-auto mb-2 justify-end">
                      <TouchableOpacity
                        className="bg-[#FFC000] rounded-xl py-4 mb-3"
                        onPress={() => router.push('/enter-card')}
                      >
                        <Text className="text-center font-semibold">Track Order</Text>
                      </TouchableOpacity>
              
                      <TouchableOpacity
                        className="bg-transparent rounded-xl py-4 border border-[#2475FF]"
                        onPress={() => router.push('/home')}
                      >
                        <Text className="text-center text-[#2475FF] font-semibold">Back to Home</Text>
                      </TouchableOpacity>
              </View>
              <View className='my-4 flex items-center '>
                <Text className='text-[18px] text-[#6E757D] font-normal text-center'>Don’t miss out on the benefits of the my wu{"\n"}  SM problem ! you can earn point on future{'\n'} transactions. register today!</Text>
              </View>

    </View>
    </ScrollView>
  )
}

export default PaymentComplete