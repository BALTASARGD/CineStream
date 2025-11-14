import Link from 'next/link';
import Image from 'next/image';
import { Content } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

interface MovieCardProps {
  item: Content;
}

export function MovieCard({ item }: MovieCardProps) {
  return (
    <Link href={`/watch/${item.id}`} className="block group">
      <Card className="overflow-hidden border-0 bg-transparent transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/20">
        <CardContent className="p-0">
          <div className="aspect-[2/3] relative">
            <Image
              src={item.posterUrl}
              alt={`Póster de ${item.title}`}
              data-ai-hint={item.posterHint}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 15vw"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
             <div className="absolute bottom-0 left-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-sm truncate">{item.title}</h3>
             </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
