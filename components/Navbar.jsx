'use client';
// Import your required modules
import React from 'react';
import Link from 'next/link';
import { SignedOut, UserButton, SignedIn, useSession } from '@clerk/nextjs';
import { checkUserRole } from '../utils/userUtils';

// Define your Navbar component
const Navbar = () => {
  const { session } = useSession();
  const userRole = checkUserRole(session);

  const links = [
    { title: 'Home', url: '/' },
    { title: 'My Application', url: '/user' },
    { title: 'FAQ', url: '/FAQ' },
    { title: 'Admin Dashboard', url: '/admin', role: 'admin' },
    // Add more placeholder links as needed
  ];

  return (
    <header className='flex flex-col items-center bg-white border-r-2 border-gray-200 h-screen fixed w-1/6'>
      <a href='/' className='my-14'>
        <img src='/logo.png' alt='uOttaHack Logo' className='w-44' />
      </a>
      <nav className='flex flex-col w-full'>
        <SignedIn>
          {links.map((link) =>
            (link.role === 'admin' && userRole === 'admin') || !link.role ? (
              <Link key={link.title} href={link.url} className="hover:bg-gray-200">
                <div className='my-4 ml-10 text-sm cursor-pointer text-left block'>
                  {link.title}
                </div>
              </Link>
            ) : null
          )}
        </SignedIn>
      </nav>
      <div className='mt-auto mb-14'>
        <SignedOut>
          <a href='/sign-in' className='my-2 w-48'>
            <button className='text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded text-base'>
              Login
            </button>
          </a>
          <a href='/sign-up' className='my-2 w-48'>
            <button className='mt-5 text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded text-base'>
              Sign Up
            </button>
          </a>
        </SignedOut>
      </div>
      <SignedIn>
        <div className='mt-auto w-full pb-16 flex justify-center'> {/* This will center and raise the UserButton */}
          <UserButton afterSignOutUrl='/' />
        </div>
      </SignedIn>
    </header>
  );


};

// Export the Navbar component
export default Navbar;
