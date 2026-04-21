import { Game } from './types';

export const GAMES: Game[] = [
  {
    id: 'minecraft',
    title: 'Minecraft (Web Edition)',
    thumbnail: 'https://images.unsplash.com/photo-1627389955609-70bd31e6709d?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://precisionclient.pages.dev/', // A popular Eaglercraft instance
    category: 'Minecraft',
    description: 'Explore, build, and survive in the beloved blocky world, right in your browser.'
  },
  {
    id: 'slope',
    title: 'Slope',
    thumbnail: 'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://waynepark.github.io/slope/', 
    category: 'Action',
    description: 'A fast-paced driving game that challenges your reflexes as you navigate a ball through a futuristic course.'
  },
  {
    id: '2048',
    title: '2048',
    thumbnail: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://play2048.co/',
    category: 'Logic',
    description: 'Slide tiles and merge them to get to the 2048 tile in this addictive logic puzzle.'
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    thumbnail: 'https://images.unsplash.com/photo-1558961363-fa4f2323ad2f?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://orteil.dashnet.org/cookieclicker/',
    category: 'Classic',
    description: 'The definitive idle game where you click a giant cookie to produce more cookies.'
  },
  {
    id: 'tetris',
    title: 'Hextris',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://hextris.io/',
    category: 'Logic',
    description: 'A fast-paced puzzle game inspired by Tetris, where you clear lines by matching colors on a hexagon.'
  },
  {
    id: 'doodle-jump',
    title: 'Doodle Jump',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-89b252df6dbb?auto=format&fit=crop&q=80&w=400',
    embedUrl: 'https://doodlejump.io/',
    category: 'Classic',
    description: 'Jump as high as you can on a never-ending series of platforms in this classic vertical platformer.'
  }
];
