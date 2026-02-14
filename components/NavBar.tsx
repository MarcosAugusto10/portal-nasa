"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, CloudIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";

const links = [
  { name: "Página Inicial", href: "/", icon: HomeIcon },
  {
    name: "Eventos Naturais",
    href: "/natural-events",
    icon: CloudIcon,
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex border-b-2 border-gray-900 gap-3 font-sans">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex flex-row items-start justify-center gap-1 py-2 hover:text-blue-200",
              {
                "border-b-2 border-blue-500": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-5" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}
