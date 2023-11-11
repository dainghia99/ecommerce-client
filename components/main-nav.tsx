"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const usePathName = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: usePathName === `/category/${route.id}`,
  }));

  return (
    <div className="flex items-center gap-x-4">
      {routes.map((route) => (
        <Link
          className={cn(
            "cursor-pointer opacity-70",
            route.active ? " text-black" : " hover:opacity-100"
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
