import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'tamagui';

const useFeedbackStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // gap: 16,
      // padding: 24,
    },
  });
};

export default useFeedbackStyles;
