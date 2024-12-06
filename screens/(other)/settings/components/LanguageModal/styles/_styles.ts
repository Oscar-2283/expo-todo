import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'tamagui';

const useLanguageModalStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      width: "80%",
      padding: 20,
      backgroundColor: theme.background?.val,
      borderRadius: 10,
      alignItems: "center",
      borderColor: theme.color3?.val,
      borderWidth: 1,

      // iOS 的陰影屬性(好像沒有效果，先保留)
      shadowColor: "#ccc",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      // Android 的陰影屬性
      elevation: 8,
    },
    modalTitle: {
      color: theme.color?.val,
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
    },
    languageOption: {
      padding: 10,
      marginVertical: 5,
      width: "100%",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
    },
    languageOption_subTitle: {
      color: theme.color?.val,
    }
  });
};

export default useLanguageModalStyles;
