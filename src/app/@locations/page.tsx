import { Location } from "@/types/types";

export default async function Locations() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("https://rickandmortyapi.com/api/location/");

  const data = await response.json();
  const locations: Location[] = await data.results;

  return (
    <div className="p-4 rounded-lg flex flex-col gap-2">
      <p className="text-xl text-center">Locations</p>
      <div className="grid grid-cols-2 gap-2">
        {locations.map((location) => (
          <div
            key={location.id}
            className="border border-gray-200 hover:bg-gray-50 cursor-pointer text-sm py-2 px-4 rounded-lg"
          >
            <p>
              {location.name} - {location.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
