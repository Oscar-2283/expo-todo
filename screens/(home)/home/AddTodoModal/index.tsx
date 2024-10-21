import { FC, useState } from 'react';
import SharedModal from '@/components/SharedModal';
import { XStack, YStack, Text, View } from 'tamagui';
import CalendarScreen from '../components/CalendarScreen/index';

interface AddModalProps {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
}
const AddTodoModal: FC<AddModalProps> = ({ modalVisible, setModalVisible }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <SharedModal
      modalVisible={modalVisible}
      onClose={() => setModalVisible(false)}
      closeButton={true}
    >
      <YStack flexWrap="wrap" alignItems="center" justifyContent="center">
        <CalendarScreen onDaySelect={(date) => setSelectedDate(date)} />
        <View>
          <Text>日期: {selectedDate ?? '尚未選擇'}</Text> 
        </View>
      </YStack>
    </SharedModal>
  );
};

export default AddTodoModal;
