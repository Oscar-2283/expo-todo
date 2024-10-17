import { Button, View, YStack } from 'tamagui';
import useCommonStore from '@/app/store/common';

export default function ThemeScreen() {
  const { setThemeType } = useCommonStore();
  const changeThemeHandler = (type:any) => {
    setThemeType(type);
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
