import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "@/components/Loader";
import IconInGame from "@/components/IconInGame";
import BannerArtInGame from "@/components/BannerArtInGame";
import HorizontalCardInGame from "@/components/HorizontalCardInGame";
import { useInGameCardInfo } from "@/hooks/useInGameCardInfo";
import { getAllPlayerCards } from "@/services/playerCards";
import { usePlayerCards } from "@/hooks/usePlayerCards";
import { type Card } from "@/types/playerCardType";
import { useNavigate } from "react-router-dom";
import SearchCard from "@/components/SearchCard";
const PlayerCard = lazy(() => import("@/components/PlayerCard"));
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function PlayerCardsPage() {
  const navigate = useNavigate();
  const { cardInfo, changeCardInfo } = useInGameCardInfo();
  const { allCards, setAllCards, createNewRef, searchSkinByName } =
    usePlayerCards();
  const [isOpen, setIsOpen] = useState(false);
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


  return (
    <section className="flex flex-col items-center p-4">
      <Dialog open={isOpen}>
        <DialogContent className="flex flex-row flex-wrap items-end justify-center border-2  border-red-700 bg-slate-900 w-full h-full ">
          <DialogTitle hidden={true}>
            in game view
          </DialogTitle>
          <div className="flex flex-col flex-wrap items-center justify-center gap-1">
            <BannerArtInGame urlArtImage={cardInfo.largeArt} />
            <HorizontalCardInGame urlHorizontalArt={cardInfo.wideArt} />
            <IconInGame urlIconImage={cardInfo.displayIcon} />
          </div>
          <Button
            variant={"outline"}
            className="bg-red-700 text-white fixed top-2 "
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Cerrar
          </Button>
        </DialogContent>
        <SearchCard searchCardByName={searchSkinByName} />
        <div className="flex flex-row flex-wrap gap-10 p-4 items-center justify-around bg-slate-900  ">
          {allCards?.map((e) => (
            <Suspense fallback={<Loader />} key={e.uuid}>
              <PlayerCard
                props={e}
                createChangeHandler={changeCardInfo}
                setIsOpen={setIsOpen}
              />
            </Suspense>
          ))}
        </div>
      </Dialog>
    </section>
  );
}

export default PlayerCardsPage;
