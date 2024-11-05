// Sidebar.styles.ts
import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'tamagui';

const { width } = Dimensions.get('window');

export const useSidebarStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1,
    },
    sidebar: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: width * 0.5,
      height: '100%',
      backgroundColor: theme.background?.val || '#FFFFFF', // 使用 Tamagui 的 $background，提供默认值
      zIndex: 2,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 40,
    },
    sidebarText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.color12?.val ?? '#FFF',
      marginTop: 20,
      marginBottom: 10,
    },
    link: {
      marginTop: 10,
      paddingVertical: 10,
      color: theme.color12?.val ?? '#FFF',
      fontSize: 16,
      height: 50,
      display: 'flex',
      justifyContent: 'center',
    },
  });
};