import { getWeaponById } from "@/services/weapons";
import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { type Skin } from "@/types/weaponType";
import Loader from "@/components/Loader";
import { weaponsItems } from "@/data/weapons";
const WeaponSkinCard = lazy(() => import("@/components/WeaponSkinCard"));
function WeaponPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [weaponSkins, setWeaponSkins] = useState<Skin[] | null>(null);
  const [weaponName, setWeaponName] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const weaponUuid = searchParams.get("idWeapon");
      try {
        if (weaponUuid == null) {
          return;
        }
        const weaponItem = weaponsItems.find((i) => i.uuid === weaponUuid);

        const itemName = weaponItem?.displayName ?? "weapon";
        setWeaponName(itemName);

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
  }, [searchParams, navigate,weaponName]);

  return (
    <section className="flex flex-col items-center p-4">
      <h1 className="text-4xl m-4 text-red-700 font-bold">
        {weaponName} skins
      </h1>
      <div className="flex flex-row flex-wrap gap-10 p-4 items-center justify-around bg-slate-900 ">
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
    </section>
  );
}

export default WeaponPage;
