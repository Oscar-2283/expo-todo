import { useState } from 'react';
import { View, ScrollView, XStack } from 'tamagui';
import FormInput from '@/components/Form/FormInput';
import { Plus, EllipsisVertical } from '@tamagui/lucide-icons';
import AddTodoModal from '@/components/todoList/AddTodoModal';
import TodoListScreen from '@/screens/(basic)/home/components/TodoListScreen';
import { Pressable } from 'react-native';
import useTodoStore from '@/store/todo';
import { useTheme } from 'tamagui';
import CategoryFilterButtons from './components/CategoryFilterButtons';

export default function HomeScreen() {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const { setFilterText } = useTodoStore();

  return (
    <>
      <View paddingTop="$10" flex={1} backgroundColor="$background">
        <XStack paddingHorizontal="$3" gap="$4">
          <CategoryFilterButtons />
          <Pressable
            style={{
              justifyContent: 'center',
            }}
          >
            <EllipsisVertical size="$1" />
          </Pressable>
        </XStack>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }} 
        >
          <TodoListScreen />
        </ScrollView>
      </View>
      <AddTodoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <XStack
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        padding="$3"
        backgroundColor="$background"
        borderTopWidth={1}
        borderTopColor="$borderColor"
        gap="$2"
      >
        <FormInput
          style={{ flex: 1, backgroundColor: theme.color2?.val }}
          placeholder="搜尋待辦事項..."
          onChangeText={setFilterText}
        />
        <Pressable onPress={() => setModalVisible(true)}>
          <View backgroundColor="$color3" padding="$2" borderRadius="$10">
            <Plus size="$3" />
          </View>
        </Pressable>
      </XStack>
    </>
  );
}
