import useCommonStore from '@/store/common';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from 'tamagui';

const GridScreen = () => {
  const { themeType, setThemeType } = useCommonStore();
  const [currentTheme, setCurrentTheme] = useState('light'); // 初始設置為 'light'
  const themeKeys = ['light', 'dark', 'light_accent', 'dark_accent'] as const;

  const switchTheme = (theme: 'dark' | 'light' | 'light_accent' | 'dark_accent') => {
    setThemeType(theme); // 更新當前主題
  };

  const theme = useTheme(); // 獲取當前主題

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} style={{backgroundColor: theme.background?.val}}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
        {themeKeys.map((themeKey) => (
          <TouchableOpacity
            key={themeKey}
            onPress={() => switchTheme(themeKey)}
            style={{
              backgroundColor: theme.background?.val || 'white', // 使用當前主題背景色
              width: '30%',
              aspectRatio: 1,
              marginBottom: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}
          >
            <Text style={{ color: theme.color?.val || 'black', fontWeight: 'bold' }}>
              {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)} Theme
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default GridScreen;