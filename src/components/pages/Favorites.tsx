"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "../../store/store";
import { AnimatePresence, Reorder } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/Sheet";
import { Card } from "./Card";
import { useRouter, useSearchParams } from "next/navigation";

export const Favorites = () => {
  const { favorites, newOrder } = useAppStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const fav = searchParams.get("favorites");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(fav === null ? false : true);
  }, [fav]);

  return (
    <Sheet open={isActive} onOpenChange={() => router.push("/")}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Favoritos</SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="flex flex-col gap-5">
            {favorites.length ? (
              <AnimatePresence mode="popLayout">
                <Reorder.Group
                  axis="y"
                  onReorder={newOrder}
                  values={favorites}
                  className="flex flex-col gap-6"
                >
                  {favorites.map((fav) => (
                    <Reorder.Item
                      key={fav.id}
                      value={fav}
                      layout
                      initial={{ translateY: -100, opacity: 0 }}
                      animate={{ translateY: 0, scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{
                        type: "spring",
                      }}
                      className="cursor-grab"
                    >
                      <Card character={fav} btnFavorite />
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              </AnimatePresence>
            ) : (
              <span>Actualmente no tienes favoritos.</span>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
