"use client";

interface VideoPlayerProps {
  src: string;
}

export function VideoPlayer({ src }: VideoPlayerProps) {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl shadow-black">
      <video
        className="w-full h-full"
        controls
        autoPlay
        muted
        loop
        src={src}
      >
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
}
