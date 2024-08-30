"use client";

import { ICharacter } from "@/types/types";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import useFetch from "../../hooks/useFetch";
import { Spinner } from "../ui/Spinner";

export const CharactersList = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  // const [page, setPage] = useState<number>(1);
  const { data, loading, error, ref } = useFetch();
  useEffect(() => {
    // setAllCharacters(data as ICharacter[]);
    setCharacters(data as ICharacter[]);
    console.log(data);
  }, [data]);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {characters &&
          characters.map((character) => (
            <motion.div
              layout
              key={character.id}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                delay: 0.06 * (character.id % 20),
              }}
            >
              <Card character={character} btnFavorite />
            </motion.div>
          ))}
        {characters && characters.length > 0 && <span ref={ref}></span>}
      </div>
      {loading && <Spinner />}
    </>
  );
};
