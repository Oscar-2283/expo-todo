import React, { useState } from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme, Sheet, YStack, XStack, Button } from 'tamagui';

const Footer = () => {
  const theme = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [position, setPosition] = React.useState(0)

  return (
    <>
      {/* Sidebar 使用 Sheet */}
      {/* <Sheet
        modal
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        animation="medium"
        forceRemoveScrollEnabled={isSidebarOpen}
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
      >
        <Sheet.Frame style={{ backgroundColor: theme.background075?.val ?? '', padding: 16 }}>
          <YStack gap="$4">
            <Button onPress={() => setIsSidebarOpen(false)}>Close Sidebar</Button>
            <XStack gap="$2" alignItems="center">
              <TabBarIcon name="home-outline" color={theme.color5?.val ?? ''} />
              <Button>Home</Button>
            </XStack>
            <XStack gap="$2" alignItems="center">
              <TabBarIcon name="document-outline" color={theme.color5?.val ?? ''} />
              <Button>Document</Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet> */}

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
        {/* 改為 Sidebar 開啟按鈕 */}
        {/* <Tabs.Screen
          name="sidebar-toggle"
          options={{
            title: 'Sidebar',
            tabBarIcon: ({ color, focused }) => (
              <Button
                onPress={() => setIsSidebarOpen(true)}
                style={{ backgroundColor: 'transparent' }}
              >
                <TabBarIcon name="menu" color={color} />
              </Button>
            ),
          }}
        /> */}

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />


        {/* 其他 Tabs.Screen 保持不變 */}
        <Tabs.Screen
          name="task/index"
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