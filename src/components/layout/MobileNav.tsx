"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/Logo";
import { aboutDropdown, primaryNavLinks, services } from "@/data/navigation";
import { phoneHref, siteConfig } from "@/constants/site";
import { cn } from "@/lib/utils";
import type { NavLink } from "@/types/navigation";

interface MobileNavProps {
  transparent?: boolean;
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

interface MobileNavAccordionGroupProps {
  value: string;
  label: string;
  items: NavLink[];
  isActive: (href: string) => boolean;
}

function MobileNavAccordionGroup({
  value,
  label,
  items,
  isActive,
}: MobileNavAccordionGroupProps) {
  return (
    <AccordionItem value={value} className="border-none">
      <AccordionTrigger className="hover:bg-muted rounded-lg px-3 text-sm font-semibold hover:no-underline">
        {label}
      </AccordionTrigger>
      <AccordionContent className="px-3">
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "block rounded-lg px-2 py-2.5 text-sm",
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

export function MobileNav({ transparent = false }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className={cn(
            "lg:hidden",
            transparent && "text-white hover:bg-white/10 hover:text-white"
          )}
          aria-label="Open menu"
        >
          <Menu className="size-5.5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full gap-0 p-0 sm:max-w-sm">
        <SheetHeader className="border-border border-b">
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <Logo />
        </SheetHeader>

        <motion.nav
          aria-label="Mobile navigation"
          initial={shouldReduceMotion ? false : "hidden"}
          animate="visible"
          variants={listVariants}
          className="flex-1 overflow-y-auto p-4"
        >
          <motion.div variants={itemVariants}>
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm font-semibold",
                isActive("/") ? "text-primary bg-secondary" : "text-foreground"
              )}
            >
              Home
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Accordion type="single" collapsible>
              <MobileNavAccordionGroup
                value="about"
                label={aboutDropdown.label}
                items={aboutDropdown.items}
                isActive={isActive}
              />
              <MobileNavAccordionGroup
                value="services"
                label="Services"
                items={services}
                isActive={isActive}
              />
            </Accordion>
          </motion.div>

          {primaryNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-semibold",
                    isActive(link.href)
                      ? "text-primary bg-secondary"
                      : "text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
        </motion.nav>

        <div className="border-border flex flex-col gap-2 border-t p-4">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href={phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
          </Button>
          <Button asChild size="lg">
            <Link href="/appointment">Book Appointment</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
