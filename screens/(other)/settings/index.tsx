import { useI18n } from "@/components/i18nContext";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import {
  Bell,
  FileSymlink,
  PersonStanding,
  Timer,
  Settings,
  ArrowDownUp,
  Globe2,
  StarHalf,
  Share2,
  Edit3,
  ShieldEllipsis,
  Boxes
} from "@tamagui/lucide-icons";
import useSettingStyles from "./styles/_styles";
import { cloneElement, useState } from "react";
import LanguageModal from "./components/LanguageModal";

const SettingsScreen = () => {
  const { locale, translations, t, setLocale } = useI18n();
  const styles = useSettingStyles();

  const [isLanguageModalVisible, setLanguageModalVisible] = useState(false);

  const customItems = [
    {
      subTitle: t('account_synchronization'),
      icon: <PersonStanding />,
      onPress: () => {},
    },
    {
      subTitle: t('notifications_and_reminders'),
      icon: <Bell />,
      onPress: () => {},
    },
    {
      subTitle: t('synchronize_system_calendar_events'),
      icon: <FileSymlink />,
      onPress: () => {},
    },
  ];

  const dateTimesItems = [
    {
      subTitle: t('time_format'),
      icon: <Timer />,
      onPress: () => {},
    },
    {
      subTitle: t('task_reminder_time_default_value'),
      icon: <Settings />,
      onPress: () => {},
    },
  ];

  const taskItems = [
    { subTitle: t('time_range_sorting'), icon: <ArrowDownUp />, onPress: () => {} },
  ];
  const aboutItems = [
    { subTitle: t('language'), icon: <Globe2 />, onPress: () => setLanguageModalVisible(true) },
    { subTitle: t('rate_app'), icon: <StarHalf />, onPress: () => {} },
    { subTitle: t('share_app'), icon: <Share2 />, onPress: () => {} },
    { subTitle: t('feedback'), icon: <Edit3 />, onPress: () => {} },
    { subTitle: t('privacy_policy'), icon: <ShieldEllipsis />, onPress: () => {} },
    { subTitle: t('version'), icon: <Boxes />, onPress: () => {} },
  ];
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.settings_container}>
          <View style={styles.title_block}>
            <Text style={styles.title}>{t('customization')}</Text>
          </View>
          <View>
            {customItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.subTitle_block]}
                onPress={item.onPress}
              >
                {cloneElement(item.icon, { style: [styles.subTitle_cion] })}
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.settings_container}>
          <View style={styles.title_block}>
            <Text style={styles.title}>{t('time')} ＆ {t('date')}</Text>
          </View>
          <View>
            {dateTimesItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.subTitle_block]}
                onPress={item.onPress}
              >
                {cloneElement(item.icon, { style: [styles.subTitle_cion] })}
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.settings_container}>
          <View style={styles.title_block}>
            <Text style={styles.title}>{t('task_appearance_customization')}</Text>
          </View>
          <View>
            {taskItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.subTitle_block]}
                onPress={item.onPress}
              >
                {cloneElement(item.icon, { style: [styles.subTitle_cion] })}
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.settings_container}>
          <View style={styles.title_block}>
            <Text style={styles.title}>{t('about')}</Text>
          </View>
          <View>
            {aboutItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.subTitle_block]}
                onPress={item.onPress}
              >
                {cloneElement(item.icon, { style: [styles.subTitle_cion] })}
                <Text style={styles.subTitle}>{item.subTitle}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
      {/* 引入語言選擇彈窗 */}
      <LanguageModal
        visible={isLanguageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
      />
    </>
  );
};

export default SettingsScreen;
