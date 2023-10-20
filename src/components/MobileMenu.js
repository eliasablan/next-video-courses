'use client';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { signIn, signOut } from 'next-auth/react';

const MobileMenu = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
  session,
}) => {
  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={setMobileMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-secondary bg-opacity-50 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-xs">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute flex align-center justify-center mx-0 w-10 h-10 -left-10 bg-destructive top-0">
                      <button
                        type="button"
                        className="relative text-primary-foreground hover:text-primary hover:rotate-180 transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" ariaHidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-secondary-foreground text-secondary-foreground py-2 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="font-semibold text-secondary">
                        <Link
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                          href="/"
                          className="text-2xl font-semibold hover:opacity-90"
                        >
                          Video Courses
                        </Link>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}

                      <div className="space-y-2 py-6 border-b w-full inline-block border-secondary">
                        {navigation.map((item, index) => (
                          <Link
                            key={index}
                            href={`/${item.href}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-md p-3 font-semibold text-secondary hover:bg-accent hover:text-accent-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-2 py-6 w-full inline-block">
                        <button
                          className="block w-full text-right rounded-md p-3 font-semibold text-secondary hover:bg-accent hover:text-accent-foreground"
                          onClick={() => {
                            session
                              ? signOut({ callbackUrl: '/' })
                              : signIn();
                            setMobileMenuOpen(false);
                          }}
                        >
                          {session ? (
                            <Fragment>
                              Sign Out
                              <svg
                                className="inline-block ml-4"
                                height="25"
                                width="25"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="SVGRepo_bgCarrier"
                                  strokeWidth="0"
                                ></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path d="M7.707,8.707,5.414,11H17a1,1,0,0,1,0,2H5.414l2.293,2.293a1,1,0,1,1-1.414,1.414l-4-4a1,1,0,0,1,0-1.414l4-4A1,1,0,1,1,7.707,8.707ZM21,1H13a1,1,0,0,0,0,2h7V21H13a1,1,0,0,0,0,2h8a1,1,0,0,0,1-1V2A1,1,0,0,0,21,1Z"></path>
                                </g>
                              </svg>
                            </Fragment>
                          ) : (
                            <Fragment>
                              Sign in
                              <svg
                                className="inline-block ml-4"
                                height="25"
                                width="25"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g
                                  id="SVGRepo_bgCarrier"
                                  strokeWidth="0"
                                ></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  <path d="M20,21V3H13a1,1,0,0,1,0-2h8a1,1,0,0,1,1,1V22a1,1,0,0,1-1,1H13a1,1,0,0,1,0-2ZM2,12a1,1,0,0,0,1,1H14.586l-2.293,2.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414l-4-4a1,1,0,1,0-1.414,1.414L14.586,11H3A1,1,0,0,0,2,12Z"></path>
                                </g>
                              </svg>
                            </Fragment>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
