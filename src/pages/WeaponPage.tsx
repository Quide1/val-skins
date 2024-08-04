import { getWeaponById } from "@/services/weapons";
import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { type Skin } from "@/types/weaponType";
import Loader from "@/components/Loader";

const WeaponSkinCard = lazy(() => import("@/components/WeaponSkinCard"));
function WeaponPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [weaponSkins, setWeaponSkins] = useState<Skin[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const weaponUuid = searchParams.get("idWeapon");
      console.log(weaponUuid);
      try {
        if (weaponUuid == null) {
          return;
        }
        const response = await getWeaponById(weaponUuid);
        console.log("Respuesta de la fetch", response);
        if (response && response.data && response.data.skins) {
          setWeaponSkins(response.data.skins);
        } else {
          console.error("No skins found for weapon.");
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching weapon:", error);
        navigate("/");
      }
    };

    fetchData();
  }, [searchParams, navigate]);

  return (
    <div className="flex flex-col">
      <p>UUID: {searchParams.get("idWeapon")}</p>
      <div className="grid sm:grid-cols-2 gap-10 p-4 items-center justify-items-center">
        {weaponSkins && weaponSkins.length > 0 ? (
          weaponSkins.map((skin) => (
            <Suspense fallback={<Loader />} key={skin.uuid}>
              <WeaponSkinCard skinCardProps={skin} key={skin.uuid} />
            </Suspense>
          ))
        ) : (
          <p>No skins available.</p>
        )}
      </div>
    </div>
  );
}

export default WeaponPage;
