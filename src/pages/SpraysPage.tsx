import { useState, lazy, useEffect, useRef, Suspense } from "react";

import { type Spray, Datum } from "@/types/spraysType";
import { getAllSprays } from "@/services/sprays";
import { SearchSpray } from "@/components/SearchSpray";
import Loader from "@/components/Loader";
const SprayInGame = lazy(() => import("@/components/SprayInGame"));
function SpraysPage() {
  const sprayRef = useRef<Datum[] | null>(null);
  const [sprays, setSprays] = useState<null | Datum[]>(null);
  const fetchData = async () => {
    const response = (await getAllSprays()) as Spray;
    if (response && response.data) {
      setSprays(response.data);
      sprayRef.current = response.data;
    } else {
      console.error("No skins found for weapon.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function searchSkinByName(words: string) {
    const newSprays = sprayRef.current?.filter((i) =>
      i.displayName.match(new RegExp(words, "i"))
    );
    newSprays ? setSprays(newSprays) : null;
  }

  return (
    <section className="flex flex-row flex-wrap items-center justify-center p-4 gap-20">
      <SearchSpray searchSprayByName={searchSkinByName} />
      {sprays && sprays.length > 0 ? (
        sprays?.map((e) => {
          return (
            <Suspense fallback={<Loader />} key={e.uuid} >
              <SprayInGame sprayProps={e} />
            </Suspense>
          );
        })
      ) : (
        <p>No sprays available</p>
      )}
    </section>
  );
}

export default SpraysPage;
