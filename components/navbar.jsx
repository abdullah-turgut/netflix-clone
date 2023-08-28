'use client';

import { UserButton } from '@clerk/nextjs';
import { Bell, ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';
import MobileMenu from './mobile-menu';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export default function Navbar() {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  function toggleBrowse() {
    setIsBrowseOpen(!isBrowseOpen);
  }
  return (
    <div className="fixed z-10 top-0 left-0 w-full justify-between flex items  p-5 lg:px-20">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          className="w-28 lg:w-40"
          width={300}
          height={300}
        />
        <div className="lg:flex ml-20 gap-7 hidden text-white">
          <div className="opacity-80 hover:opacity-100 select-none cursor-pointer transition">
            Home
          </div>
          <div className="opacity-80 hover:opacity-100 select-none cursor-pointer transition">
            Series
          </div>
          <div className="opacity-80 hover:opacity-100 select-none cursor-pointer transition">
            Films
          </div>
          <div className="opacity-80 hover:opacity-100 select-none cursor-pointer transition">
            New & Popular
          </div>
          <div className="opacity-80 hover:opacity-100 select-none cursor-pointer transition">
            My List
          </div>
          <div className="opacity-80 hover:opacity-100 select-none cursor-pointer transition">
            Browse by languages
          </div>
        </div>
        <div className="lg:hidden flex items-center gap-2 text-sm text-white ml-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="group flex gap-2 items-center">
              <div>Browse</div>
              <ChevronDown className="opacity-70 transition group-hover:opacity-100" />
            </DropdownMenuTrigger>
            <MobileMenu />
          </DropdownMenu>
        </div>
      </div>

      <div className="flex items-center gap-7">
        <div className="flex gap-4 text-white  transition">
          <Search className="opacity-70 hover:opacity-100 cursor-pointer" />
          <Bell className="opacity-70 hover:opacity-100 cursor-pointer" />
        </div>
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonBox: {
                alignSelf: 'center',
              },
              userButtonAvatarBox: {
                height: '40px',
                width: '40px',
              },
            },
          }}
        />
      </div>
    </div>
  );
}
