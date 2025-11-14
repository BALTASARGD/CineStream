"use client";

import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWatchlist } from "@/contexts/watchlist-context";

interface WatchlistButtonProps {
    contentId: string;
}

export function WatchlistButton({ contentId }: WatchlistButtonProps) {
    const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
    const inList = isInWatchlist(contentId);

    const handleClick = () => {
        if (inList) {
            removeFromWatchlist(contentId);
        } else {
            addToWatchlist(contentId);
        }
    };

    return (
        <Button onClick={handleClick} variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            {inList ? <Check className="mr-2 h-5 w-5" /> : <Plus className="mr-2 h-5 w-5" />}
            {inList ? 'En Mi Lista' : 'Añadir a Mi Lista'}
        </Button>
    );
}
