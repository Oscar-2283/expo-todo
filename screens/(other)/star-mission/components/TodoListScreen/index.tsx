import { FC, useEffect, useState } from 'react';
import { View, XStack, YStack, Text, Checkbox } from 'tamagui';
import { Expand, Check as CheckIcon, StarFull } from '@tamagui/lucide-icons';
import { Pressable } from 'react-native';

import useTodoStore from '@/store/todo';
import EditTodoModal from '@/components/todoList/EditTodoModal';
import useFormattedData from '@/screens/(basic)/home/hooks/useFormattedData';

const TodoListScreen: FC = () => {
  const { filteredTodoList, checkedTodo, setStar } = useTodoStore();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoId, setTodoId] = useState<string | null>(null);
  const groupedTodos = useFormattedData(filteredTodoList);
  const { star } = groupedTodos;

  const handleEdit = (id: string) => {
    setTodoId(id);
    setOpenEditModal(true);
  };

  const handleCheck = (checked: boolean, id: string) => {
    checkedTodo(id, checked);
  };

  // 移除標星
  const toggleStar = (id: string) => {
    setStar(id, false);
  };

  return (
    <>
      <View flex={1} padding="$3">
        {star.length > 0 ? (
          <YStack gap="$2">
            <View position="relative" zIndex={3}>
              <YStack gap="$3">
                {star.map((item, index) => (
                  <View
                    key={item.id}
                    position="relative"
                    zIndex={star.length - index}
                  >
                    <XStack
                      gap="$2"
                      alignItems="center"
                      padding="$3"
                      backgroundColor="$color2"
                      borderTopLeftRadius={10}
                      borderBottomLeftRadius={10}
                      overflow="unset"
                    >
                      <XStack flex={1} alignItems="center" gap="$3">
                        <Checkbox
                          size="$4"
                          checked={item.checked}
                          onCheckedChange={(checked: boolean) =>
                            handleCheck(checked, item.id)
                          }
                        >
                          <Checkbox.Indicator>
                            <CheckIcon />
                          </Checkbox.Indicator>
                        </Checkbox>
                        <View>
                          <Pressable onPress={() => handleEdit(item.id)}>
                            <Text
                              fontSize={18}
                              fontWeight={700}
                              textDecorationLine={
                                item.checked ? 'line-through' : 'none'
                              }
                              opacity={item.checked ? 0.5 : 1}
                              marginBottom="$1"
                            >
                              {item.title}
                            </Text>
                            <Text
                              textDecorationLine={
                                item.checked ? 'line-through' : 'none'
                              }
                              opacity={item.checked ? 0.5 : 1}
                            >
                              {item.dueDate}
                            </Text>
                          </Pressable>
                        </View>
                      </XStack>
                      <Pressable onPress={() => toggleStar(item.id)}>
                        <StarFull size="$1" color="yellow" />
                      </Pressable>
                    </XStack>
                  </View>
                ))}
              </YStack>
            </View>
          </YStack>
        ) : (
          <View flex={1} justifyContent="center" alignItems="center">
            <Expand size="$10" color="$color10" />
            <Text color="$color10" fontSize="$6" marginTop="$4">
              沒有待辦事項
            </Text>
          </View>
        )}
      </View>
      <EditTodoModal
        modalVisible={openEditModal}
        setModalVisible={setOpenEditModal}
        todoId={todoId!}
      />
    </>
  );
};

export default TodoListScreen;
