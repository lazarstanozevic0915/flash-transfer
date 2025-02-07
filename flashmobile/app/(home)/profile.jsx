import React, { useState } from 'react'
import { Image, Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import menu from '../../assets/image/menu-fries.png';
import back from '../../assets/image/back2.png'
import bell from '../../assets/image/icons/notification-bell.png';
import done from '../../assets/image/icons/done.png'
import clear from '../../assets/image/icons/clear.png'
import group from '../../assets/image/icons/group.png'
import { profileIcons } from '../../assets/image';
import { useRouter } from 'expo-router';


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

const options = [
    {
        icon: profileIcons.profileUser2,
        title: 'My Profile',
        link: '/edit-profile'
    },
    {
        icon: profileIcons.transaction2,
        title: 'My Transaction',
        link: '/transaction'
    },
    {
        icon: profileIcons.horizontalSwap,
        title: 'My Recipients',
        link: '/recipients'
    },
    {
        icon: profileIcons.target,
        title: 'Track a Transfer',
        link: '/track-transfer'
    },
    {
        icon: profileIcons.nft2,
        title: 'NFT',
        link: '/nft'
    },
    {
        icon: profileIcons.rank,
        title: 'My Rank',
        link: ''
    },
    {
        icon: profileIcons.notificationBell,
        title: 'Notifications',
        link: '/notification'
    },
    {
        icon: profileIcons.card,
        title: 'My Cards',
        link: ''
    },
    {
        icon: profileIcons.group,
        title: 'Refer a Friend',
        link: '/invite'
    },
    {
        icon: profileIcons.setting2,
        title: 'Setting',
        link: ''
    },
    {
        icon: profileIcons.privacy,
        title: 'Privacy Policy',
        link: ''
    },
    {
        icon: profileIcons.contact,
        title: 'Contact Us',
        link: ''
    },
    {
        icon: profileIcons.web,
        title: 'Language',
        link: '/language'
    },
    {
        icon: profileIcons.logout2,
        title: 'Log out',
        link: ''
    },
]

const profile = () => {
    const router = useRouter();
    const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <ScrollView>
        <View className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5  font-aeonikBold">
            <View className="flex-row justify-between items-center">
                <View>
                    <TouchableOpacity onPress={() => router.push('/home')} className="flex-row items-center">
                        <Image source={back} className="w-16 h-16 mt-3 object-fill" />
                    </TouchableOpacity>
                </View>
                <Text className='text-[18px] text-[#181F30] font-bold'>Profile</Text>
                <View>
                    <TouchableOpacity onPress={() => setActiveDropdown('notification')} className='flex items-center justify-center p-3 rounded-full bg-white'>
                        <Image source={bell} className='w-6 h-6 object-fill'  />
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
            <View className='flex-col items-center mt-6 mb-2 gap-4'>
                <View className='relative flex-col items-center'>
                    <Image source={profileIcons.profileImage} className='w-[122px] h-[122px] object-fill' />
                    <Image source={profileIcons.profileRank} className='w-8 h-8 object-fill absolute -bottom-4' />
                </View>
                <View className='flex-col items-center gap-2'>
                    <Text className='text-[#181F30] text-[20px] font-semibold'>Numan Xafar</Text>
                    <Text className='text-[#6E757D] text-[14px] '>numanzafar994@gmail.com</Text>
                </View>
            </View>
            <View className='flex-col gap-3'>
                {
                    options.map((item, index) => (
                        <TouchableOpacity onPress={() => router.push(item.link)} className='bg-white rounded-2xl p-3 w-full flex-row justify-between items-center' key={index}>
                            <View className='flex-row gap-3 items-center'>
                                <View className='p-3.5 flex items-center justify-center bg-[#F4F5F7] rounded-full'>
                                    <Image source={item.icon} className='w-6 h-6 object-fill' />
                                </View>
                                <Text className='text-[#181F30] text-[16px] font-medium'>{item.title}</Text>
                            </View>
                            <View>
                                <Image source={profileIcons.arrowLeft} className='w-6 h-6 object-fill' />
                            </View>
                        </TouchableOpacity>
                    ) )
                }
            </View>
        </View>
    </ScrollView>
  )
}

export default profile