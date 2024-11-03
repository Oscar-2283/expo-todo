import { FC , useState} from 'react';
import { Modal, FlatList } from 'react-native';
import { Button, YStack, ButtonProps } from 'tamagui';
import {
  ModalContainer,
  Content,
  OptionItem,
  OptionText,
} from './style';

interface ModalSelectProps extends ButtonProps {
  placeholer?: string;
  selectedVal: string;
  onSelect: (item: any) => void;
  options: Array<{ label: string; value: any }>;
  selectedValue?: any;
  ModalBottom?: number;
}

const ModalSelect: React.FC<ModalSelectProps> = ({
  placeholer = '請選擇',
  selectedVal,
  onSelect,
  options,
  selectedValue,
  ModalBottom = 100,
  ...props  // button props
}) => {
  const [selectedVisible, setSelectedVisible] = useState(false);
  
  const onClose = () => {
    setSelectedVisible(false);
  };

  const handleSelect = (item: { label: string; value: any }) => {
    onSelect(item.value);
    onClose();
  };

  const renderItem = ({ item, index }: { 
    item: { label: string; value: any };
    index: number 
  }) => (
    <YStack onPress={() => handleSelect(item)} pressStyle={{ opacity: 0.7 }}>
      <OptionItem 
        style={{ 
          borderBottomWidth: index === options.length - 1 ? 0 : 1 
        }} 
        selected={item.value === selectedValue}
      >
        <OptionText selected={item.value === selectedValue}>
          {item.label}
        </OptionText>
      </OptionItem>
    </YStack>
  );

  return (
    <>
      <Button onPress={() => {setSelectedVisible(true)}} {...props} >{selectedVal ? selectedVal : placeholer}</Button>
      <Modal
        visible={selectedVisible}
        transparent
        animationType="slide"
        onRequestClose={onClose}
      >
        <ModalContainer>
          <Content marginBottom={ModalBottom}>
            <FlatList
              data={options}
              renderItem={renderItem}
              keyExtractor={(item) => item.value.toString()}
              style={{ width: '100%' }}
            />
          </Content>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalSelect;
