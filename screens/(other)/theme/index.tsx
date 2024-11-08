import useCommonStore from '@/store/common';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from 'tamagui';
import useThemeStyles from './styles/_styles';
import { Check } from '@tamagui/lucide-icons'
import tamaguiConfig from '@/tamagui.config';

const GridScreen = () => {
  const { themeType, setThemeType } = useCommonStore();
  const styles = useThemeStyles();
  const { themes } = tamaguiConfig;
  const themeKeys = [
    { type: 'light',
      name: '亮色'
    },
    { type: 'dark',
      name: '暗色'
    },
    { type: 'light_accent',
      name: "亮紫色"
    },
    { type: 'dark_accent',
      name: "暗紫色"
    }
  ] as const;

  const switchTheme = (theme: 'dark' | 'light' | 'light_accent' | 'dark_accent') => {
    setThemeType(theme); // 更新當前主題
  };

  const theme = useTheme(); // 獲取當前主題

  // 根據 themeType 動態選擇背景顏色
  const themeBackgroundColors = {
    light: themes.light.color2.val,
    dark: themes.dark.color2.val,
    light_accent: themes.light_accent.color2.val,
    dark_accent: themes.dark_accent.color2.val,
  };
  // 根據 themeType 動態選擇文字顏色
  const themeTextColors = {
    light: themes.light.color.val,
    dark: themes.dark.color.val,
    light_accent: themes.light_accent.color.val,
    dark_accent: themes.dark_accent.color.val,
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} style={styles.container}>
      <View style={styles.content}>
        {themeKeys.map((themeKey, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => switchTheme(themeKey.type)}
            style={[
              styles.colorBtn,
              {backgroundColor: themeBackgroundColors[themeKey.type]},
            ]}
          >
            <Text style={[styles.text, { color: themeTextColors[themeKey.type] }]}>
              {themeKey.name}
            </Text>
            <Check
              size="$1"
              color={themeType === themeKey.type ? theme.$color12?.val : theme.color0?.val}
              style={{ position: 'absolute', right: 16 }}
              
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default GridScreen;