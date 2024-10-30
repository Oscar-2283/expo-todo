import React, { FC, useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, Dimensions, Easing } from 'react-native';
import { Link } from 'expo-router';
import { useSidebarStyles } from './styles/_styles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar:FC<SidebarProps> = ({ isOpen, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current;
  const styles = useSidebarStyles();

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
        <Text style={styles.sidebarText}>Sidebar</Text>
        {/* 使用 Link 元件進行導航 */}
        <Link href="/" style={styles.link}>
          <Text>連結1</Text>
        </Link>
        <Link href="/" style={styles.link}>
          <Text>連結2</Text>
        </Link>
        <Link href="/" style={styles.link}>
          <Text>連結3</Text>
        </Link>
        <Link href="/" style={styles.link}>
          <Text>連結4</Text>
        </Link>
        <Link href="/" style={styles.link}>
          <Text>連結5</Text>
        </Link>
        <Link href="/" style={styles.link}>
          <Text>連結6</Text>
        </Link>
        <Link href="/" style={styles.link}>
          <Text>連結7</Text>
        </Link>
        <Link href="/" style={styles.link}>
          <Text>連結8</Text>
        </Link>
      </Animated.View>
    </>
  );
};



export default Sidebar;