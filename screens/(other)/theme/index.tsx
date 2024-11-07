import useCommonStore from '@/store/common';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from 'tamagui';
import useThemeStyles from './styles/_styles';
import { Check } from '@tamagui/lucide-icons'

const GridScreen = () => {
  const { themeType, setThemeType } = useCommonStore();
  const styles = useThemeStyles();
  const [currentTheme, setCurrentTheme] = useState('light'); // 初始設置為 'light'
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

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} style={styles.container}>
      <View style={styles.content}>
        {themeKeys.map((themeKey, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => switchTheme(themeKey.type)}
            style={styles.colorBtn}
          >
            <Text style={styles.text}>
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