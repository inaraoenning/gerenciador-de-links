import { FlatList } from 'react-native';

// Estilos

// Componentes
import { Category } from '@/components/category';
import { categories } from '@/utils/categories';
import { styles } from './styles';

export function Categories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id} // id unico
      renderItem={({ item }) => <Category name={item.name} icon={item.icon} isSelected={false} />}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content} // estilo do conteudo dentro da flatlist    
      showsHorizontalScrollIndicator={false} // Remove barra de rolagem (scroll)
      />
  );
}
