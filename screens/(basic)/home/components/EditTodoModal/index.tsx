import { FC, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import SharedModal from '@/components/SharedModal';
import ModalInput from '@/components/Form/ModalInput';
import FormSelect from '@/components/Form/FormSelect';
import {
  YStack,
  XStack,
  Text,
  View,
  Button,
  Separator,
  Checkbox,
} from 'tamagui';
import {
  CalendarClock,
  Bell,
  Repeat2,
  CheckCircle,
  Plus,
  Trash,
  Check as CheckIcon,
} from '@tamagui/lucide-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CalendarScreen from '../CalendarScreen';
import ModalFormRow from '@/components/Form/ModalFormRow';
import dayjs from 'dayjs';
import useTodoStore from '@/store/todo';
import {
  Categories,
  CategoryEnum,
  RepeatEnum,
  RepeatOptions,
} from '@/constants';
import { TodoItem, TodoSubTask } from '@/types/response/todoList';
import SubTasks from './components/SubTasks';

interface EditModalProps {
  modalVisible: boolean;
  setModalVisible: (boolean: boolean) => void;
  todoId?: string;
}

const EditTodoModal: FC<EditModalProps> = ({
  modalVisible,
  setModalVisible,
  todoId,
}) => {
  const { TodoList, UpdatedTodo } = useTodoStore();
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [reminderTime, setReminderTime] = useState<Date | null>(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isReminderTimePickerVisible, setReminderTimePickerVisibility] =
    useState(false);
  const [selectedRepeat, setSelectedRepeat] = useState(RepeatEnum.NONE);
  const [selectedCategory, setSelectedCategory] = useState(CategoryEnum.WORK);
  const [subTasks, setSubTasks] = useState<TodoSubTask[]>([]);

  useEffect(() => {
    if (todoId) {
      const todo = TodoList.find((item) => item.id === todoId);
      if (todo) {
        setTitle(todo.title);

        setSelectedDate(todo.dueDate);

        // 解析時間字串（移除 AM/PM）
        const timeDate = dayjs(
          `2000-01-01 ${todo.time.replace(/\s*[AP]M\s*$/i, '')}`
        ).toDate();
        const reminderTimeDate = dayjs(
          `2000-01-01 ${todo.reminder.time.replace(/\s*[AP]M\s*$/i, '')}`
        ).toDate();

        setTime(timeDate);
        setReminderTime(reminderTimeDate);
        setSelectedRepeat(todo.repeat as RepeatEnum);
        setSelectedCategory(todo.category as CategoryEnum);
        setSubTasks(todo.subTasks || []);
      }
    }
  }, [todoId]);

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

  const addSubTask = () => {
    const newSubTask: TodoSubTask = {
      id: Math.random().toString(36).substring(7),
      title: '',
      checked: false,
    };
    setSubTasks([...subTasks, newSubTask]);
  };

  const onSubmit = () => {
    if (!todoId || !title || !selectedDate || !time || !reminderTime) {
      Alert.alert('請填寫所有必要欄位');
      return;
    }

    // 檢查子任務是否都有標題
    if (subTasks.some((task) => !task.title.trim())) {
      Alert.alert('子任務必須要有名稱');
      return;
    }

    const updatedTodo: TodoItem = {
      id: todoId,
      title,
      category: selectedCategory,
      dueDate: selectedDate, // 直接使用 YYYY-MM-DD 格式
      time: dayjs(time).format('HH:mm'), // 使用24小時制
      reminder: { time: dayjs(reminderTime).format('HH:mm') }, // 使用24小時制
      repeat: selectedRepeat,
      subTasks,
      checked: false,
    };

    UpdatedTodo(todoId, updatedTodo);
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
          <ModalInput
            placeholder="請輸入名稱"
            value={title}
            onChangeText={setTitle}
          />
        </ModalFormRow>
        <Separator alignSelf="stretch" marginVertical="$2" />
        <SubTasks subTasks={subTasks} onUpdateSubTasks={setSubTasks} />
        <Separator alignSelf="stretch" marginVertical="$2" />

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

        <Separator alignSelf="stretch" marginVertical="$2" />
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
            <Button onPress={() => handleConfirm(time || new Date(), 'time')}>
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
            <Button
              onPress={() =>
                handleConfirm(reminderTime || new Date(), 'reminder')
              }
            >
              確定
            </Button>
          )}
        />
      </YStack>
    </SharedModal>
  );
};

export default EditTodoModal;
