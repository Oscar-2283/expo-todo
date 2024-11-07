import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'tamagui';

const useThemeStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background?.val,
      padding: 0,
    },
    content: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    colorBtn: {
      backgroundColor: theme.$color2?.val, // 使用當前主題背景色
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: theme.color3?.val,
      marginBottom: 16,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      // iOS shadow
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      // Android shadow
      elevation: 5,
    },
    text: {
      width: '90%',
      margin: 'auto',
      position: 'relative',
      textAlign: 'left',
      color: theme.color?.val,
      fontWeight: 'bold',
      fontSize: 16,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
};

export default useThemeStyles;
