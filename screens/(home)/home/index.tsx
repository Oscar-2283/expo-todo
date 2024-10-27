import { useState } from 'react';
import {
  Button,
  View,
  ScrollView,
  XStack,
  Text,
} from 'tamagui';
import { Plus, EllipsisVertical } from '@tamagui/lucide-icons';
import AddTodoModal from '@/screens/(home)/home/components/AddTodoModal';
import TodoListScreen from '@/screens/(home)/home/components/TodoListScreen';
import { Pressable } from 'react-native';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
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

      <XStack alignItems="center" position="absolute" bottom="$3" right="$4">
        <Pressable onPress={() => setModalVisible(true)}>
          <View backgroundColor="$color3" padding="$2" borderRadius="$10">
            <Plus size="$3" />
          </View>
        </Pressable>
      </XStack>
    </>
  );
}
