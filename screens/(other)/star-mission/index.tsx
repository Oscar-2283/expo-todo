import { useI18n } from '@/components/i18nContext';
import { ScrollView, View, Text } from 'tamagui';
import TodoListScreen from './components/TodoListScreen'

const StarMissionScreen = () => {
  const { locale, translations, t, setLocale } = useI18n();
  return (
    <>
    <ScrollView flex={1} backgroundColor="$background">
      <View>
        <TodoListScreen />
      </View>
    </ScrollView>
    </>
  );
}

export default StarMissionScreen;