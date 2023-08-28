'use client';

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export default function MobileMenu() {
  return (
    <DropdownMenuContent className="bg-black/30 items-center border-none rounded-none flex flex-col text-white w-[200px] mt-5 pb-5 text-sm ">
      <DropdownMenuItem className="w-full rounded-none flex border-t-2 border-gray-500 justify-center py-2 hover:bg-white/10">
        Home
      </DropdownMenuItem>
      <DropdownMenuItem className="w-full rounded-none flex justify-center py-2 hover:bg-white/10">
        Series
      </DropdownMenuItem>
      <DropdownMenuItem className="w-full rounded-none flex justify-center py-2 hover:bg-white/10">
        Films
      </DropdownMenuItem>
      <DropdownMenuItem className="w-full rounded-none flex justify-center py-2 hover:bg-white/10">
        New & Popular
      </DropdownMenuItem>
      <DropdownMenuItem className="w-full rounded-none flex justify-center py-2 hover:bg-white/10">
        My List
      </DropdownMenuItem>
      <DropdownMenuItem className="w-full rounded-none flex justify-center py-2 hover:bg-white/10">
        Browse by languages
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
