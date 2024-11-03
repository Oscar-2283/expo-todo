import { FC, ReactNode } from 'react';
import { XStack, Text } from 'tamagui';
import type { XStackProps } from 'tamagui';


interface ModalFormRowProps {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}

const ModalFormRow: FC<ModalFormRowProps & XStackProps> = ({ label, icon, children, ...props }) => {
  return (
    <XStack flex={1} justifyContent="space-between" alignItems="center" {...props} >
      <XStack flex={1} alignItems="center" gap="$2">
        {icon}
        <Text>{label}</Text>
      </XStack>
      {children}
    </XStack>
  );
};

export default ModalFormRow;
