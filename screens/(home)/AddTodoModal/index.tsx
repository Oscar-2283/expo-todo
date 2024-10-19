import { FC } from 'react';
import SharedModal from '@/components/SharedModal';
import { XStack, Text } from 'tamagui';

interface AddModalProps {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
}
const AddTodoModal: FC<AddModalProps> = ({ modalVisible, setModalVisible }) => {
  return (
    <SharedModal
      modalVisible={modalVisible}
      onClose={() => setModalVisible(false)}
      closeButton={true}
    >
      <XStack
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <Text>123</Text>

      </XStack>
    </SharedModal>
  );
};

export default AddTodoModal;
