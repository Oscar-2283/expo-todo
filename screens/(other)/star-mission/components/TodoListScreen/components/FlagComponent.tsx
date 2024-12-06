import { Flag, Star, BookText } from '@tamagui/lucide-icons';
const FlagComponent = (type: any, color: string) => {
  switch (type) {
    case 'flag':
      return <Flag size="$1" color={color} />;
    case 'star':
      return <Star size="$1" color={color} />;
    case 'book':
      return <BookText size="$1" color={color} />;
    default:
      return null;
  }
};

export default FlagComponent;
