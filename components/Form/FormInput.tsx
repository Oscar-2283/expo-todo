import React from 'react';
import { TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'tamagui';
import { FC } from 'react';

interface FormInputProps extends TextInputProps {
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
  style?: StyleProp<ViewStyle>;
}

const FormInput: FC<FormInputProps> = ({
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false,
  width = 94,
  style,
  ...props
}) => {
  const theme = useTheme();

  const defaultStyle = {
    backgroundColor: theme.color4?.val,
    padding: 10,
    borderRadius: 6,
    color: theme.color11?.val,
    width: width,
  };

  return (
    <TextInput
      style={[defaultStyle, style]}
      placeholderTextColor={theme.color11?.val}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      {...props}
    />
  );
};

export default FormInput;
