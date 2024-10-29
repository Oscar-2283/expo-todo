import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import * as React from 'react';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../tamagui.config';
import useCommonStore from '@/store/common';
import { StatusBar } from 'expo-status-bar';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { themeType } = useCommonStore();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || !themeType) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={themeType}>
      <StatusBar style={themeType === 'light' ? 'auto' : 'light'}  />
      <Stack>
        <Stack.Screen name="(basic)" options={{ headerShown: false }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
    </TamaguiProvider>
  );
}
