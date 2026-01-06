import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

// Estilos
import { colors } from '@/styles/colors';
import { styles } from './styles';

// Icons
import { FontAwesome } from '@expo/vector-icons';

// o Tipo Props tem todas as propriedade de PressableProps e:
type Props = PressableProps & {
  name: string;
  isSelected: boolean;
  icon: keyof typeof FontAwesome.glyphMap;
};

export function Category({ name, icon, isSelected, ...rest }: Props) {
  //Cor dinâmica com isSelected
  const color = isSelected ? colors.green[300] : colors.gray[400];

  return (
    <Pressable style={styles.container} {...rest}>
      <FontAwesome name={icon} size={16} color={color} />
      <Text style={[styles.name, { color }]}>{name}</Text>
    </Pressable>
  );
}
