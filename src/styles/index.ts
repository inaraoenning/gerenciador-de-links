import { colors } from '@/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo espaço disponível da tela
    paddingTop: 62,
  },
  text: {
    color: colors.gray[100],
    fontSize: 22,
    fontWeight: '600',
  },
  header: {
    paddingHorizontal: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    height: 30,
    width: 30,
  },
  links: {
    borderTopWidth: 1,
    borderTopColor: colors.gray[600],
  },
  linksContent: {
    gap: 20,
    padding: 24,
    paddingBottom: 100,
  },
});