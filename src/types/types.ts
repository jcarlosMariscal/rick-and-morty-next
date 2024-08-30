export interface ICharacter {
  gender: "unknown" | "Male" | "Female" | "Genderless";
  id: number;
  image: string;
  name: string;
  status: "unknown" | "Alive" | "Dead";
  created: string;
  episode: string[];
  location: { name: string; url: string };
  origin: { name: string; url: string };
  species:
    | "unknown"
    | "Human"
    | "Alien"
    | "Humanoid"
    | "Poopybutthole"
    | "Mythological Creature"
    | "Animal"
    | "Robot"
    | "Cronenberg"
    | "Disease";
  type: string;
}

export interface ICharactersData {
  characters: {
    info: {
      pages: number;
      count: number;
    };
    results: ICharacter[];
  };
}

export type TCharacteristic =
  | "unknown"
  | "Male"
  | "Female"
  | "Genderless"
  | "Alive"
  | "Dead"
  | "Human"
  | "Alien"
  | "Humanoid"
  | "Poopybutthole"
  | "Mythological Creature"
  | "Animal"
  | "Robot"
  | "Cronenberg"
  | "Disease";

export interface IError {
  code: number;
  message?: string;
}

export const errorCodes: IError[] = [
  { code: 404, message: "Not Found: El recurso solicitado no existe." },
  {
    code: 400,
    message: "Bad Request: Solicitud mal formada o parámetros inválidos.",
  },
  {
    code: 500,
    message: "Internal Server Error: Problema interno del servidor.",
  },
  {
    code: 429,
    message: "Too Many Requests: Demasiadas peticiones en poco tiempo.",
  },
];

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
}
export interface Episode {
  air_date: string;
  characters: string[];
  created: Date;
  episode: string;
  id: number;
  name: string;
  url: string;
}
