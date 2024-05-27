"use client";

import AsideItem from "./AsideItem";
import { usePathname } from "next/navigation";
import asideMenus from "@/utils/asideMenus";
import { useSession } from "next-auth/react";

export default function Aside({ menuDisabled, className = "" }: any) {
  const pathName = usePathname();
  const session = useSession();
  let activeMenu = "";
  let userRole = session ? session?.data?.user?.role : {};

  return (
    <aside
      className={`fixed pt-10 left-0 h-full z-30 overflow-y-auto overflow-x-hidden rounded-tr-large group"
      } ${className}`}
    >
      {asideMenus.map((menu, index) => {
        if (!menu.roles.includes(userRole ?? "none")) {
          return null;
        }

        if (pathName == "/") {
          activeMenu = "Dashboard";
        } else if (
          pathName !== "/" &&
          pathName.startsWith(menu.href ?? "*") &&
          menu.label != "Dashboard"
        ) {
          activeMenu = menu.label;
        }
        return (
          <AsideItem
            key={menu.label + index}
            active={activeMenu == menu.label}
            TbIcon={""}
            label={menu.label}
            href={menu.href}
            className={menuDisabled ? "hidden group-hover:flex" : ""}
          />
        );
      })}
    </aside>
  );
}