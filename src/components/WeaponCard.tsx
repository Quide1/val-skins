import { type Skin } from '@/types/weaponType'
type PropsWeaponCard = {
    weaponProps:Skin
}
function WeaponCard({weaponProps}:PropsWeaponCard) {
    console.log(weaponProps)
  return (
    <article>

    </article>
  )
}

export default WeaponCard
