export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
  category: 'Popular' | 'Action' | 'Logic' | 'Classic' | 'Minecraft';
  description: string;
}
