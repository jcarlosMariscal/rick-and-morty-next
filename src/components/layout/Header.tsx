// import { NavLink } from "react-router-dom";
// import { Search } from "../Search/Search";
// import { useState } from "react";
// import { Favorites } from "../Favorites/Favorites";
// import { useAppStore } from "../../store/store";

"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "../ui/Search";
import { useAppStore } from "@/store/store";
import { useState } from "react";
import { Favorites } from "../pages/Favorites";

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { favorites } = useAppStore();
  return (
    <>
      <div className="h-16 px-4 md:px-10 bg-sky-500 text-white p-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/ram.png"
            alt="Rick And Morty Logo"
            className="-translate-y-2"
            width={160}
            height={160}
            priority
          />
        </Link>
        <div className="flex gap-2 items-center">
          <Search />
          <Link
            href="?favorites"
            className="px-1 py-2 flex justify-between gap-1 md:gap-4 bg-white text-sky-500 rounded-md"
          >
            <span className="flex gap-1">
              <svg
                className={` size-6  fill-yellow-500 stroke-yellow-500`}
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="hidden md:block">Favoritos</span>
            </span>
            <span className="block w-[1px] h-6 bg-gray-200"></span>
            <span className="m-0 md:mr-2 font-bold">{favorites.length}</span>
          </Link>
        </div>
      </div>
      <Favorites></Favorites>
    </>
  );
};
