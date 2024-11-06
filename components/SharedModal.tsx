import { ReactNode, FC } from 'react';
import { Modal, View, ModalProps } from 'react-native';
import { Button, ScrollView, useTheme, XStack } from 'tamagui';

interface SharedModalProps extends Partial<ModalProps> {
  modalVisible: boolean;
  onClose: () => void;
  width?: number;
  children: ReactNode;
  closeButton?: boolean; // 控制是否顯示 closeButton
  submitButton?: boolean; // 控制是否顯示 submitButton
  onSubmit?: () => void;
}

const SharedModal: FC<SharedModalProps> = ({
  modalVisible,
  onClose,
  width,
  children,
  closeButton = true,
  submitButton = true,
  onSubmit,
}) => {
  const theme = useTheme();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            backgroundColor: theme.color3?.val ?? '',
            padding: 20,
            borderRadius: 10,
            width: width ? width : '90%',
            maxHeight: "80%"
          }}
        >
          <ScrollView
            style={{ width: '100%' }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {children}
          </ScrollView>
          <XStack justifyContent="flex-end" gap="$2">
            {closeButton && (
              <Button
                backgroundColor="#be1b1b"
                width={80}
                onPress={onClose}
              >
                取消
              </Button>
            )}
            {submitButton && (
              <Button
                backgroundColor="$color6"
                width={80}
                onPress={onSubmit}
              >
                確定
              </Button>
            )}
          </XStack>
        </View>
      </View>
    </Modal>
  );
};

export default SharedModal;
