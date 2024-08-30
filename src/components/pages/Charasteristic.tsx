import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";

const characteristic = cva("characteristic", {
  variants: {
    gender: {
      unknown: ["bg-gray-600 text-gray-100"],
      Male: ["bg-green-600 text-green-100"],
      Female: ["bg-violet-600 text-violet-100"],
      Genderless: [
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white",
      ],
    },
    status: {
      unknown: ["bg-gray-600 "],
      Alive: ["bg-blue-600 "],
      Dead: ["bg-red-600"],
    },
    species: {
      unknown: ["bg-gray-600"],
      Human: ["bg-orange-600 t"],
      Alien: ["bg-lime-600"],
      Humanoid: ["bg-indigo-600"],
      Poopybutthole: ["bg-fuchsia-600"],
      "Mythological Creature": ["bg-amber-600"],
      Animal: ["bg-teal-600"],
      Robot: ["bg-slate-900 "],
      Cronenberg: ["bg-stone-900 "],
      Disease: ["bg-purple-600"],
    },
  },
  compoundVariants: [
    { gender: "unknown", status: "unknown", species: "unknown" },
  ],
  // defaultVariants: { gender: "unknown", status: "unknown", species: "unknown" },
});

export interface Props
  extends React.ButtonHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof characteristic> {}

export const Characteristic: FC<Props> = ({
  className,
  gender,
  status,
  species,
  ...props
}) => {
  return (
    <>
      <span
        className={`py-1 px-2 rounded-md text-sm text-white ${characteristic({
          gender,
          status,
          species,
          className,
        })}`}
        {...props}
      ></span>
    </>
  );
};
