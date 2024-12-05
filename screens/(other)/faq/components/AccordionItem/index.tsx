import { View, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
  SharedValue
} from 'react-native-reanimated';
import useAccordionStyles from '../Accordion/styles/_styles';

type AccordionItemProps = {
  isExpanded: SharedValue<boolean>;
  viewKey: string;
  style?: object;
  duration?: number;
  content: string;
};

const AccordionItem = ({
  isExpanded,
  viewKey,
  style,
  duration = 300,
  content,
}: AccordionItemProps) => {
  const styles = useAccordionStyles();
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isExpanded.value), {
      duration,
    })
  );
  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View
      key={`accordionItem_${viewKey}`}
      style={[styles.animatedView, bodyStyle, style]}>
      <View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={styles.wrapper}
      >
        <View style={styles.box}>
          <Text style={styles.boxContent}>{content}</Text>
        </View>
      </View>
    </Animated.View>
  );
}

export default AccordionItem;