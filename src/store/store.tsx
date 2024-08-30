import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICharacter } from "../types/types";
import { toast } from "sonner";

type AppState = {
  favorites: ICharacter[];
  searchName: string;
  addFavorite: (character: ICharacter) => void;
  removeFavorite: (characterId: number) => void;
  handleSearchByName: (name: string) => void;
  newOrder: (characters: ICharacter[]) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      favorites: [],
      searchName: "",
      addFavorite: (character: ICharacter) =>
        set((state) => {
          const isFavorite = state.favorites.some(
            (fav) => fav.id === character.id
          );

          if (isFavorite) {
            toast.warning("Este personaje ya se encuentra en tus favoritos.");
            return state;
          }

          if (state.favorites.length >= 5) {
            toast.warning("El máximo es 5. Se reemplazará el más antiguo.");
            return { favorites: [...state.favorites.slice(1), character] };
          }

          toast.success("El personaje se ha agregado a favoritos.");
          return { favorites: [...state.favorites, character] };
        }),
      removeFavorite: (characterId: number) =>
        set((state) => {
          toast.info("Se ha quitado a este personaje de favoritos.");
          return {
            favorites: state.favorites.filter((fav) => fav.id !== characterId),
          };
        }),
      newOrder: (characters: ICharacter[]) => set({ favorites: characters }),
      handleSearchByName: (name: string) => set({ searchName: name }),
    }),
    { name: "ram-characters" }
  )
);
