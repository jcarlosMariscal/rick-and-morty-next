"use client";

import { Card } from "@/components/pages/Card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/Sheet";
import { useAppStore } from "@/store/store";
import { AnimatePresence, Reorder } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React from "react";

export default function Favorites() {
  const { favorites, newOrder } = useAppStore();
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const fav = searchParams.get("favorites");
  // const [isActive, setIsActive] = useState(false);
  return <p>Favoritos</p>;
}
