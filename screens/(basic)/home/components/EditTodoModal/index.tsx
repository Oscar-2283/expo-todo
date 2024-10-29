import { FC, useState } from 'react';
import SharedModal from '@/components/SharedModal';
import {
  XStack,
  YStack,
  Text,
  View,
  Button,
  Separator,
  useTheme,
} from 'tamagui';
import { CalendarClock } from '@tamagui/lucide-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CalendarScreen from '../CalendarScreen';
import dayjs from 'dayjs';

interface AddModalProps {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
}
const EditTodoModal: FC<AddModalProps> = ({ modalVisible, setModalVisible }) => {
  const theme = useTheme();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const handleConfirm = (selectedTime: Date) => {
    setTime(selectedTime);
    setTimePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true); 
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false); 
  };

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
        <XStack flex={1} justifyContent="space-between" alignItems="center">
          <XStack flex={1} alignItems="center" gap="$1">
            <CalendarClock size="$2" />
            <Text>時間</Text>
          </XStack>
          <Button onPress={showTimePicker}>
            {time ? dayjs(time).format('HH:mm A') : '選擇時間'}
          </Button>
        </XStack>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          date={time || new Date()} 
          onConfirm={handleConfirm}
          onCancel={hideTimePicker}
          customCancelButtonIOS={() => (
            <Button onPress={hideTimePicker}>取消</Button>
          )}
          customConfirmButtonIOS={() => (
            <Button onPress={() => handleConfirm(new Date())}>確定</Button>
          )}
        />
        <Separator />
      </YStack>
    </SharedModal>
  );
};

export default EditTodoModal;
