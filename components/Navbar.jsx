'use client';
// Import your required modules
import React from 'react';
import Link from 'next/link';
import { SignedOut, UserButton, SignedIn, useSession } from '@clerk/nextjs';
import { checkUserRole } from '../utils/userUtils';
import CustomUserButton from './CustomUserButton';

// Define your Navbar component
const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);

  const links = [
    { title: 'Home', url: '/' },
    { title: 'Profile', url: '/profile' },
    { title: 'My Application', url: '/user' },
    { title: 'FAQ', url: '/FAQ' },
    { title: 'Admin Dashboard', url: '/admin', role: 'admin' },
    // Add more placeholder links as needed
  ];
  const isActiveLink = (url) => router.pathname === url;

  return (
    <header className='flex flex-col items-center bg-white border-r-2 border-gray-200 h-screen fixed w-80'>
      <a href='/' className='my-16'>
        <img src='/logo.png' alt='uOttaHack Logo' className='w-52' />
      </a>
      <nav className='flex flex-col my-4 w-full'>
        <SignedIn>
          {links.map((link) =>
            (link.role === 'admin' && userRole === 'admin') || !link.role ? (
              <Link key={link.title} href={link.url} className="hover:bg-gray-200">
                <div className='my-6 ml-14 text-lg cursor-pointer text-left block'>
                  {link.title}
                </div>
              </Link>
            ) : null
          )}
        </SignedIn>
      </nav>
      <SignedOut>
        <a href='/sign-in' className='my-2 w-48'>
          <button className='text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded text-base'>
            Login
          </button>
        </a>
        <a href='/sign-up' className='my-2 w-48'>
          <button className='text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded text-base'>
            Sign Up
          </button>
        </a>
      </SignedOut>
      <div className='mt-auto w-full pb-16 flex justify-center'> {/* This will center and raise the UserButton */}
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
          {/* <Link href={'/profile'}>
            <button className='text-indigo-500 border-0 py-1 px-4 w-32 focus:outline-none hover:underline rounded text-base'>
              My Profile
            </button>
          </Link> */}
        </SignedIn>
      </div>
    </header>
  );


};

// Export the Navbar component
export default Navbar;
