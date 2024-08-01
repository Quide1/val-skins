"use client";
import HamburgerMenu from "@/icons/HamburgerMenu";
import SheetMenu from "./NavBarContent";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import { Link } from "react-router-dom";

function NavBarMobile() {
  return (
    <header className="w-full min-h-[5vh] bg-slate-800  flex flex-row justify-end items-center p-2 lg:hidden sticky top-0">
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <HamburgerMenu className="text-red-600" />
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-slate-800">
          <ScrollArea className="h-full w-full  ">
            <Link to={"/"} className="w-full">
              <SheetHeader className="flex flex-row justify-center text-lg gap-4  items-center h-10">
                <SheetTitle className="text-red-600">Vaskins</SheetTitle>
                <picture className='max-w-8'>
                  <img src="/ValorantLogo.png" alt="valorant logo" />
                </picture>
              </SheetHeader>
            </Link>
            <ul className={`mt-2 mb-2 text-gray-400 flex  flex-col`}>
              <SheetMenu />
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </header>

  );
}

export default NavBarMobile;
