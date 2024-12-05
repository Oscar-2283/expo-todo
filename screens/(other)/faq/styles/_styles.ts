import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'tamagui';

const useFaqStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: theme.background?.val,
    },
    faqView: {
      width: '100%'
    }
  });
};

export default useFaqStyles;
