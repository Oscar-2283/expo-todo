import { useState } from 'react';
import { Button, View, Text, XStack } from 'tamagui';
import { Expand, Plus } from '@tamagui/lucide-icons';
import AddTodoModal from '@/screens/(home)/AddTodoModal';
import { Pressable } from 'react-native';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View paddingTop="$10" flex={1} backgroundColor="$background">
        <XStack paddingHorizontal="$3" gap="$4">
          <Button>2283</Button>
          <Button>2283</Button>
          <Button>2283</Button>
          <Button>2283</Button>
          <Button>2283</Button>
        </XStack>
        <View flex={1} padding="$3">
          <View flex={1} justifyContent="center" alignItems="center">
            <Expand size="$10" />
          </View>
        </View>
      </View>
      <AddTodoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <XStack alignItems="center" position="absolute" bottom="$3" right="$4">
        <Pressable onPress={() => setModalVisible(true)}>
          <View backgroundColor="$color3" padding="$2" borderRadius="100%">
            <Plus size="$3" />
          </View>
        </Pressable>
      </XStack>
    </>
  );
}
