import { FC, ReactNode } from 'react';
import { XStack, Text } from 'tamagui';

interface FormRowProps {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}

const FormRow: FC<FormRowProps> = ({ label, icon, children }) => {
  return (
    <XStack flex={1} justifyContent="space-between" alignItems="center">
      <XStack flex={1} alignItems="center" gap="$2">
        {icon}
        <Text>{label}</Text>
      </XStack>
      {children}
    </XStack>
  );
};

export default FormRow;
