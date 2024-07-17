import { useEffect, useState } from "react";

import SheetMenu from "./NavBarContent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

function NavBarDesktop() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLgScreen = window.innerWidth >= 1024;
      setIsLargeScreen(isLgScreen);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize(); // Check size on initial load
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      {isLargeScreen && (
          <aside className="bg-slate-800 h-full w-[260px] transform transition-transform duration-300 ease-in-out border-r-2 border-blue-600  flex-col p-0">
            <ScrollArea className="h-full w-full p-4">
              <Link to="/" className="w-full">
                <div className="flex flex-row justify-center text-lg gap-4 items-center h-10">
                  <h2 className="font-bold text-red-600">Vaskins</h2>
                  <picture className="max-w-8">
                    <img src="/ValorantLogo.png" alt="valorant logo" />
                  </picture>
                </div>
              </Link>
              <section>
                <ul className="mt-2 mb-2 text-gray-400 flex flex-col">
                  <SheetMenu />
                </ul>
              </section>
            </ScrollArea>
          </aside>
      )}
    </>
  );
}

export default NavBarDesktop;
