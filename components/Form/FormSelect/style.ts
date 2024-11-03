import { styled, View, Text, YStack, XStack } from 'tamagui';

export const ModalContainer = styled(YStack, {
  flex: 1,
  justifyContent: 'flex-end',
  width: '100%',
});

export const Content = styled(YStack, {
  backgroundColor: '$color5',
  borderRadius: 20,
  maxHeight: '70%',
  width: '100%',
});

export const Title = styled(Text, {
  color: '$color',
  fontSize: 18,
  fontWeight: '600',
});

export const List = styled(View, {
  paddingHorizontal: 16,
});

export const OptionItem = styled(YStack, {
  paddingVertical: 16,
  borderBottomWidth: 1,
  borderBottomColor: '$color10',
  width: '100%',
  paddingHorizontal: 16,

  variants: {
    selected: {
      true: {
        backgroundColor: '#f0f0f0',
      },
    },
  },
});

export const OptionText = styled(Text, {
  fontSize: 16,
  color: '$color',

  variants: {
    selected: {
      true: {
        color: '#007AFF',
        fontWeight: '600',
      },
    },
  },
});
