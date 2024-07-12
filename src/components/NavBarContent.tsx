import  { useState, useEffect } from "react";

import { weaponsItems } from "@/data/weapons";
import { InterfaceWeaponList } from "@/types/weaponType";
import NavBarHeader from "./NavBarItemHeader";
import NavBarAccordion from "./NavBarAccordion";

function NavBarContent() {
  const [categories, setCategories] = useState<{
    [key: string]: InterfaceWeaponList[];
  }>({});

  useEffect(() => {
    const categorizedWeapons = weaponsItems.reduce((acc, weapon) => {
      if (!acc[weapon.category]) {
        acc[weapon.category] = [];
      }
      acc[weapon.category].push(weapon);
      return acc;
    }, {} as { [key: string]: InterfaceWeaponList[] });

    setCategories(categorizedWeapons);
  }, []);

  return (
    <>
      <li>
        <NavBarHeader textParagraph="Weapons" />
      </li>
      {Object.entries(categories).map(([category, weapons], index) => (
        <NavBarAccordion
          key={index}
          accordionTitle={category}
          weapons={weapons}
        />
      ))}
      <li>
        <NavBarHeader textParagraph="Collectibles" />
      </li>
      <li className=" font-medium">
        <h3 className="mt-4">Player cards</h3>
      </li>
      <li className=" font-medium">
        <h3 className="mt-4">Sprays</h3>
      </li>
    </>
  );
}

export default NavBarContent;
