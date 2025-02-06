import React, { useMemo, useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, ScrollView, Modal, } from 'react-native';
import { Text } from 'react-native';
import { useRouter } from 'expo-router';
import menu from '../../assets/image/menu-fries.png';
import usdt from '../../assets/image/icons/currency/usdt.png';
import fra from '../../assets/image/icons/currency/fra.png';
import bell from '../../assets/image/icons/notification-bell.png';
import downArrow from '../../assets/image/icons/arrow-short-down.png'
import done from '../../assets/image/icons/done.png'
import clear from '../../assets/image/icons/clear.png'
import group from '../../assets/image/icons/group.png'
import swap from '../../assets/image/icons/exchange-vertical.png'
import user1 from '../../assets/image/users/homeUser1.png'
import user2 from '../../assets/image/users/homeUser2.png'
import user3 from '../../assets/image/users/homeUser3.png'
import user4 from '../../assets/image/users/homeUser4.png'
import { currency, icons, language } from '../../assets/image';

export default function home() {
  const router = useRouter();
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [fromCurrency, setFromCurrency] = useState({ network: 'USDT', logo: usdt, label: 'USDT' });
    const [toCurrency, setToCurrency] = useState({ network: 'EUR', logo: fra, label: 'EUR' });
    const [sendAmount, setSendAmount] = useState('');
    const [receiveAmount, setReceiveAmount] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSwap = () => {
      // Swap currencies
      const tempCurrency = fromCurrency;
      setFromCurrency(toCurrency);
      setToCurrency(tempCurrency);

      // Swap amounts
      const tempAmount = sendAmount;
      setSendAmount(receiveAmount);
      setReceiveAmount(tempAmount);
  };

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
  
  const transactions = [
    {
      name: 'Jane Cooper',
      date: '24 May, 2020',
      action: 'Send',
      amount: '$396.84',
      avatar: user4
    },
    {
      name: 'Marvin McKinney',
      date: '24 May, 2020',
      action: 'Receive',
      amount: '$396.84',
      avatar: user1
    },
    {
      name: 'Esther Howard',
      date: '24 May, 2020',
      action: 'Receive',
      amount: '$396.84',
      avatar: user2
    },
    {
      name: 'Ralph Edwards',
      date: '24 May, 2020',
      action: 'Send',
      amount: '$396.84',
      avatar: user3
    },
  ]

  const currencies = [
    { network: 'EUR', logo: fra, label: 'EUR' },
    { network: 'USDT', logo: usdt, label: 'USDT' },
    { network: 'ETH', logo: currency.arb2, label: 'Arbitrum' },
    { network: 'Avax', logo: currency.avax2 , label: 'Avalanche' },
    { network: 'ETH', logo: currency.base2, label: 'Base' },
    { network: 'EUR', logo: language.belgium2, label: 'Belgium' },
    { network: 'XOF', logo: language.benin2, label: 'Benin' },
    { network: 'BNB', logo: currency.bnb2, label: 'Binance Smart Chain' },
    { network: 'BTC', logo: currency.btc2, label: 'Bitcoin' },
    { network: 'ETH', logo: currency.btc2, label: 'Blast' },
    { network: 'XOF', logo: language.burkina2, label: 'Burkina Faso' },
    { network: 'XAF', logo: language.chad2, label: 'Chad' },
    { network: 'XAF', logo: language.cameroon2, label: 'Cameroon' },
    { network: 'KMF', logo: currency.comoros2, label: 'Comoros' },
    { network: 'CRO', logo: currency.cronos2, label: 'Cronos' },
    { network: 'XAF', logo: language.congoR2, label: 'Congo Brazzaville' },
    { network: 'CDF', logo: language.congoK2, label: 'Congo Kinshasa' },
    { network: 'EVM', logo: currency.dai2, label: 'DAI' },
    { network: 'ETH', logo: currency.eth2, label: 'Ethereum' },
    { network: 'EVM', logo: currency.usdc2, label: 'EURC' },
    { network: 'EVM', logo: usdt, label: 'EURt' },
    { network: 'FTM', logo: currency.fantom2, label: 'Fantom' },
    { network: 'SOL', logo: currency.flash2, label: 'Flash' },
    { network: 'EUR', logo: fra, label: 'France' },
    { network: 'XAF', logo: language.gabon2, label: 'Gabon' },
    { network: 'GMD', logo: language.gambia3, label: 'Gambia' },
    { network: 'EUR', logo: language.germany2, label: 'Germany' },
    { network: 'GHS', logo: language.ghana2, label: 'Ghana' },
    { network: 'GMD', logo: language.gambia3, label: 'Gambia' },
    { network: 'XOF', logo: language.guineaB2, label: 'Guniea Bissau' },
    { network: 'GNF', logo: language.guinea2, label: 'Guniea' },
    { network: 'HTG', logo: language.haiti2, label: 'Haiti' },
    { network: 'INR', logo: language.india, label: 'India' },
    { network: 'EUR', logo: language.ireland2, label: 'Ireland' },
    { network: 'EUR', logo: language.italy2, label: 'Italy' },
    { network: 'XOF', logo: language.ivory2, label: 'Ivory Coast' },
    { network: 'KES', logo: language.kenya2, label: 'Kenya' },
    { network: 'LRD', logo: language.liberia2, label: 'Liberia' },
    { network: 'EUR', logo: language.luxem2, label: 'Luxembourg' },
    { network: 'MGA', logo: language.mada2, label: 'Madagascar' },
    { network: 'XOF', logo: language.mali2, label: 'Mali' },
    { network: 'MRU', logo: language.mauri2, label: 'Mauritania' },
    { network: 'MAD', logo: language.morocco2, label: 'Morocco' },
    { network: 'NGN', logo: language.nigeria2, label: 'Nigeria' },
    { network: 'XOF', logo: language.niger2, label: 'Niger' },
    { network: 'ETH', logo: currency.optimism2, label: 'Optimism' },
    { network: 'Peaq', logo: currency.peaq, label: 'Peaq' },
    { network: 'POL', logo: currency.polygon2, label: 'Polygon' },
    { network: 'EUR', logo: language.portuguese2, label: 'Portugal' },
    { network: 'RWF', logo: language.rwanda2, label: 'Rwanda' },
    { network: 'XOF', logo: language.senegal2, label: 'Senegal' },
    { network: 'SLL', logo: language.sierra2, label: 'Sierra Leone' },
    { network: 'SOL', logo: currency.solanaIcon22, label: 'Solana' },
    { network: 'EUR', logo: language.spanish2, label: 'Spain' },
    { network: 'SUI', logo: currency.sui2, label: 'Sui' },
    { network: 'EUR', logo: language.netherlands2, label: 'The Netherlands' },
    { network: 'TND', logo: language.tunisia2, label: 'Tunisia' },
    { network: 'TZS', logo: language.tanzania2, label: 'Tanzanie' },
    { network: 'TZS', logo: language.togo, label: 'Togo' },
    { network: 'TZS', logo: language.tanzania2, label: 'Tanzania' },
    { network: 'TON', logo: currency.ton2, label: 'Ton' },
    { network: 'EVM', logo: currency.usdc2, label: 'USDC' },
    { network: 'EVM', logo: usdt, label: 'USDT' },
    { network: 'UGX', logo: language.uganda2, label: 'Uganda' },
    { network: 'VND', logo: language.vietnam, label: 'Vietnam' },
  ];

// Filter and search logic
const filteredData = useMemo(() => {
  // If currencies or searchQuery is null/undefined, return empty array
  if (!currencies) return [];
  
  return currencies.filter(item => {
    // Null checks for item properties
    const name = item.label?.toLowerCase() || '';
    const network = item.network?.toLowerCase() || '';
    const query = searchQuery.toLowerCase();

    // Search filter
    const searchMatch = (
      name.includes(query) ||
      network.includes(query)
    );

    return searchMatch;
  });
}, [currencies, searchQuery]);

  return (
  <ScrollView>
    <View className="flex-col gap-6 bg-[#EFF0F1] py-14 px-5  font-aeonikBold">
        <View className="flex-row justify-between items-center">
          <View>
            <TouchableOpacity onPress={() => setActiveDropdown('menu')} className='flex items-center justify-center p-3 rounded-full bg-white'>
              <Image source={menu} className='w-6 h-6 object-fill'  />
            </TouchableOpacity>
              <Modal
                visible={activeDropdown === 'menu'}
                transparent={true}
                animationType="slide"
              >
                <TouchableOpacity 
                  className="flex-1 bg-black/50"
                  onPress={() => setActiveDropdown(null)}
                >
                  <View className="bg-white mt-auto rounded-t-xl">
                    <View className="p-4 border-b border-gray-200 flex-row justify-between items-center">
                      <Text className="font-semibold text-lg">Select </Text>
                      <TouchableOpacity onPress={() => setActiveDropdown(null)}>
                        <Text className="text-blue-500">Done</Text>
                      </TouchableOpacity>
                    </View>
                    <ScrollView className="max-h-72">
                      {transactions.map((item) => (
                        <TouchableOpacity
                          key={item.name}
                          // onPress={() => handleSelect(item, type)}
                          className="p-4 border-b border-gray-100"
                        >
                          <Text>{item.name}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                </TouchableOpacity>
              </Modal>
          </View>
          <Text className='text-[18px] text-[#181F30] font-bold'>Flash Transfer</Text>
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

        <View className='flex-col relative gap-3.5'>
          <View className='bg-white flex-col items-center gap-3.5 rounded-2xl p-4 pb-12'>
            <View className='flex-row justify-between w-full items-center'>
              <View>
                <TouchableOpacity onPress={() => setActiveDropdown('fromCurrency')} className='flex-row items-center gap-2'>
                  <Image source={fromCurrency.logo} className='w-9 h-9 object-fill ' />
                  <Text className='text-[20px] text-[#181F30] font-normal'>{fromCurrency.label}</Text>
                  <Image source={downArrow} className='w-[12px] h-[6px] object-fill ' />
                </TouchableOpacity>
                <Modal
                  visible={activeDropdown === 'fromCurrency'}
                  transparent={true}
                  animationType="slide"
                >
                  <TouchableOpacity 
                    className="flex-1 bg-black/50"
                    onPress={() => setActiveDropdown(null)}
                  >
                    <View className="bg-[#EFF0F1] p-5 mt-auto rounded-t-xl">
                      <View className="border-b border-gray-200 mb-5 flex-row justify-between items-center">
                        <Text className="font-bold text-[16px]">Choose Currency</Text>
                        <TouchableOpacity onPress={() => setActiveDropdown(null)}>
                          <Text className="text-[#6E757D] flex items-center">X</Text>
                        </TouchableOpacity>
                      </View>
                      <Text className='text-[#6E757D] text-[12px] '>The EVM blockchain represents all blockchains compatible with Ethereum (address starting with 0x).If you want to pay with a non-evm crypto like Solana, Ton or other please click on "change". When you send volatile crypto it is automatically converted into stablecoin.</Text>
                      <View className="relative my-3 w-full">
                        <TextInput 
                            type="text" 
                            className='w-full border border-[#D3D8DD] text-[14px] bg-white rounded-lg px-4 py-3 pl-12 '
                            value={searchQuery}
                            onChangeText={setSearchQuery} 
                            placeholder='Search' 
                            placeholderTextColor="#6E757D"
                        />
                        <View className="absolute left-3 bottom-3">
                            <Image source={icons.search2} alt="" className='h-4 w-4 object-fill' />
                        </View>
                      </View>
                       
                      <ScrollView className='max-h-[450px]  min-h-[400px]'>
                        {filteredData.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              setFromCurrency(item);
                              setActiveDropdown(null);
                            }}
                            className="p-3 border-b border-[#D3D8DD] flex-row items-center rounded-2xl gap-3 mb-3"
                          >
                            <View className='h-6 w-6 rounded-full bg-[#F4F5F7] flex items-center justify-center'>
                              <Image source={item.logo} className='w-full h-full object-fill' />
                            </View>
                            <View className='flex-row items-start gap-2'>
                              <Text className='text-[16px] text-[#181F30] font-medium' >{item.label} -</Text>
                              <Text className='text-[16px] text-[#181F30] font-medium'>{item.network}</Text>
                            </View>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </TouchableOpacity>
                </Modal>
              </View>
              <TouchableOpacity className='flex items-center justify-between py-1.5 px-3 border border-[#EBECED] rounded-3xl gap-2'>
                <Text className='text-[14px] text-[#181F30] font-normal'>Send</Text>
              </TouchableOpacity>
            </View>
            <Text>
              <TextInput 
                placeholder="0.9382"
                placeholderTextColor="#6E757D"
                value={sendAmount}
                onChangeText={setSendAmount}
                className='text-[32px] font-semibold text-[#181F30]'
                keyboardType="numeric"
              />
            </Text>
            <Text className='text-[#181F30] text-[14px] font-normal'>Amount Send</Text>
          </View>
          <View className='bg-white flex-col items-center gap-3.5 rounded-2xl p-4 pb-12'>
            <View className='flex-row justify-between w-full items-center'>
              <View>
                <TouchableOpacity onPress={() => setActiveDropdown('toCurrency')} className='flex-row items-center gap-2'>
                  <Image source={toCurrency.logo} className='w-9 h-9 object-fill ' />
                  <Text className='text-[20px] text-[#181F30] font-normal'>{toCurrency.label}</Text>
                  <Image source={downArrow} className='w-[12px] h-[6px] object-fill ' />
                </TouchableOpacity>
                <Modal
                  visible={activeDropdown === 'toCurrency'}
                  transparent={true}
                  animationType="slide"
                >
                  <TouchableOpacity 
                    className="flex-1 bg-black/50"
                    onPress={() => setActiveDropdown(null)}
                  >
                    <View className="bg-[#EFF0F1] p-5 mt-auto rounded-t-xl">
                        <View className="border-b border-gray-200 mb-5 flex-row justify-between items-center">
                          <Text className="font-bold text-[16px]">Choose Currency</Text>
                          <TouchableOpacity onPress={() => setActiveDropdown(null)}>
                            <Text className="text-[#6E757D] flex items-center">X</Text>
                          </TouchableOpacity>
                        </View>
                        <Text className='text-[#6E757D] text-[12px] '>The EVM blockchain represents all blockchains compatible with Ethereum (address starting with 0x).If you want to pay with a non-evm crypto like Solana, Ton or other please click on "change". When you send volatile crypto it is automatically converted into stablecoin.</Text>
                        <View className="relative my-3 w-full">
                          <TextInput 
                              type="text" 
                              className='w-full border border-[#D3D8DD] text-[14px] bg-white rounded-lg px-4 py-3 pl-12 '
                              value={searchQuery}
                              onChange={setSearchQuery} 
                              placeholder='Search' 
                              placeholderTextColor="#6E757D"
                          />
                          <View className="absolute left-3 bottom-3">
                              <Image source={icons.search2} alt="" className='h-4 w-4 object-fill' />
                          </View>
                        </View>
                      <ScrollView className='max-h-[450px]'>
                        {filteredData.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() => {
                              setToCurrency(item);
                              setActiveDropdown(null);
                            }}
                            className="p-3 border-b border-[#D3D8DD] flex-row items-center rounded-2xl gap-3 mb-3"
                          >
                            <View className='h-6 w-6 rounded-full bg-[#F4F5F7] flex items-center justify-center'>
                              <Image source={item.logo} className='w-full h-full object-fill' />
                            </View>
                            <View className='flex-row items-start gap-2'>
                              <Text className='text-[16px] text-[#181F30] font-medium' >{item.label} -</Text>
                              <Text className='text-[16px] text-[#181F30] font-medium'>{item.network}</Text>
                            </View>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </View>
                  </TouchableOpacity>
                </Modal>
              </View>
              <TouchableOpacity className='flex items-center justify-between py-1.5 px-3 border border-[#EBECED] rounded-3xl gap-2'>
                <Text className='text-[14px] text-[#181F30] font-normal'>Receive</Text>
              </TouchableOpacity>
            </View>
            <Text>
              <TextInput 
                placeholder="0.9382"
                placeholderTextColor="#6E757D"
                value={receiveAmount}
                onChangeText={setReceiveAmount}
                className='text-[32px] font-semibold text-[#181F30]'
                keyboardType="numeric"
                aria-disabled={true}
              />
            </Text>
            <Text className='text-[#181F30] text-[14px] font-normal'>Received Amount</Text>
          </View>
          <TouchableOpacity onPress={handleSwap} className='bg-white p-3 rounded-full border-[6px] border-[#EFF0F1] items-center justify-center absolute top-[42%] left-[142px] ' >
            <Image source={swap} className='w-5 h-5 object-fill' />
          </TouchableOpacity>
        </View>
      
        <TouchableOpacity 
            className=" p-4 rounded-xl bg-[#FFC000] w-full"
            onPress={() => router.push('/cash')}
        >
            <Text className="text-[#181F30] text-center font-medium text-[14px]">Continue</Text>
        </TouchableOpacity>

        <View className='p-4 border rounded-2xl border-[#D3D8DD] flex-col gap-8'>
          <View className=' flex-col gap-2'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Exchange Rate</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>1 USDT = 1 EUR</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Fee</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>+2.50 EUR</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Transfer Time</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>1 Min</Text>
            </View>
          </View>
          <View className='h-[1px] w-full border border-[#D3D8DD] bg-[#D3D8DD]'></View>
          <View className=' flex-col gap-2'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Total to Pay</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>102.50 EUR</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-[16px] text-[#6A6A6A] font-normal'>Recipient Gets</Text>
              <Text className='text-[14px] text-[#000000] font-medium '>100.00 EUR</Text>
            </View>
          </View>
        </View>

        <View className='flex-col gap-4'>
          <View className='flex-row justify-between items-center'>
            <Text className='text-[#273240] text-[18px] font-semibold'>Recent transactions</Text>
            <TouchableOpacity className=' py-1.5 px-3 bg-[#2475FF] rounded-lg'>
              <Text className='text-white text-[14px] font-medium'>See all</Text>
            </TouchableOpacity>
          </View>
            {
              transactions.slice(0,4).map(user => (
                <View className='rounded-2xl bg-white px-3.5 py-3.5 flex-row justify-between items-center' key={user.name} >
                    <View className='flex-row gap-2'>
                      <Image source={user.avatar} />
                      <View className='flex-col gap-2 items-start'>
                        <Text className='text-[#181F30] text-[16px] font-semibold'>{user.name}</Text>
                        <Text className='text-[12px] text-[#6E757D] font-normal'>{user.date}</Text>
                      </View>
                    </View>
                    <View className='flex-col gap-2 items-end'>
                        <Text className={`text-[12px] font-medium ${user.action === 'Send' ? 'text-[#FF3E24]' : 'text-[#00C735]'}`}>{user.action}</Text>
                        <Text className='text-[14px] text-[#181F30] font-medium'>{user.amount}</Text>
                    </View>
                </View>
              ))
            }
        </View>
    </View>
  </ScrollView>
  );
}

