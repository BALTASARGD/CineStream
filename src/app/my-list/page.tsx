"use client";

import AppLayout from "@/components/app-layout";
import { useWatchlist } from "@/contexts/watchlist-context";
import { contentData } from "@/lib/data";
import { MovieCard } from "@/components/movie-card";

export default function MyListPage() {
  const { watchlist } = useWatchlist();
  const watchlistItems = contentData.filter(item => watchlist.includes(item.id));

  return (
    <AppLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-white">Mi Lista</h1>
        {watchlistItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {watchlistItems.map(item => (
              <MovieCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-64 rounded-lg bg-zinc-900 border-2 border-dashed border-zinc-800">
            <h2 className="text-xl font-semibold text-white">Tu lista está vacía</h2>
            <p className="mt-2 text-muted-foreground">
              Añade películas y series para verlas aquí.
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
