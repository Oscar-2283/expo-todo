import { Button, View, Text, XStack } from 'tamagui';
import { Expand } from '@tamagui/lucide-icons';

export default function HomeScreen() {
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
          <Text>1223878</Text>
          <View flex={1} justifyContent='center' alignItems='center'>
            <Expand size="$10" />
          </View>
        </View>
      </View>
    </>
  );
}
