import WeaponCard from "@/components/WeaponCard";
import { getWeaponById } from "@/services/weapons";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import weaponOdin from '@/data/weaponMokup.json'
function WeaponPage() {
  const { weapon } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const weaponUuid = searchParams.get("idWeapon");
  //       if (!weaponUuid) {
  //         navigate("/");
  //         return;
  //       }
  //       const responseFetch = await getWeaponById(weaponUuid);
  //     } catch (error) {
  //       console.error("Error fetching weapon:", error);
  //       navigate("/");
  //     }
  //   };

  //   fetchData();
  // }, [searchParams, navigate]);

  return (
    <div>
      <h1>hola {weapon}</h1>
      <p>Este párrafo debería hablar sobre la weapon {weapon}</p>
      <WeaponCard weaponProps={weaponOdin.data}/>
    </div>
  );
}

export default WeaponPage;
