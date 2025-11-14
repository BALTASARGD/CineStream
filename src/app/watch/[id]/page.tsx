import { notFound } from 'next/navigation';
import { getContentById, contentData } from '@/lib/data';
import AppLayout from '@/components/app-layout';
import Image from 'next/image';
import { VideoPlayer } from '@/components/video-player';
import { Badge } from '@/components/ui/badge';
import { WatchlistButton } from '@/components/watchlist-button';
import { ContentCarousel } from '@/components/content-carousel';

export default function WatchPage({ params }: { params: { id: string } }) {
  const content = getContentById(params.id);

  if (!content) {
    notFound();
  }

  const relatedContent = contentData.filter(
    item => item.genres.some(g => content.genres.includes(g)) && item.id !== content.id
  ).slice(0, 10);

  return (
    <AppLayout>
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <VideoPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
                <h1 className="text-4xl font-bold text-white">{content.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                    <span>{content.year}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                    <span>{content.type === 'movie' ? 'Película' : 'Serie'}</span>
                </div>
                <p className="text-white/90">{content.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {content.genres.map(genre => (
                        <Badge key={genre} variant="secondary" className="bg-accent text-accent-foreground">{genre}</Badge>
                    ))}
                </div>
                <div>
                  <WatchlistButton contentId={content.id} />
                </div>
            </div>
            <div className="space-y-2">
                <p><span className="text-muted-foreground">Reparto: </span>{content.cast.join(', ')}</p>
            </div>
        </div>

        {relatedContent.length > 0 && (
            <div className="pt-8 border-t border-border">
                <ContentCarousel title="Títulos similares" items={relatedContent} />
            </div>
        )}
      </div>
    </AppLayout>
  );
}
