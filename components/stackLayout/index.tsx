import { SplashScreen, Stack } from 'expo-router';
import { TamaguiProvider, useTheme } from 'tamagui';
import { useI18n } from '@/components/i18nContext';

const StackLayout = () => {
  const theme = useTheme(); // Now accessible within Tamagui context
  const { t } = useI18n(); // 從 I18nContext 中獲取翻譯函數

  return (
    <Stack>
      <Stack.Screen name="(basic)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(other)/theme/index"
        options={{
          headerShown: true,
          title: t('theme_color'),
          headerStyle: { backgroundColor: theme.background?.val },
          headerTintColor: theme.color?.val,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackTitle: '首頁',
          headerBackTitleVisible: false,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="(other)/star-mission/index"
        options={{
          headerShown: true,
          title: t('starred_tasks'),
          headerStyle: { backgroundColor: theme.background?.val },
          headerTintColor: theme.color?.val,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackTitle: '首頁',
          headerBackTitleVisible: false,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="(other)/donate/index"
        options={{
          headerShown: true,
          title: t('donate'),
          headerStyle: { backgroundColor: theme.background?.val },
          headerTintColor: theme.color?.val,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackTitle: '首頁',
          headerBackTitleVisible: false,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="(other)/feedback/index"
        options={{
          headerShown: true,
          title: t('feedback'),
          headerStyle: { backgroundColor: theme.background?.val },
          headerTintColor: theme.color?.val,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackTitle: '首頁',
          headerBackTitleVisible: false,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="(other)/faq/index"
        options={{
          headerShown: true,
          title: t('faq'),
          headerStyle: { backgroundColor: theme.background?.val },
          headerTintColor: theme.color?.val,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackTitle: '首頁',
          headerBackTitleVisible: false,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="(other)/settings/index"
        options={{
          headerShown: true,
          title: t('settings'),
          headerStyle: { backgroundColor: theme.background?.val },
          headerTintColor: theme.color?.val,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // headerBackTitle: '首頁',
          headerBackTitleVisible: false,
          // headerBackVisible: false,
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default StackLayout;