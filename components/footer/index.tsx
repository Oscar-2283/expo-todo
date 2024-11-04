import React, { FC, useState } from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme } from 'tamagui';
import { TouchableOpacity } from 'react-native';

interface FooterProps {
  onHomePress: () => void;
}

interface ScreenConfig {
  name: string;
  options: {
    title?: string;
    tabBarShowLabel?: boolean;
    tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => JSX.Element;
    tabBarButton?: (props: any) => JSX.Element;
  };
}

const Footer:FC<FooterProps> = ({ onHomePress }) => {
  const theme = useTheme();

  const screens: ScreenConfig[] = [
    {
      name: 'drawer/index',
      options: {
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
        ),
        tabBarButton: (props) => <TouchableOpacity {...props} onPress={onHomePress} />
      }
    },
    {
      name: 'index',
      options: {
        title: '任務',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'document' : 'document-outline'} color={color} />
        )
      }
    },
    {
      name: 'calendar/index',
      options: {
        title: '日曆',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
        )
      }
    },
    {
      name: 'person/index',
      options: {
        title: '我的',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
        )
      }
    }
  ];

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
        {screens.map((screen) => (
          <Tabs.Screen
            key={screen.name}
            name={screen.name}
            options={screen.options}
          />
        ))}
      </Tabs>
    </>
  );
};

export default Footer;