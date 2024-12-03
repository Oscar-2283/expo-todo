import { FC, useEffect, useState } from 'react';
import { View, XStack, YStack, Text, Checkbox } from 'tamagui';
import {
  Expand,
  Check as CheckIcon,
  Flag,
  Star,
  StarFull,
  Calendar,
  Trash2,
} from '@tamagui/lucide-icons';
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
  const { filteredTodoList, RemoveTodo, checkedTodo, setFlag } = useTodoStore();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [todoId, setTodoId] = useState<string | null>(null);

  const [popupFlag, setPopupFlag] = useState<{ type: string; color: string }>({
    type: '',
    color: '',
  });
  const groupedTodos = useFormattedData(filteredTodoList);
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

  // 往右滑動的按鈕
  const renderRightActions = (
    id: string,
    progress: Animated.AnimatedInterpolation<number>
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 0],
    });

    return (
      <Animated.View
        style={{
          transform: [{ translateX: trans }],
          flexDirection: 'row',
          width: 180, // 設定總寬度
        }}
      >
        <Pressable onPress={() => console.log('加星號')} style={{ flex: 1 }}>
          <View
            backgroundColor="$color5"
            padding="$2"
            height="100%"
            justifyContent="center"
            alignItems="center"
            gap="$2"
          >
            <Star size="$1" />
            {/* <StarFull size="$2" /> */}
            <Text color="white">加星號</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => console.log('日曆')} style={{ flex: 1 }}>
          <View
            backgroundColor="$color8"
            padding="$2"
            height="100%"
            justifyContent="center"
            alignItems="center"
            gap="$2"
          > 
            <Calendar size="$1" />
            <Text color="white">日曆</Text>
          </View>
        </Pressable>

        <Pressable onPress={() => RemoveTodo(id)} style={{ flex: 1 }}>
          <View
            backgroundColor="#d93c3c"
            padding="$2"
            height="100%"
            justifyContent="center"
            alignItems="center"
            borderTopRightRadius={10}
            borderBottomRightRadius={10}
            gap="$2"
          >
            <Trash2 size="$1" />
            <Text color="white">刪除</Text>
          </View>
        </Pressable>
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
          {items.map((item, index) => (
            <View
              key={item.id}
              position="relative"
              zIndex={items.length - index}
            >
              <Swipeable
                renderRightActions={(progress) =>
                  renderRightActions(item.id, progress)
                }
                overshootRight={false}
                rightThreshold={10}
                friction={2}
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
                    <View marginLeft="auto">
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
                />
              )}
            </View>
          ))}
        </YStack>
      </>
    );

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1, paddingBottom: 80 }}>
        <View flex={1} padding="$3">
          {filteredTodoList.length > 0 ? (
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
              <Expand size="$10" color="$color10" />
              <Text color="$color10" fontSize="$6" marginTop="$4">
                沒有待辦事項
              </Text>
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
