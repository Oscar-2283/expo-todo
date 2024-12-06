import { FC } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import useLanguageModalStyles from "./styles/_styles";
import { useI18n } from "@/components/i18nContext";

interface LanguageModalProps {
  visible: boolean;
  onClose: () => void;
}

const LanguageModal: FC<LanguageModalProps> = ({ visible, onClose }) => {
  const { locale, translations, t, setLocale } = useI18n();
  const styles = useLanguageModalStyles();

  const selectLanguage = (lang: string) => {
    setLocale(lang);
    onClose();
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{t('select_language')}</Text>
          <TouchableOpacity onPress={() => selectLanguage("zh")} style={styles.languageOption}>
            <Text style={styles.languageOption_subTitle}>中文</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => selectLanguage("en")} style={styles.languageOption}>
            <Text style={styles.languageOption_subTitle}>English</Text>
          </TouchableOpacity>
          <Button title={t('close')} onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default LanguageModal;