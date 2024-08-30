import React from "react";

export default function Layout({
  children,
  episodes,
}: {
  children: React.ReactNode;
  episodes: React.ReactNode;
}) {
  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {/* {children} */}
      <div className="col-span-1">{children}</div>
      <div className="col-span-2">{episodes}</div>
    </div>
  );
}
