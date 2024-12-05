import { useI18n } from '@/components/i18nContext';
import { ScrollView, View, Text } from 'react-native';
import Accordion from './components/Accordion';
import useFaqStyles from './styles/_styles';

const FaqScreen = () => {
  const { locale, translations, t, setLocale } = useI18n();
  const styles = useFaqStyles();
  const faqData = [
    { title: '手機無法接收通知和提醒', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '任務提醒沒有聲音', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '購買專業版後功能未升級', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '更換手機後無法使用專業版功能', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '在不同設備上同步資料', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '如何導入系統行事曆', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '如何添加小部件', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '如何在Android調整小部件大小', content: '答案答案答案答案答案答案答案答案答案答案' },
    { title: '其他問題', content: '答案答案答案答案答案答案答案答案答案答案' },
  ];

  return (
    <>
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      style={styles.container}
    >
      <View style={styles.faqView}>
        <Accordion data={faqData} />
      </View>
    </ScrollView>
    </>
  );
}
 
export default FaqScreen;