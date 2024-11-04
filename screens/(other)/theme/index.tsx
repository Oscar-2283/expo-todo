import React from 'react';
import { ScrollView, Button, View, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import useCommonStore from '@/store/common';
import { Colors } from '@/constants/Colors';

const GridScreen = () => {
  const setThemeType = useCommonStore((state) => state.setThemeType);
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  const switchTheme = (theme: keyof typeof Colors) => {
    setThemeType(theme);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, backgroundColor }}>
      <Button title="Switch to Light Theme" onPress={() => switchTheme('light')} />
      <Button title="Switch to Dark Theme" onPress={() => switchTheme('dark')} />
      
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: 16,
        }}
      >
        {[backgroundColor, textColor, backgroundColor, textColor].map((color, index) => (
          <View
            key={index}
            style={{
              backgroundColor: color,
              width: '30%',
              aspectRatio: 1,
              marginBottom: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}
          >
            <Text style={{ color: textColor, fontWeight: 'bold' }}>Color {index + 1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default GridScreen;