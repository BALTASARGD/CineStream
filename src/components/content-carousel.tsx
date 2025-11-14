import { Content } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MovieCard } from './movie-card';

interface ContentCarouselProps {
  title: string;
  items: Content[];
}

export function ContentCarousel({ title, items }: ContentCarouselProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <MovieCard item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 hidden sm:flex" />
        <CarouselNext className="mr-12 hidden sm:flex" />
      </Carousel>
    </div>
  );
}
