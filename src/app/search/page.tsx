"use client";

import { useSearchParams } from "next/navigation";
import AppLayout from "@/components/app-layout";
import { contentData } from "@/lib/data";
import { MovieCard } from "@/components/movie-card";
import { useEffect, useState } from "react";
import type { Content } from "@/lib/data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Content[]>([]);

  useEffect(() => {
    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filteredData = contentData.filter(item => 
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.genres.some(genre => genre.toLowerCase().includes(lowercasedQuery)) ||
        item.cast.some(actor => actor.toLowerCase().includes(lowercasedQuery))
      );
      setResults(filteredData);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <AppLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white">
          {query ? `Resultados para "${query}"` : "Buscar"}
        </h1>
        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {results.map(item => (
              <MovieCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          query && (
            <div className="flex flex-col items-center justify-center text-center h-64 rounded-lg bg-zinc-900 border-2 border-dashed border-zinc-800">
              <h2 className="text-xl font-semibold text-white">No se encontraron resultados</h2>
              <p className="mt-2 text-muted-foreground">
                Intenta con otra búsqueda.
              </p>
            </div>
          )
        )}
         {!query && (
            <div className="flex flex-col items-center justify-center text-center h-64 rounded-lg bg-zinc-900">
              <h2 className="text-xl font-semibold text-white">Busca una película o serie</h2>
              <p className="mt-2 text-muted-foreground">
                Usa la barra de búsqueda en la parte superior para encontrar tu contenido favorito.
              </p>
            </div>
         )}
      </div>
    </AppLayout>
  );
}
