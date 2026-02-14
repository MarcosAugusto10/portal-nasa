"use client";
import { RocketLaunchIcon } from "@heroicons/react/16/solid";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  return (
    <header className="flex pb-4 items-center justify-between md:justify-start border-b-2 border-gray-900">
      <div className="flex items-center gap-2">
        <RocketLaunchIcon color="#db4439" className="size-12 md:size-14" />
        <div className="flex flex-col w-[70%] md:w-full">
          <h1 className="font-bold font-sans text-xl md:text-3xl">
            Portal NASA
          </h1>
          <h2 className="font-extralight font-sans text-sm md:text-lg text-blue-300">
            O Portal para Conhecer o Espaço
          </h2>
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
}
