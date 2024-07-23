// import WeaponCard from "@/components/WeaponCard";
// import { getWeaponById } from "@/services/weapons";
// import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import weaponSkinOdin from '@/data/weaponSkinMokup.json'
import WeaponSkinCard from "@/components/WeaponSkinCard";
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
      <h1>Pagina del arma : {weapon}</h1>
      <p>tiene el uuid : {searchParams.get('idWeapon')}</p>
      <WeaponSkinCard skinCardProps={weaponSkinOdin.data}/>
    </div>
  );
}

export default WeaponPage;
