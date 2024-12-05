import React from 'react';
import { View, Button } from 'react-native';
import Animated,{ useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import useAccordionStyles from './styles/_styles';
import AccordionItem from '../AccordionItem';
import { useTheme } from 'tamagui';
import { ChevronDown } from '@tamagui/lucide-icons'

type AccordionData = {
  title: string;
  content: string;
};

const Accordion = ({ data }: { data: AccordionData[] }) => {
  const theme = useTheme();
  const styles = useAccordionStyles();
  const openStates = data.map(() => useSharedValue(false));
   // 為每個項目創建獨立的開啟狀態和旋轉狀態
   const rotations = data.map(() => useSharedValue(0));

  const handlePress = (index: number) => {
    rotations[index].value = withTiming(
      rotations[index].value === 0 ? 180 : 0,
      { duration: 300 }
    );
    openStates[index].value = !openStates[index].value;
  };

  return (
    <View style={styles.viewContainer}>
      {data.map((item, index) => {
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ rotate: `${rotations[index].value}deg` }],
        }));
        return (
          <View key={`accordion_${index}`}>
            <View style={styles.buttonContainer}>
              <Button onPress={() => handlePress(index)} title={item.title} color={theme.color?.val} />
              <Animated.View style={[animatedStyle]}>
                <ChevronDown />
              </Animated.View>
            </View>
            <View>
              <View style={styles.parent}>
                <AccordionItem 
                  isExpanded={openStates[index]} 
                  viewKey={`accordion_${index}`}
                  content={item.content}
                />
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

export default Accordion;