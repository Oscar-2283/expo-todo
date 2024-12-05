import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'tamagui';

const useAccordionStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    viewContainer: {
      flex: 1,
      gap: 16,
    },
    buttonContainer: {
      color: theme.color?.val,
      padding: 8,
      backgroundColor: theme.color3?.val,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 12,
    },
    parent: {
      marginTop: 4,
      width: '100%',
    },
    wrapper: {
      width: '100%',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
    },
    animatedView: {
      overflow: 'hidden',
    },
    box: {
      minHeight: 60,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: theme.color3?.val,
      borderRadius: 12,
      // borderBottomEndRadius: 12,
      // borderBottomStartRadius: 12,
    },
    boxContent: {
      color: theme.color?.val,
    }
  });
};

export default useAccordionStyles;

