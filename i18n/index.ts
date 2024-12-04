import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';
import en from './locales/en.json';
import zh from './locales/zh.json';

// 定義翻譯資源
const translations = {
  en,
  zh,
};

// 初始化 i18n
const i18n = new I18n(translations);

// 設置應用語系，根據裝置語言
const locale = getLocales()[0]?.languageCode;
i18n.locale = locale || 'en'; // 預設為英文
i18n.enableFallback = true; // 啟用回退語系

export default i18n;