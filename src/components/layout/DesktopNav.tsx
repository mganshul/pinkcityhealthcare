"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { aboutDropdown, primaryNavLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  transparent?: boolean;
}

export function DesktopNav({ transparent = false }: DesktopNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isAboutActive = aboutDropdown.items.some((item) =>
    isActive(item.href),
  );
  const isServicesActive = pathname.startsWith("/services");

  const activePillClasses = transparent
    ? "bg-white/15 text-white"
    : "bg-secondary text-primary";

  const linkClasses = (active: boolean) =>
    cn(
      navigationMenuTriggerStyle(),
      "bg-transparent font-medium",
      transparent
        ? "text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
        : "text-foreground/80 hover:text-foreground",
      active && activePillClasses,
    );

  const triggerClasses = (active: boolean) =>
    cn(
      "bg-transparent font-medium",
      transparent
        ? "text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-open:bg-white/10 data-open:text-white"
        : "text-foreground/80 hover:text-foreground",
      active && activePillClasses,
    );

  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={linkClasses(isActive("/"))}>
            <Link href="/" aria-current={isActive("/") ? "page" : undefined}>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClasses(isAboutActive)}>
            {aboutDropdown.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-56 gap-1 p-2">
              {aboutDropdown.items.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "text-sm font-medium",
                        isActive(item.href) && "text-primary",
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={triggerClasses(isServicesActive)}>
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <MegaMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {primaryNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                asChild
                className={linkClasses(isActive(link.href))}
              >
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
