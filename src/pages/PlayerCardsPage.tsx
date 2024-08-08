import PlayerOnline from "@/components/PlayerOnline";
import { lazy, Suspense, useEffect } from "react";
import Loader from "@/components/Loader";
import IconInGame from "@/components/IconInGame";
import BannerArtInGame from "@/components/BannerArtInGame";
import HorizontalCardInGame from "@/components/HorizontalCardInGame";
import { useInGameCardInfo } from "@/hooks/useInGameCardInfo";
import { getAllPlayerCards } from "@/services/playerCards";
import { usePlayerCards } from "@/hooks/usePlayerCards";
import { Card, type Datum } from "@/types/playerCardType";
import { useNavigate } from "react-router-dom";
const PlayerCard = lazy(() => import("@/components/PlayerCard"));

function PlayerCardsPage() {
  const navigate = useNavigate();
  const { cardInfo, changeCardInfo } = useInGameCardInfo();
  const { allCards, allCardsRef, setAllCards, createNewRef } = usePlayerCards();

  useEffect(() => {
    const fetchData = async () => {
      const response = (await getAllPlayerCards()) as Card;
      if (response && response.data && response.data) {
        setAllCards(response.data);
        createNewRef(response.data);
      } else {
        console.error("No skins found for weapon.");
        navigate("/");
      }
    };
    fetchData();
  }, []);

  const createChangeHandler = (newInfo:Datum) =>{
    changeCardInfo(newInfo)
  }

  useEffect(()=>{
    console.log(cardInfo)
  },[cardInfo])
  return (
    <section className="flex flex-col items-center p-4">
      <h1>Cards</h1>
      <h3>In game view</h3>
      <section className="flex flex-row flex-wrap items-center justify-center gap-4 border-2 border-red-700 w-full">
        <IconInGame urlIconImage={cardInfo.displayIcon} />
        <BannerArtInGame urlArtImage={cardInfo.largeArt} />
        <HorizontalCardInGame urlHorizontalArt={cardInfo.wideArt} />
      </section>
      <div>
        <PlayerOnline />
      </div>
      <div className="flex flex-row flex-wrap gap-10 p-4 items-center justify-around bg-slate-900 ">
        {allCards?.map((e) => (
          <Suspense fallback={<Loader />}>
            <PlayerCard props={e} key={e.uuid}  createChangeHandler={createChangeHandler(e)}/>
          </Suspense>
        ))}
      </div>
    </section>
  );
}

export default PlayerCardsPage;
