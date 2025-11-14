import { PlaceHolderImages } from './placeholder-images';

export type Content = {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
  posterHint: string;
  heroUrl: string;
  heroHint: string;
  genres: string[];
  cast: string[];
  year: number;
  type: 'movie' | 'series';
};

const allImages = PlaceHolderImages;

const getContentImage = (id: string) => {
    const img = allImages.find(i => i.id === id);
    return img ? { url: img.imageUrl, hint: img.imageHint } : { url: '', hint: '' };
}

export const contentData: Content[] = [
  {
    id: '1',
    title: 'Odisea Cósmica',
    description: 'La última esperanza de la humanidad viaja a través de un agujero de gusano para encontrar un nuevo hogar.',
    posterUrl: getContentImage('poster-1').url,
    posterHint: getContentImage('poster-1').hint,
    heroUrl: getContentImage('hero-1').url,
    heroHint: getContentImage('hero-1').hint,
    genres: ['Ciencia Ficción', 'Aventura', 'Drama'],
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    year: 2024,
    type: 'movie',
  },
  {
    id: '2',
    title: 'El Último Reino',
    description: 'En un mundo de fantasía medieval, un joven rey debe unir a su pueblo contra una horda de dragones.',
    posterUrl: getContentImage('poster-2').url,
    posterHint: getContentImage('poster-2').hint,
    heroUrl: getContentImage('hero-2').url,
    heroHint: getContentImage('hero-2').hint,
    genres: ['Fantasía', 'Acción', 'Series de TV'],
    cast: ['Henry Cavill', 'Anya Chalotra', 'Freya Allan'],
    year: 2023,
    type: 'series',
  },
  {
    id: '3',
    title: 'Sombras de Neón',
    description: 'Un detective cínico en una ciudad cyberpunk debe resolver un asesinato que lo lleva a una conspiración corporativa.',
    posterUrl: getContentImage('poster-3').url,
    posterHint: getContentImage('poster-3').hint,
    heroUrl: getContentImage('hero-3').url,
    heroHint: getContentImage('hero-3').hint,
    genres: ['Misterio', 'Thriller', 'Ciencia Ficción'],
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
    year: 2022,
    type: 'movie',
  },
  {
    id: '4',
    title: 'Amor en París',
    description: 'Dos extraños se conocen en la ciudad del amor y viven un fin de semana que cambiará sus vidas para siempre.',
    posterUrl: getContentImage('poster-4').url,
    posterHint: getContentImage('poster-4').hint,
    heroUrl: 'https://picsum.photos/seed/hero4/1280/720',
    heroHint: 'paris romance',
    genres: ['Comedia Romántica', 'Drama'],
    cast: ['Emma Stone', 'Ryan Gosling', 'J.K. Simmons'],
    year: 2021,
    type: 'movie',
  },
  {
    id: '5',
    title: 'Zona de Impacto',
    description: 'Un ex-soldado de las fuerzas especiales debe rescatar a su familia de un rascacielos tomado por terroristas.',
    posterUrl: getContentImage('poster-5').url,
    posterHint: getContentImage('poster-5').hint,
    heroUrl: 'https://picsum.photos/seed/hero5/1280/720',
    heroHint: 'action skyscraper',
    genres: ['Acción', 'Thriller'],
    cast: ['Dwayne Johnson', 'Neve Campbell', 'Chin Han'],
    year: 2024,
    type: 'movie',
  },
  {
    id: '6',
    title: 'La Mansión Silenciosa',
    description: 'Una familia se muda a una nueva casa solo para descubrir que no están solos y que los espíritus no son amigables.',
    posterUrl: getContentImage('poster-6').url,
    posterHint: getContentImage('poster-6').hint,
    heroUrl: 'https://picsum.photos/seed/hero6/1280/720',
    heroHint: 'spooky mansion',
    genres: ['Terror', 'Misterio', 'Series de TV'],
    cast: ['Victoria Pedretti', 'Oliver Jackson-Cohen', 'Kate Siegel'],
    year: 2022,
    type: 'series',
  },
  {
    id: '7',
    title: 'El Legado',
    description: 'Un drama familiar que abarca tres generaciones, explorando el amor, la pérdida y los secretos que los unen.',
    posterUrl: getContentImage('poster-7').url,
    posterHint: getContentImage('poster-7').hint,
    heroUrl: 'https://picsum.photos/seed/hero7/1280/720',
    heroHint: 'family drama',
    genres: ['Drama'],
    cast: ['Meryl Streep', 'Gary Oldman', 'Antonio Banderas'],
    year: 2020,
    type: 'movie',
  },
  {
    id: '8',
    title: 'Aventuras en Puzzleville',
    description: 'Un grupo de amigos animados debe resolver acertijos para salvar a su colorida ciudad de un villano gris.',
    posterUrl: getContentImage('poster-8').url,
    posterHint: getContentImage('poster-8').hint,
    heroUrl: 'https://picsum.photos/seed/hero8/1280/720',
    heroHint: 'cartoon town',
    genres: ['Animación', 'Infantil', 'Comedia'],
    cast: ['Tom Hanks', 'Tim Allen', 'Annie Potts'],
    year: 2023,
    type: 'movie',
  },
  {
    id: '9',
    title: 'Planeta Salvaje',
    description: 'Un impresionante documental que explora los ecosistemas más remotos y fascinantes de la Tierra.',
    posterUrl: getContentImage('poster-9').url,
    posterHint: getContentImage('poster-9').hint,
    heroUrl: 'https://picsum.photos/seed/hero9/1280/720',
    heroHint: 'wildlife documentary',
    genres: ['Documental', 'Naturaleza'],
    cast: ['David Attenborough'],
    year: 2024,
    type: 'series',
  },
  {
    id: '10',
    title: 'Imperio de Arena',
    description: 'La épica historia de un joven faraón que debe liderar a su pueblo en una guerra contra un imperio invasor.',
    posterUrl: getContentImage('poster-10').url,
    posterHint: getContentImage('poster-10').hint,
    heroUrl: 'https://picsum.photos/seed/hero10/1280/720',
    heroHint: 'ancient egypt',
    genres: ['Histórico', 'Acción', 'Drama'],
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    year: 2021,
    type: 'movie',
  },
    {
    id: '11',
    title: 'Código Cero',
    description: 'En un futuro distópico, un hacker descubre una verdad que podría derrocar al gobierno autoritario.',
    posterUrl: getContentImage('poster-11').url,
    posterHint: getContentImage('poster-11').hint,
    heroUrl: 'https://picsum.photos/seed/hero11/1280/720',
    heroHint: 'hacker dystopia',
    genres: ['Ciencia Ficción', 'Thriller', 'Series de TV'],
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    year: 2023,
    type: 'series',
  },
  {
    id: '12',
    title: 'El Último Forajido',
    description: 'Un viejo pistolero busca redención en el Salvaje Oeste mientras es perseguido por su pasado.',
    posterUrl: getContentImage('poster-12').url,
    posterHint: getContentImage('poster-12').hint,
    heroUrl: 'https://picsum.photos/seed/hero12/1280/720',
    heroHint: 'western redemption',
    genres: ['Western', 'Drama'],
    cast: ['Clint Eastwood', 'Gene Hackman', 'Morgan Freeman'],
    year: 2020,
    type: 'movie',
  },
];

export const getGenres = () => {
    const genres = new Set<string>();
    contentData.forEach(item => {
        item.genres.forEach(genre => genres.add(genre));
    });
    return Array.from(genres);
};

export const getContentByGenre = (genre: string) => {
    return contentData.filter(item => item.genres.includes(genre));
};

export const getContentById = (id: string) => {
    return contentData.find(item => item.id === id);
};
