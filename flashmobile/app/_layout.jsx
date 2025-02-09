import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { View, ActivityIndicator } from "react-native";
import { UserProvider } from '../context/UserContext';
import "./global.css";

// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    aeonikBold: require("../assets/fonts/Aeonik/AeonikTRIAL-Bold.otf"),
    aeonikBoldItalic: require("../assets/fonts/Aeonik/AeonikTRIAL-BoldItalic.otf"),
    aeonikLight: require("../assets/fonts/Aeonik/AeonikTRIAL-Light.otf"),
    aeonikLightItalic: require("../assets/fonts/Aeonik/AeonikTRIAL-LightItalic.otf"),
    aeonikRegular: require("../assets/fonts/Aeonik/AeonikTRIAL-Regular.otf"),
    aeonikRegularItalic: require("../assets/fonts/Aeonik/AeonikTRIAL-RegularItalic.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <UserProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(home)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
