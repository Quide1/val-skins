import { getWeaponById } from "@/services/weapons";
import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import WeaponSkinCard from "@/components/WeaponSkinCard";
import { type Skin } from "@/types/weaponType";

function WeaponPage() {
  const { weapon } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [weaponSkins, setWeaponSkins] = useState<Skin[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const weaponUuid = searchParams.get("idWeapon");
      console.log(weaponUuid)
      try {
        if (weaponUuid == null) {
          return;
        }
        const response = await getWeaponById(weaponUuid);
        console.log(response)
        if (response && response.data && response.data.skins) {
          setWeaponSkins(response.data.skins);
        } else {
          console.error("No skins found for weapon.");
          // navigate("/");
        }
      } catch (error) {
        console.error("Error fetching weapon:", error);
        // navigate("/");
      }
    };

    fetchData();
  }, [searchParams, navigate]);

  return (
    <div className="flex flex-col">
      <h1>Página del arma: {weapon}</h1>
      <p>UUID: {searchParams.get("idWeapon")}</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
      {weaponSkins && weaponSkins.length > 0 ? (
        weaponSkins.map((skin) => (
          <WeaponSkinCard skinCardProps={skin} key={skin.uuid} />
        ))
      ) : (
        <p>No skins available.</p>
      )}

      </div>
    
    </div>
  );
}

export default WeaponPage;
