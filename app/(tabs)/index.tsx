import { Button, View, ScrollView, Text, YStack } from 'tamagui';
import { useState } from 'react';
import useCommonStore from '@/app/store/common';

export default function HomeScreen() {
  const { themeType, setThemeType } = useCommonStore();
  const [changeTheme, setChangeTheme] = useState(false);

  const changeThemeHandler = (type:any) => {
      setThemeType(type);
    setChangeTheme(!changeTheme);
  };

  return (
    <>
      <View paddingTop="$9" flex={1} backgroundColor="$background">
        <YStack>
          <Button onPress={() => changeThemeHandler('light')}>Change Theme</Button>
          <Button onPress={() => changeThemeHandler('dark')}>Change Theme</Button>
          <Button onPress={() => changeThemeHandler('light_accent')}>Change Theme</Button>
          <Button onPress={() => changeThemeHandler('dark_accent')}>Change Theme</Button>
        </YStack>
      </View>
    </>
  );
}
