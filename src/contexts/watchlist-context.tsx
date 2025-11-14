"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

interface WatchlistContextType {
  watchlist: string[];
  addToWatchlist: (id: string) => void;
  removeFromWatchlist: (id: string) => void;
  isInWatchlist: (id: string) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedWatchlist = localStorage.getItem('cinestream-watchlist');
      if (storedWatchlist) {
        setWatchlist(JSON.parse(storedWatchlist));
      }
    } catch (error) {
      console.error("Failed to parse watchlist from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cinestream-watchlist', JSON.stringify(watchlist));
    } catch (error) {
      console.error("Failed to save watchlist to localStorage", error);
    }
  }, [watchlist]);

  const addToWatchlist = (id: string) => {
    if (!watchlist.includes(id)) {
      setWatchlist([...watchlist, id]);
      toast({
        title: "Añadido a Mi Lista",
        description: "Este título ha sido añadido a tu lista.",
      });
    }
  };

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter(itemId => itemId !== id));
    toast({
      title: "Eliminado de Mi Lista",
      description: "Este título ha sido eliminado de tu lista.",
    });
  };

  const isInWatchlist = (id:string) => {
    return watchlist.includes(id);
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};
