import { useI18n } from '@/components/i18nContext';
import { ScrollView, View, Text } from 'react-native';

const SettingsScreen = () => {
  const { locale, translations, t, setLocale } = useI18n();
  return (
    <>
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View>
        <Text>
          這裡是{t('settings')}頁面
        </Text>
      </View>
    </ScrollView>
    </>
  );
}
 
export default SettingsScreen;