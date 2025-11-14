import Image from 'next/image';
import { contentData, getContentByGenre } from '@/lib/data';
import AppLayout from '@/components/app-layout';
import { ContentCarousel } from '@/components/content-carousel';
import { Button } from '@/components/ui/button';
import { PlayCircle, Info } from 'lucide-react';
import Link from 'next/link';

export default function BrowsePage() {
  const featuredContent = contentData.find(c => c.id === '1');
  const popularMovies = contentData.filter(c => c.type === 'movie').slice(0, 10);
  const popularSeries = contentData.filter(c => c.type === 'series').slice(0, 10);
  const actionMovies = getContentByGenre('Acción');
  const scifiSeries = getContentByGenre('Ciencia Ficción');

  return (
    <AppLayout>
      <div className="space-y-12">
        {featuredContent && (
          <div className="relative h-[60vh] w-full -mx-4 md:-mx-6 -mt-4 md:-mt-6 rounded-b-lg overflow-hidden">
            <Image
              src={featuredContent.heroUrl}
              alt={`Hero image for ${featuredContent.title}`}
              data-ai-hint={featuredContent.heroHint}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full md:w-1/2 lg:w-1/3">
              <h1 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg leading-tight">
                {featuredContent.title}
              </h1>
              <p className="mt-4 text-sm md:text-base text-white/90 line-clamp-3">
                {featuredContent.description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <Link href={`/watch/${featuredContent.id}`} passHref legacyBehavior>
                    <Button size="lg" className="text-lg">
                        <PlayCircle className="mr-2 h-6 w-6" />
                        Reproducir
                    </Button>
                </Link>
                <Link href={`/watch/${featuredContent.id}`} passHref legacyBehavior>
                    <Button size="lg" variant="secondary" className="text-lg bg-gray-500/50 hover:bg-gray-500/70 text-white">
                        <Info className="mr-2 h-6 w-6" />
                        Más Info
                    </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
        
        <div className="space-y-10">
            <ContentCarousel title="Populares en CineStream" items={popularMovies} />
            <ContentCarousel title="Series Aclamadas" items={popularSeries} />
            <ContentCarousel title="Acción y Aventura" items={actionMovies} />
            <ContentCarousel title="Viajes a otros mundos" items={scifiSeries} />
        </div>
      </div>
    </AppLayout>
  );
}
