"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import styles from "@/styles/Header.module.css";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle, ModeDropdown } from "@/components/ButtonThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const moreMenuOptions = [
    {
      name: "vehicles",
      href: "vehicles",
    },
    {
      name: "starships",
      href: "starships",
    },
    {
      name: "species",
      href: "species",
    },
  ];

  return (
    <nav
      className={`max-w-5xl m-auto w-full px-4 py-2 border border-input shadow-sm ${styles.stickyheader}`}
    >
      <div className="flex items-center gap-8 justify-between">
        <div>
          <Link href="/" className="text-2xl font-semibold hover:opacity-90">
            Video Courses Web
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="films" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Courses
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="characters" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Videos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="planets" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {moreMenuOptions.map((menuOption, index) => (
                    <NavigationMenuList key={index}>
                      <NavigationMenuItem>
                        <Link
                          key={index}
                          href={menuOption.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {menuOption.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Tables <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {moreMenuOptions.map((menuOption, index) => {
                return (
                  <DropdownMenuItem key={index} className="capitalize">
                    {menuOption.name}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeDropdown />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
