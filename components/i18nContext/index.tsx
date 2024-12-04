import React, { createContext, useContext, useState } from 'react';
import i18n from '@/i18n/index'; // 你的 i18n 設置文件

// 定義 Context 的類型
interface I18nContextType {
  locale: string;
  translations: Record<string, any>; // 所有翻譯資料
  t: (key: string, options?: object) => string; // 翻譯
  setLocale: (lang: string) => void;
}

// 創建 Context
const I18nContext = createContext<I18nContextType>({
  locale: i18n.locale,
  translations: i18n.translations, // 所有翻譯資料
  t: i18n.t.bind(i18n),
  setLocale: () => {},
});

// 自定義 Hook
export const useI18n = () => useContext(I18nContext);

// 提供者組件
const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState(i18n.locale);

  const changeLanguage = (lang: string) => {
    i18n.locale = lang;
    setLocale(lang);
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        translations: i18n.translations[locale], // 提供當前語言的翻譯資料
        t: i18n.t.bind(i18n), // 提供翻譯函數
        setLocale: changeLanguage,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export default I18nProvider;