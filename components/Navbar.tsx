import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LogOut, Moon, Settings, SquareMenu, User } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="p-4 flex items-center justify-between">
      collapseButton
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                className="aspect-auto size-16 rounded-full"
                src="https://avatars.githubusercontent.com/u/31023635"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
