"use client";

import { Characteristic } from "@/components/pages/Charasteristic";
import { BtnFavorite } from "@/components/ui/BtnFavorite";
import useFetch from "@/hooks/useFetch";
import { ICharacter } from "@/types/types";

export default function Details({ params }: { params: { id: string } }) {
  const { data, loading, error } = useFetch(`${params.id}`);
  console.log(data);

  const character = data as ICharacter;
  const { gender, status, species, type } = character;
  return (
    <div className="p-4 rounded-lg flex flex-col gap-4 bg-slate-50">
      <div className="w-full">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">{character.name}</h2>
          <BtnFavorite character={data as ICharacter} />
        </div>
        <div className="flex gap-4 flex-wrap">
          {gender && <Characteristic gender={gender}>{gender}</Characteristic>}
          {status && <Characteristic status={status}>{status}</Characteristic>}
          {species && (
            <Characteristic species={species}>{species}</Characteristic>
          )}
          {type && <Characteristic>{type}</Characteristic>}
        </div>
      </div>

      <img src={character.image} alt="Character Image" className="rounded-lg" />
    </div>
  );
}
