"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

export const revalidate = 0;

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`,
  }));

  return (
    <div className="flex items-center gap-x-4">
      {routes.map((route) => (
        <Link
          className={cn(
            "cursor-pointer text-neutral-500 hover:text-black",
            route.active ? " text-black" : ""
          )}
          key={route.href}
          href={route.href}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
