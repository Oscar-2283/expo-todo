import React, { FC, useState } from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme } from 'tamagui';
import { TouchableOpacity } from 'react-native';

interface FooterProps {
  onHomePress: () => void;
}

const Footer:FC<FooterProps> = ({ onHomePress }) => {
  const theme = useTheme();

  return (
    <>
      {/* Tabs 組件 */}
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: theme.color5?.val ?? '',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.background075?.val ?? '',
            alignItems: 'center',
          },
          tabBarLabelStyle: {
            display: route.name === 'drawer/index' ? 'none' : 'flex',
          }
        })}
      >
        <Tabs.Screen
          name="drawer/index"
          options={{
            tabBarShowLabel: false, // 隱藏標題
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
            ),
            tabBarButton: (props) => (
              <TouchableOpacity {...props} onPress={onHomePress} />
            ), // 不執行路由跳轉
          }}
        />
        {/* 其他 Tabs.Screen 保持不變 */}
        <Tabs.Screen
          name="index"
          options={{
            title: '任務',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar/index"
          options={{
            title: '日曆',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="person/index"
          options={{
            title: '我的',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Footer;