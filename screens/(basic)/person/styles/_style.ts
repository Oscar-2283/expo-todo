import { StyleSheet } from 'react-native';
import { useTheme } from 'tamagui';

const usePersonStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background?.val,
    },
    content: {
      paddingTop: 16,
      paddingBottom: 16,
      gap: 16,
    },
    user: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    userInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 4,
      marginLeft: 10,
    },
    plan: {
      fontSize: 14,
      color: theme.color?.val,
      textAlign: 'left',
    },
    userName: {
      fontSize: 12,
      textAlign: 'left',
      fontWeight: 'bold',
      color: theme.color?.val,
    },
    misson_block: {
      gap: 10,
    },
    misson_block_title: {
      fontSize: 16,
      textAlign: 'left',
      color: theme.color?.val,
    },
    misson_block_content: {
      flexDirection: 'row',
      gap: 8,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    misson_block_content_item: {
      width: '49%',
      height: 80,
      backgroundColor: theme.$color2?.val,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
    },
    misson_block_content_item_text: {
      color: theme.color?.val,
    },
    chartContainer: {
      height: 220,
      borderColor: theme.color3?.val,
      borderWidth: 1,
      borderRadius: 8,
      padding: 8,
    },
    chartTitle: {
      fontSize: 14,
      marginBottom: 8,
      color: theme.color?.val,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    chart: {
      marginVertical: 8,
      borderRadius: 8,
    },
    futureTodo: {
      borderColor: theme.color3?.val,
      borderWidth: 1,
      borderRadius: 8,
      padding: 16,
    }
  });
}


export default usePersonStyles;
