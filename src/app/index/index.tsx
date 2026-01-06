import React from 'react';
import { FlatList, Image, Modal, TouchableOpacity, View } from 'react-native';

//Estilos
import { colors } from '@/styles/colors';
import { styles } from '@/styles/index';

// Icons
import { MaterialIcons } from '@expo/vector-icons';

// Componente
import { Categories } from '@/components/categories';
import { Link } from '@/components/link';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/logo.png')} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.5}>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories />

      <FlatList
        data={['1', '2', '3', '4']}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link name="Rocketseat" url="google.com.br" onDetails={() => console.log('Clicou!')} />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
      />
      <Modal transparent visible={true}></Modal>
    </View>
  );
}
