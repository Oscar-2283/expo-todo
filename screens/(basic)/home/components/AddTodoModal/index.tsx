import { FC, useState } from 'react';
import { Alert } from 'react-native';
import SharedModal from '@/components/SharedModal';
import FormInput from '@/components/Form/FormInput';
import FormSelect from '@/components/Form/FormSelect';
import {
  YStack,
  Text,
  View,
  Button,
  Separator,
} from 'tamagui';
import {
  CalendarClock,
  Bell,
  Repeat2,
  CheckCircle,
} from '@tamagui/lucide-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CalendarScreen from '../CalendarScreen';
import ModalFormRow from '@/components/Form/ModalFormRow';
import dayjs from 'dayjs';
import useTodoStore from '@/store/todo';
import { Categories, CategoryEnum, RepeatEnum, RepeatOptions } from '@/constants';

interface AddModalProps {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
}

const AddTodoModal: FC<AddModalProps> = ({ modalVisible, setModalVisible }) => {
  const { AddTodo } = useTodoStore();
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));
  const [time, setTime] = useState<Date | null>(null);
  const [reminderTime, setReminderTime] = useState<Date | null>(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isReminderTimePickerVisible, setReminderTimePickerVisibility] =
    useState(false);
  const [selectedRepeat, setSelectedRepeat] = useState(RepeatEnum.NONE);
  const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.WORK);

  const handleConfirm = (selectedTime: Date, category: string) => {
    if (category === 'time') {
      setTime(selectedTime);
      setTimePickerVisibility(false);
    } else if (category === 'reminder') {
      setReminderTime(selectedTime);
      setReminderTimePickerVisibility(false);
    }
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const showReminderTimePicker = () => {
    setReminderTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const hideReminderTimePicker = () => {
    setReminderTimePickerVisibility(false);
  };

  const resetData = () => {
    setTitle('');
    setSelectedDate(null);
    setTime(null);
    setReminderTime(null);
    setSelectedRepeat(RepeatEnum.NONE);
    setSelectedCategory(CategoryEnum.WORK); 
  };

  const onSubmit = () => {
    console.log('submit');
    if (!title) {
      Alert.alert('請輸入名稱');
      return;
    }
    if (!selectedDate) {
      Alert.alert('請選擇日期');
      return;
    }
    if (!time) {
      Alert.alert('請選擇時間');
      return;
    }
    if (!reminderTime) {
      Alert.alert('請選擇提醒時間');
      return;
    }

    const formData = {
      id: Math.random().toString(36).substring(7),
      category: selectedCategory,
      dueDate: selectedDate,
      time: dayjs(time).format('HH:mm A'),
      reminder: { time: dayjs(reminderTime).format('HH:mm A') },
      repeat: selectedRepeat as any,
      title: title,
      description: '',
      subTasks: [],
      notes: '',
      checked: false,
    };

    AddTodo(formData);
    resetData();
    setModalVisible(false);
  };

  return (
    <SharedModal
      modalVisible={modalVisible}
      onClose={() => setModalVisible(false)}
      closeButton={true}
      onSubmit={onSubmit}
    >
      <YStack
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        gap="$3"
      >
        <CalendarScreen onDaySelect={(date) => setSelectedDate(date)} />

        <View>
          <Text>日期: {selectedDate ?? '尚未選擇'}</Text>
        </View>
        <ModalFormRow label="名稱" icon={<CheckCircle size="$1" />}>
          <FormInput
            placeholder="請輸入名稱"
            value={title}
            onChangeText={(value: string) => setTitle(value)}
          />
        </ModalFormRow>
        <ModalFormRow label="時間" icon={<CalendarClock size="$1" />}>
          <Button onPress={showTimePicker}>
            {time ? dayjs(time).format('HH:mm A') : '選擇時間'}
          </Button>
        </ModalFormRow>
        <ModalFormRow label="提醒" icon={<Bell size="$1" />}>
          <Button onPress={showReminderTimePicker}>
            {reminderTime
              ? dayjs(reminderTime).format('HH:mm A')
              : '選擇提醒時間'}
          </Button>
        </ModalFormRow>
        <ModalFormRow label="重複" icon={<Repeat2 size="$1" />}>
          <FormSelect
            placeholer="重複"
            selectedVal={selectedRepeat}
            options={RepeatOptions}
            onSelect={(value) => setSelectedRepeat(value)}
          />
        </ModalFormRow>
        <ModalFormRow label="類別" icon={<CheckCircle size="$1" />}>
          <FormSelect
            placeholer="類別"
            selectedVal={selectedCategory}
            options={Categories}
            onSelect={(value) => setSelectedCategory(value)}
          />
        </ModalFormRow>

        <Separator
          alignSelf="stretch"
          marginVertical="$2"
        />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          date={time || new Date()}
          onConfirm={(date) => handleConfirm(date, 'time')}
          onCancel={hideTimePicker}
          customCancelButtonIOS={() => (
            <Button onPress={hideTimePicker}>取消</Button>
          )}
          customConfirmButtonIOS={() => (
            <Button onPress={() => handleConfirm(new Date(), 'time')}>
              確定
            </Button>
          )}
        />
        <DateTimePickerModal
          isVisible={isReminderTimePickerVisible}
          mode="time"
          date={reminderTime || new Date()}
          onConfirm={(date) => handleConfirm(date, 'reminder')}
          onCancel={hideReminderTimePicker}
          customCancelButtonIOS={() => (
            <Button onPress={hideReminderTimePicker}>取消</Button>
          )}
          customConfirmButtonIOS={() => (
            <Button onPress={() => handleConfirm(new Date(), 'reminder')}>
              確定
            </Button>
          )}
        />

        <Separator />
      </YStack>
    </SharedModal>
  );
};

export default AddTodoModal;
