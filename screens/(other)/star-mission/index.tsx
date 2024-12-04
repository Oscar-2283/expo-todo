import { useI18n } from '@/components/i18nContext';
import { ScrollView, View, Text } from 'react-native';

const StarMissionScreen = () => {
  const { locale, translations, t, setLocale } = useI18n();
  return (
    <>
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View>
        <Text>
          這裡是{t('starred_tasks')}頁面
        </Text>
      </View>
    </ScrollView>
    </>
  );
}
 
export default StarMissionScreen;