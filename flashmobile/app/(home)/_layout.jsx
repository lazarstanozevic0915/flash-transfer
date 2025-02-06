import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const HomeLayout = () => {
  return (
    <>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="cash" />
      <Stack.Screen name="add-new" />
      <Stack.Screen name="select-payment" />
      <Stack.Screen name="select-method" />
      <Stack.Screen name="review-details" />
      <Stack.Screen name="payment-done" />
      <Stack.Screen name="payment-complete" />
      <Stack.Screen name="enter-card" />
    </Stack>
    <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default HomeLayout