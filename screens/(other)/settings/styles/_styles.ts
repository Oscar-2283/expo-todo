import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'tamagui';

const useSettingStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background?.val,
      // justifyContent: 'center',
      // alignItems: 'center',
      // gap: 16,
      // padding: 24,
    },
    settings_container: {
      borderBottomColor: theme.color3?.val,
      borderBottomWidth: 2,
    },
    title_block: {
      padding: 16,
    },
    title: {
      fontSize: 12,
      fontWeight: '200',
      color: theme.color?.val,
    },
    subTitle_block: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    subTitle: {
      fontSize: 16,
      fontWeight: '400',
      color: theme.color?.val,
    },
    subTitle_cion: {
      margin: 8,
      color: theme.color10?.val,
    }
  });
};

export default useSettingStyles;
