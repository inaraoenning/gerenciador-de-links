import { Text, TouchableOpacity, View } from 'react-native';

// Icons e Estilos
import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
  name: string;
  url: string;
  onDetails: () => void;
  // icon: keyof typeof MaterialIcons.
};

export function Link({ name, url, onDetails }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text
          style={styles.name}
          // se o nome for muito grande, aparecer somente em 1 linha
          numberOfLines={1}
        >
          {name}{' '}
        </Text>

        <Text style={styles.url} numberOfLines={1}>
          {' '}
          {url}
        </Text>

        <TouchableOpacity onPress={onDetails}>
            <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
