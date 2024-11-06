import { FC, useState } from 'react';
import { XStack, YStack, Button, Checkbox, Text } from 'tamagui';
import {
  Plus,
  Trash,
  Pencil,
  Check as CheckIcon,
  X,
} from '@tamagui/lucide-icons';
import { TodoSubTask } from '@/types/response/todoList';
import ModalInput from '@/components/Form/ModalInput';

interface SubTasksProps {
  subTasks: TodoSubTask[];
  // 修改型別定義，支援函數式更新
  onUpdateSubTasks: (tasks: TodoSubTask[] | ((prev: TodoSubTask[]) => TodoSubTask[])) => void;
}

const SubTasks: FC<SubTasksProps> = ({ subTasks, onUpdateSubTasks }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const addSubTask = () => {
    const newSubTask: TodoSubTask = {
      id: Math.random().toString(36).substring(7),
      title: '',
      checked: false,
    };
    onUpdateSubTasks((prev: TodoSubTask[]) => [...prev, newSubTask]);
  };

  const startEditing = (task: TodoSubTask) => {
    setEditingId(task.id);
    setEditText(task.title);
  };

  const saveEdit = () => {
    if (!editText.trim()) {
      onUpdateSubTasks((prev) => prev.filter((task) => task.id !== editingId));
    } else {
      onUpdateSubTasks((prev) => 
        prev.map((task) =>
          task.id === editingId ? { ...task, title: editText.trim() } : task
        )
      );
    }
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const toggleCheck = (id: string) => {
    onUpdateSubTasks((prev) => 
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const removeSubTask = (id: string) => {
    onUpdateSubTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <YStack width="100%" gap="$2">
      {subTasks.map((task) => (
        <XStack key={task.id} gap="$2" alignItems="center">
          <Checkbox
            checked={task.checked}
            onCheckedChange={() => toggleCheck(task.id)}
            disabled={editingId === task.id}
          >
            <Checkbox.Indicator>
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox>

          {editingId === task.id ? (
            <>
              <ModalInput
                value={editText}
                onChangeText={setEditText}
                autoFocus
              />
              <Button icon={<CheckIcon />} onPress={saveEdit} color="green" />
              <Button icon={X} onPress={cancelEdit} color="red" />
            </>
          ) : (
            <>
              <Text flex={1} opacity={task.checked ? 0.5 : 1}>
                {task.title || '(未命名)'}
              </Text>
              <Button
                icon={Pencil}
                onPress={() => startEditing(task)}
                disabled={task.checked}
              />
              <Button
                icon={Trash}
                onPress={() => removeSubTask(task.id)}
                color="red"
              />
            </>
          )}
        </XStack>
      ))}
      <Button icon={Plus} onPress={addSubTask} alignSelf="flex-end" marginTop="$2">
        添加子任務
      </Button>
    </YStack>
  );
};

export default SubTasks;
