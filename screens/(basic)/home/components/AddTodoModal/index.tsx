import { FC, useState } from 'react';
import { Alert } from 'react-native';
import SharedModal from '@/components/SharedModal';
import {
  XStack,
  YStack,
  Text,
  View,
  Button,
  RadioGroup,
  Label,
  Input,
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
import FormRow from './components/FormRow';
import dayjs from 'dayjs';
import useTodoStore from '@/store/todo';

interface AddModalProps {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
}

const AddTodoModal: FC<AddModalProps> = ({ modalVisible, setModalVisible }) => {
  const { AddTodo } = useTodoStore();
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [reminderTime, setReminderTime] = useState<Date | null>(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isReminderTimePickerVisible, setReminderTimePickerVisibility] =
    useState(false);
  const [radioVal, setRadioVal] = useState('不重複');

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

  const resetData = () =>{
    setTitle('');
    setSelectedDate(null);
    setTime(null);
    setReminderTime(null);
    setRadioVal('不重複');
  }

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
      dueDate: selectedDate,
      time: dayjs(time).format('HH:mm A'),
      reminder: { time: dayjs(reminderTime).format('HH:mm A') },
      repeat: radioVal as '不重複' | '重複',
      title: title,
      description: '',
      subTasks: [],
      notes: '',
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
        <FormRow label="名稱" icon={<CheckCircle size="$1" />}>
          <Input
            width={150}
            placeholder="輸入名稱"
            value={title}
            onChangeText={(value) => setTitle(value)}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </FormRow>
        <FormRow label="時間" icon={<CalendarClock size="$1" />}>
          <Button onPress={showTimePicker}>
            {time ? dayjs(time).format('HH:mm A') : '選擇時間'}
          </Button>
        </FormRow>
        <FormRow label="提醒" icon={<Bell size="$1" />}>
          <Button onPress={showReminderTimePicker}>
            {reminderTime
              ? dayjs(reminderTime).format('HH:mm A')
              : '選擇提醒時間'}
          </Button>
        </FormRow>
        <FormRow label="重複" icon={<Repeat2 size="$1" />}>
          <RadioGroup
            aria-labelledby="Select one item"
            defaultValue="不重複"
            value={radioVal}
            onValueChange={(value) => setRadioVal(value)}
          >
            <XStack gap="$3">
              <XStack alignItems="center">
                <RadioGroup.Item size="$4" value="不重複" id="no-repeat">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>

                <Label size="$4" htmlFor="no-repeat">
                  不重複
                </Label>
              </XStack>
              <XStack alignItems="center">
                <RadioGroup.Item size="$4" value="重複" id="repeat">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>

                <Label size="$4" htmlFor="repeat">
                  重複
                </Label>
              </XStack>
            </XStack>
          </RadioGroup>
        </FormRow>

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
