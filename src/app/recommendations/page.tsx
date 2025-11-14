"use client";

import { useState } from 'react';
import AppLayout from '@/components/app-layout';
import { Button } from '@/components/ui/button';
import { personalizedRecommendations, PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';
import { contentData } from '@/lib/data';
import { MovieCard } from '@/components/movie-card';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function RecommendationsPage() {
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendationsOutput['recommendations']>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setRecommendations([]);
    try {
      const result = await personalizedRecommendations({
        viewingHistory: ['Odisea Cósmica', 'El Último Reino', 'Sombras de Neón'],
        preferences: 'Me gustan las películas de ciencia ficción con temas filosóficos y las series de fantasía épica.',
      });
      if (result && result.recommendations) {
        setRecommendations(result.recommendations);
      } else {
         toast({
            variant: "destructive",
            title: "Error de recomendación",
            description: "No se pudieron generar recomendaciones en este momento.",
         });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error de recomendación",
        description: "Ocurrió un error al contactar el servicio de IA.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const recommendedContent = contentData.filter(item => recommendations.includes(item.title));

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-3xl font-bold text-white">Recomendaciones Para Ti</h1>
            <Button onClick={handleGetRecommendations} disabled={isLoading} size="lg">
                {isLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                    <Wand2 className="mr-2 h-5 w-5" />
                )}
                Generar Nuevas Recomendaciones
            </Button>
        </div>

        {isLoading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="aspect-[2/3] bg-zinc-900 rounded-md animate-pulse" />
                ))}
            </div>
        )}

        {recommendations.length > 0 && recommendedContent.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {recommendedContent.map(item => (
              <MovieCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {recommendations.length > 0 && recommendedContent.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center text-center h-64 rounded-lg bg-zinc-900">
                <h2 className="text-xl font-semibold text-white">Recomendaciones generadas</h2>
                <ul className="mt-4 list-disc list-inside text-muted-foreground">
                    {recommendations.map(rec => <li key={rec}>{rec}</li>)}
                </ul>
                <p className="mt-4 text-sm text-zinc-500">Algunos títulos pueden no estar en nuestro catálogo actual.</p>
          </div>
        )}

        {recommendations.length === 0 && !isLoading && (
          <div className="flex flex-col items-center justify-center text-center h-64 rounded-lg bg-zinc-900 border-2 border-dashed border-zinc-800">
            <h2 className="text-xl font-semibold text-white">Descubre contenido nuevo</h2>
            <p className="mt-2 text-muted-foreground">
              Haz clic en el botón para que nuestra IA te genere recomendaciones personalizadas.
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
