import React, { FC, useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, Dimensions, Easing } from 'react-native';
import { Href, Link } from 'expo-router';
import { useSidebarStyles } from './styles/_styles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LinkTypes {
  name: string;
  href: Href;
}

const Sidebar:FC<SidebarProps> = ({ isOpen, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current;
  const styles = useSidebarStyles();

  const linkList:LinkTypes[] = [
    { name: '主題色', href: '/(other)/theme' },
    { name: '連結2', href: '/' },
    { name: '連結3', href: '/' },
    { name: '連結4', href: '/' },
    { name: '連結5', href: '/' },
    { name: '連結6', href: '/' },
    { name: '連結7', href: '/' },
    { name: '連結8', href: '/' },
  ]

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isOpen ? 0 : -Dimensions.get('window').width,
      duration: 400, // 延長動畫時間來使過渡更平滑
      easing: Easing.out(Easing.ease), // 使用 Easing 來平滑過渡
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}
      
      <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
        {/* 使用 Link 元件進行導航 */}
        {linkList.map((link, index) => (
          <Link key={index} href={link.href} style={styles.link}>
            <Text>{link.name}</Text>
          </Link>
        ))}
      </Animated.View>
    </>
  );
};



export default Sidebar;