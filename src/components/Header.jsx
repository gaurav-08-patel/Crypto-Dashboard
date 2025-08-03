import { SidebarTrigger } from "@/components/ui/sidebar";
import { CircleUserRound } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ title }) => {
  return (
    <header className="w-full relative bg-white">
      <SidebarTrigger
        className="md:hidden cursor-pointer absolute top-1/2 -translate-y-1/2
          left-0 outline-0 focus:outline-0"
      />

      <section
        className="h-full xl:w-8/10 mx-auto py-3 flex justify-between
          items-center"
      >
        <h1 className="px-2 text-2xl font-bold md:ml-0 ml-8">{title} </h1>

        <DropdownMenu>
          <DropdownMenuTrigger className="mr-3 cursor-pointer outline-none focus:outline-none">
            <CircleUserRound className="size-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </header>
  );
};

export default Header;
