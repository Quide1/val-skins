import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CaretRight from '@/icons/CaretRight'
import { InterfaceWeaponList } from '@/types/weaponType';
import { Link } from "react-router-dom";
type NavBarAccordionProps = {
  accordionTitle: string,
  weapons: InterfaceWeaponList[]
}


function NavBarAccordion({ accordionTitle, weapons }: NavBarAccordionProps) {
  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger >{accordionTitle}</AccordionTrigger>
          <AccordionContent className=' mb-2 flex flex-col gap-4 ' >
            {weapons.map(({ displayName, uuid }) => {
              return (
                <Link className='flex flex-row gap-2 hover:translate-x-2 transition-all' key={uuid} to={`/weapons/${displayName}?idWeapon=${uuid}`}>
                  <CaretRight /><p>{displayName}</p>
                </Link>
              )
            })}

          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default NavBarAccordion
