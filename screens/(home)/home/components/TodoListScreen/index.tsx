import { FC, useState } from 'react';
import { Button, View, XStack, YStack, Text, Separator } from 'tamagui';
import { Expand } from '@tamagui/lucide-icons';
import { Pressable, Animated } from 'react-native';
import {
  Swipeable,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import useTodoStore from '@/store/todo';
import EditTodoModal from '../EditTodoModal';

const TodoListScreen: FC = () => {
  const { TodoList, RemoveTodo } = useTodoStore();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoId, setTodoId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setTodoId(id);
    setOpenEditModal(true);
    console.log('edit', id);
  };

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

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View flex={1} padding="$3">
          {TodoList.length > 0 ? (
            <YStack gap="$2">
              {TodoList.map((item) => (
                <Swipeable
                  key={item.id}
                  renderRightActions={(progress) =>
                    renderRightActions(item.id, progress)
                  }
                  overshootRight={false}
                  friction={2}
                >
                  <XStack gap="$2" alignItems="center" padding="$2">
                    <Pressable onPress={() => handleEdit(item.id)}>
                      <Text>{item.dueDate}</Text>
                      <Text>{item.title}</Text>
                    </Pressable>
                  </XStack>
                  <Separator />
                </Swipeable>
              ))}
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
      />
    </>
  );
};

export default TodoListScreen;
