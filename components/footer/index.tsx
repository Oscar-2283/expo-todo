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
        screenOptions={{
          tabBarActiveTintColor: theme.color5?.val ?? '',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.background075?.val ?? '', 
          },
        }}
      >
        <Tabs.Screen
          name="task/index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
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
            title: 'Document',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="calendar/index"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search/index"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="person/index"
          options={{
            title: 'Person',
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