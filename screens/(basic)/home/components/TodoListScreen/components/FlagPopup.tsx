import { FC } from 'react';
import Popup from '@/components/Popup';
import { View, XStack, YStack, ViewProps } from 'tamagui';
import { Pressable } from 'react-native';
import { Flag, Star, BookText } from '@tamagui/lucide-icons';

interface FlagPopupProps extends ViewProps {
  id: string;
  visible: boolean;
  setTodoId: (id: string) => void;
  onSetPopupFlag: (flag: { type: string; color: string }) => void;
  onClose: () => void;
}

const FlagPopup: FC<FlagPopupProps> = ({
  id,
  visible,
  setTodoId,
  onSetPopupFlag,
  onClose,
  ...props
}) => {
  const handleSetPopupFlag = (type: string, color: string) => {
    const flag = { type, color };
    setTodoId(id);
    onSetPopupFlag(flag);
    onClose();
  };

  const renderFlag = (type: string) => {
    switch (type) {
      case 'flag':
        return (
          <XStack gap="$3">
            <Pressable onPress={() => handleSetPopupFlag('flag', '')}>
              <Flag size="$1" color="" />
            </Pressable>
            <Pressable onPress={() => handleSetPopupFlag('flag', '#4A90E2')}>
              <Flag size="$1" color="#4A90E2" />
            </Pressable>
            <Pressable onPress={() => handleSetPopupFlag('flag', 'yellow')}>
              <Flag size="$1" color="yellow" />
            </Pressable>
          </XStack>
        );
      case 'star':
        return (
          <XStack gap="$3">
            <Pressable onPress={() => handleSetPopupFlag('star', '')}>
              <Star size="$1" color="" />
            </Pressable>
            <Pressable onPress={() => handleSetPopupFlag('star', '#4A90E2')}>
              <Star size="$1" color="#4A90E2" />
            </Pressable>
            <Pressable onPress={() => handleSetPopupFlag('star', 'yellow')}>
              <Star size="$1" color="yellow" />
            </Pressable>
          </XStack>
        );
      case 'book':
        return (
          <XStack gap="$3">
            <Pressable onPress={() => handleSetPopupFlag('book', '')}>
              <BookText size="$1" color="" />
            </Pressable>
            <Pressable onPress={() => handleSetPopupFlag('book', '#4A90E2')}>
              <BookText size="$1" color="#4A90E2" />
            </Pressable>
            <Pressable onPress={() => handleSetPopupFlag('book', 'yellow')}>
              <BookText size="$1" color="yellow" />
            </Pressable>
          </XStack>
        );
      default:
        return null;
    }
  };

  return (
<>
      {/* 遮罩層 */}
      <Pressable
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // width: 500,
          // height: 500,
          zIndex: 99,
        }}
        onPress={onClose} // 點擊遮罩層觸發關閉
      />
      
      {/* Popup 內容 */}
      <Popup visible={visible} {...props}>
        <View padding="$3">
          <YStack gap="$3">
            {renderFlag('flag')}
            {renderFlag('star')}
            {renderFlag('book')}
          </YStack>
        </View>
      </Popup>
    </>
  );
};

export default FlagPopup;
