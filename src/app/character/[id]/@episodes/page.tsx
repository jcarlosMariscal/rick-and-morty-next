"use client";
import { Episode, ICharacter } from "@/types/types";
import { useEffect, useState } from "react";

export default function Episodes({ params }: { params: { id: string } }) {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  useEffect(() => {
    if (params.id) {
      fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then((res) => res.json())
        .then((data: ICharacter) => {
          const episodePromises = data.episode.map((episodeUrl) =>
            fetch(episodeUrl).then((res) => res.json())
          );

          Promise.all(episodePromises).then((episode) => {
            setEpisodes(episode);
            console.log(episode);
          });
        });
    }
  }, [params.id]);

  return (
    <div className="p-4 rounded-lg flex flex-col gap-2 bg-gray-50">
      <p className="text-xl text-center">Episodes</p>
      <div className="grid grid-cols-4 gap-2 max-h-[28rem] overflow-y-auto p-1">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-gray-100 text-sm p-2 rounded-lg border"
          >
            <p>
              {episode.episode} - <span>{episode.name}</span>
            </p>
            <p>{episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
