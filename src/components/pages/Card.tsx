import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ICharacter } from "../../types/types";
import { Characteristic } from "./Charasteristic";
import { BtnFavorite } from "../ui/BtnFavorite";

type Props = {
  character: ICharacter;
  btnFavorite?: boolean;
};

export const Card: React.FC<Props> = ({ character, btnFavorite = false }) => {
  const { name, image, id, gender, status } = character;
  // console.log(character);

  return (
    <div className="p-2 rounded-lg relative transition shadow-xl bg-white border border-transparent hover:border-sky-50 shadow-gray-100/100 hover:scale-105 hover:z-10 flex gap-2 w-full">
      <img src={image} alt={name} className="rounded-xl w-28 min-w-28" />
      <div className="w-full">
        <div className="mb-2">
          <h4 className="font-bold mr-6">{name}</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {gender && <Characteristic gender={gender}>{gender}</Characteristic>}
          {status && <Characteristic status={status}>{status}</Characteristic>}
        </div>
      </div>
      <div className="absolute right-1 bottom-1 flex flex-row-reverse gap-2">
        {btnFavorite && <BtnFavorite character={character} />}
        <Link
          href={`/character/${id}`}
          className="h-7 flex items-center justify-center"
        >
          <svg
            className="fill-gray-400 size-5 hover:fill-sky-500"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M35,270h45v45c0,8.284,6.716,15,15,15h200c8.284,0,15-6.716,15-15V75c0-8.284-6.716-15-15-15h-45V15 c0-8.284-6.716-15-15-15H35c-8.284,0-15,6.716-15,15v240C20,263.284,26.716,270,35,270z M280,300H110V90h170V300z M50,30h170v30H95 c-8.284,0-15,6.716-15,15v165H50V30z"></path>
                <path d="M155,120c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15s-6.716-15-15-15H155z"></path>
                <path d="M235,180h-80c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15S243.284,180,235,180z"></path>
              </g>
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
};
