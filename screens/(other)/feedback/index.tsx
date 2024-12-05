import { useI18n } from '@/components/i18nContext';
import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import useFeedbackStyles from '../faq/styles/_styles';

const FeedbackScreen = () => {
  const { locale, translations, t, setLocale } = useI18n();
  const styles = useFeedbackStyles();
  return (
    <>
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View>
        <Text>
          這裡是{t('feedback')}頁面
        </Text>
      </View>
    </ScrollView>
    </>
  );
}
 
export default FeedbackScreen;