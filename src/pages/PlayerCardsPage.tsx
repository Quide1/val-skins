import cardExample from "@/data/cardExample.json";
import PlayerOnline from "@/components/PlayerOnline";
import { lazy,Suspense } from "react";
import Loader from "@/components/Loader";
const PlayerCard = lazy(() => import("@/components/PlayerCard"));
function PlayerCardsPage() {
  return (
    <section className="flex flex-col items-center p-4">
      <h1>Cards</h1>
      <div>
        <PlayerOnline />
      </div>
      <div className="flex flex-row flex-wrap gap-10 p-4 items-center justify-around bg-slate-900 ">
        <Suspense fallback={<Loader />}>
        <PlayerCard props={cardExample.data} />
            </Suspense>
      </div>
    </section>
  );
}

export default PlayerCardsPage;
