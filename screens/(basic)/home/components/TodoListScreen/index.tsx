import { FC, useEffect, useState } from 'react';
import { View, XStack, YStack, Text, Checkbox } from 'tamagui';
import { Expand, Check as CheckIcon, Flag } from '@tamagui/lucide-icons';
import { Pressable, Animated } from 'react-native';
import {
  Swipeable,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import useTodoStore from '@/store/todo';
import EditTodoModal from '../EditTodoModal';
import useFormattedData from '@/screens/(basic)/home/hooks/useFormattedData';
import FlagPopup from './components/FlagPopup';
import FlagComponent from './components/FlagComponent';

const TodoListScreen: FC = () => {
  const { TodoList, RemoveTodo, checkedTodo, setFlag } = useTodoStore();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoId, setTodoId] = useState<string | null>(null);

  const [popupFlag, setPopupFlag] = useState<{ type: string; color: string }>({
    type: '',
    color: '',
  });
  const groupedTodos = useFormattedData(TodoList);
  const { past, present, future } = groupedTodos;

  const handleEdit = (id: string) => {
    setTodoId(id);
    setOpenEditModal(true);
  };

  const [popupVisibility, setPopupVisibility] = useState<{
    [key: string]: boolean;
  }>({});

  // 控制 FlagPopup 的顯示
  const togglePopup = (id: string) => {
    setTodoId(id);
    setPopupVisibility((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 設定 Flag
  const handlePopupFlag = (flag: { type: string; color: string }) => {
    if (todoId) {
      setFlag(todoId, flag);
    }
  };

  useEffect(() => {
    handlePopupFlag(popupFlag);
  }, [popupFlag]);

  const handleCheck = (checked: boolean, id: string) => {
    checkedTodo(id, checked);
  };

  // 往右滑動刪除按鈕
  const renderRightActions = (
    id: string,
    progress: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    return (
      <Animated.View style={{ transform: [{ translateX: trans }] }}>
        <View
          onPress={() => RemoveTodo(id)}
          backgroundColor="red"
          padding="$2"
          height="100%"
          justifyContent="center"
          alignContent="center"
        >
          <Text color="white">刪除</Text>
        </View>
      </Animated.View>
    );
  };

  // 渲染不同時間區段的待辦事項
  const renderTodoSection = (title: string, items: typeof past) =>
    items.length > 0 && (
      <>
        <Text fontSize="$5" fontWeight={600} marginBottom="$2">
          {title}
        </Text>
        <YStack gap="$3">
          {items.map((item) => (
            <View key={item.id}>
              <Swipeable
                renderRightActions={(progress) =>
                  renderRightActions(item.id, progress)
                }
                overshootRight={false}
                friction={2}
              >
                <XStack
                  gap="$2"
                  alignItems="center"
                  padding="$3"
                  backgroundColor="$color2"
                  borderRadius="$2"
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
                          textDecorationLine={
                            item.checked ? 'line-through' : 'none'
                          }
                          opacity={item.checked ? 0.5 : 1}
                        >
                          {item.dueDate}
                        </Text>
                        <Text
                          textDecorationLine={
                            item.checked ? 'line-through' : 'none'
                          }
                          opacity={item.checked ? 0.5 : 1}
                        >
                          {item.title}
                        </Text>
                      </Pressable>
                    </View>
                    <View marginLeft="auto" position="relative">
                      <Pressable onPress={() => togglePopup(item.id)}>
                        {item.flag ? (
                          FlagComponent(item.flag.type, item.flag.color)
                        ) : (
                          <Flag size="$1" />
                        )}
                      </Pressable>
                    </View>
                  </XStack>
                </XStack>
              </Swipeable>
              {popupVisibility[item.id] && (
                <FlagPopup
                  key={`${item.id}-popup`}
                  id={item.id}
                  visible={popupVisibility[item.id]}
                  onClose={() => togglePopup(item.id)}
                  right={0}
                  transform={[{ translateY: -10 }]}
                  setTodoId={setTodoId}
                  onSetPopupFlag={setPopupFlag}
                ></FlagPopup>
              )}
            </View>
          ))}
        </YStack>
      </>
    );

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View flex={1} padding="$3">
          {TodoList.length > 0 ? (
            <YStack gap="$2">
              <View position="relative" zIndex={3}>
                {renderTodoSection('未來', future)}
              </View>
              <View position="relative" zIndex={2}>
                {renderTodoSection('今天', present)}
              </View>
              <View position="relative" zIndex={1}>
                {renderTodoSection('過去', past)}
              </View>
            </YStack>
          ) : (
            <View flex={1} justifyContent="center" alignItems="center">
              <Expand size="$10" />
            </View>
          )}
        </View>
      </GestureHandlerRootView>
      <EditTodoModal
        modalVisible={openEditModal}
        setModalVisible={setOpenEditModal}
        todoId={todoId!}
      />
    </>
  );
};

export default TodoListScreen;
