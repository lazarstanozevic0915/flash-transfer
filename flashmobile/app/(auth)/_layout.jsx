import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="set-identity" />
      <Stack.Screen name="verification" />
      <Stack.Screen name="success" />
    </Stack>
    <StatusBar backgroundColor='#161622' style='light' />
    </>
  )
}

export default AuthLayout