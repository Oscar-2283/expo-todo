import { useState } from 'react';
import {
  Button,
  View,
  ScrollView,
  XStack,
  Text,
} from 'tamagui';
import FormInput from '@/components/Form/FormInput';
import { Plus, EllipsisVertical, Search } from '@tamagui/lucide-icons';
import AddTodoModal from '@/screens/(basic)/home/components/AddTodoModal';
import TodoListScreen from '@/screens/(basic)/home/components/TodoListScreen';
import { Pressable } from 'react-native';
import useTodoStore from '@/store/todo';
import { useTheme } from 'tamagui';

export default function HomeScreen() {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const { setFilterText } = useTodoStore();

  return (
    <>
      <View paddingTop="$10" flex={1} backgroundColor="$background">
        <XStack paddingHorizontal="$3" gap="$4">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            flex={1}
          >
            <XStack gap="$3">
              <Button>
                <Text>2283</Text>
              </Button>
              <Button>
                <Text>2283</Text>
              </Button>
              <Button>
                <Text>2283</Text>
              </Button>
              <Button>
                <Text>2283</Text>
              </Button>
              <Button>
                <Text>2283</Text>
              </Button>
            </XStack>
          </ScrollView>
          <Pressable
            style={{
              justifyContent: 'center',
            }}
          >
            <EllipsisVertical size="$1" />
          </Pressable>
        </XStack>

        <TodoListScreen />
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
          style={{ flex: 1, backgroundColor: theme.color2?.val, }}
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
