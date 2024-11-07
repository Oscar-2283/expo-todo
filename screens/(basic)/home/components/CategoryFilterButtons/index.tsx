import { Button, ScrollView, XStack } from 'tamagui';
import useTodoStore from '@/store/todo';
import { Categories } from '@/constants';

export default function CategoryFilterButtons() {
  const { filterCategory, setFilterCategory } = useTodoStore();

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} flex={1}>
      <XStack gap="$3">
        <Button
          backgroundColor={!filterCategory ? '$color5' : '$color3'}
          onPress={() => setFilterCategory(null)}
        >
          全部
        </Button>
        {Categories.map((category) => (
          <Button
            key={category.value}
            backgroundColor={
              filterCategory === category.value ? '$color5' : '$color3'
            }
            onPress={() => setFilterCategory(category.value)}
          >
            {category.label}
          </Button>
        ))}
      </XStack>
    </ScrollView>
  );
}
