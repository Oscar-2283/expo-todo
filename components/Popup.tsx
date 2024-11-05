import { FC } from 'react';
import { View, ViewProps } from 'tamagui';

interface PopupProps extends ViewProps {
  visible: boolean;
  children: React.ReactNode;
}

const Popup: FC<PopupProps> = ({ children, visible, ...props }) => {
  return (
    <>
      <View
        position="absolute"
        top="100%"
        right={props.right ? props.right : null}
        backgroundColor="$color5"
        transform={props.transform ? props.transform : undefined}
        padding="$2"
        borderRadius="$2"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.25}
        shadowRadius={3.84}
        shadowColor="$color10"
        zIndex={10000000}
        {...props}
      >
        {children}
      </View>
    </>
  );
};

export default Popup;
