import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme, View } from 'tamagui';
import { FC } from 'react';

interface ModalInputProps extends TextInputProps {
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  width?: number;
}

const ModalInput: FC<ModalInputProps> = ({
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false,
  width = 94,
  ...props
}) => {
  const theme = useTheme();

  return (
    <View>
      <TextInput
        style={{
          backgroundColor: theme.color4?.val,
          padding: 10,
          borderRadius: 6,
          color: theme.color11?.val,
          width: width,
        }}
        placeholderTextColor={theme.color11?.val}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        {...props}
      />
    </View>
  );
};

export default ModalInput;
