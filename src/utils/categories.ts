import { FontAwesome } from '@expo/vector-icons';

type Category = {
  id: string;
  name: string;
  icon: keyof typeof FontAwesome.glyphMap;
};

export const categories: Category[] = [
  { id: '1', name: 'Curso', icon: 'code' },
  { id: '2', name: 'Projeto', icon: 'folder' },
  { id: '3', name: 'Site', icon: 'globe' },
  { id: '4', name: 'Artigo', icon: 'file-excel-o' },
  { id: '5', name: 'Video', icon: 'file-video-o' },
  { id: '6', name: 'Documentação', icon: 'file-archive-o' },
];
