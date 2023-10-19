'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from '@/styles/Header.module.css';

import MobileMenu from '@/components/MobileMenu';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ModeDropdown } from '@/components/ButtonThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const AuthDropdown = ({ session }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto px-2.5">
          <svg
            width="15"
            height="15"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM4,23H20a1,1,0,0,0,1-1A9,9,0,0,0,3,22,1,1,0,0,0,4,23Zm8-8a7.011,7.011,0,0,1,6.929,6H5.071A7.011,7.011,0,0,1,12,15Z"></path>
            </g>
          </svg>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {session ? (
          <>
            {/* <DropdownMenuItem>
              Welcome, {session?.user?.name}
            </DropdownMenuItem> */}
            <DropdownMenuItem
              className="flex justify-between"
              onClick={() => signOut({ callbackUrl: '/' })}
            >
              Sign Out
              <svg
                height="15"
                width="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z"></path>
                </g>
              </svg>
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem
            className="flex justify-between"
            onClick={() => signIn()}
          >
            Sign In
            <svg
              height="15"
              width="15"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20,21V3H13a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1V22a1,1,0,0,1-1,1H13a1,1,0,0,1,0-2ZM2,12a1,1,0,0,0,1,1H14.586l-2.293,2.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414l-4-4a1,1,0,1,0-1.414,1.414L14.586,11H3A1,1,0,0,0,2,12Z"></path>
              </g>
            </svg>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const allMenuOptions = [
  {
    title: 'About',
    href: 'about',
    type: '',
  },
  {
    title: 'Dashboard',
    href: 'dashboard',
    type: 'student',
  },
  {
    title: 'Courses',
    href: 'courses',
    type: 'student',
  },
  {
    title: 'Classroom',
    href: 'classroom',
    type: 'tutor',
  },
];

const Header = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    console.log('session useEffect');
    let menuOptionsToShow = [];
    allMenuOptions.map((option) => {
      if (!option.type || session?.user) {
        menuOptionsToShow.push(option);
      }
    });
    setNavigation(menuOptionsToShow);
  }, [session]);

  return (
    <nav
      className={`max-w-5xl m-auto w-full px-4 py-2 border border-input shadow-sm ${styles.stickyheader}`}
    >
      <div className="flex items-center gap-8 justify-between">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-2xl font-semibold hover:opacity-90"
          >
            Video Courses Web
          </Link>
        </div>

        {/* Mobile Menu */}
        <Button
          variant="outline"
          className="ml-auto px-2.5 sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            width="15"
            height="15"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path>
            </g>
          </svg>
        </Button>

        <MobileMenu
          session
          navigation={navigation}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Desktop Menu */}
        <div className="hidden sm:flex md:flex lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <AuthDropdown session={session} />

          <ModeDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
