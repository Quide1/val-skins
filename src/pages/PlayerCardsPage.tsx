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
import { ScrollArea } from "@/components/ui/scroll-area"
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
        <DialogContent className="bg-slate-9001 ">
          <ScrollArea className="h-full w-full ">
            <div className="flex flex-col items-center justify-normal w-full border-2 border-red-700 h-full ">
              <DialogTitle hidden={true}>in game view</DialogTitle>
              <BannerArtInGame urlArtImage={cardInfo.largeArt} />
              <HorizontalCardInGame urlHorizontalArt={cardInfo.wideArt} />
              <IconInGame urlIconImage={cardInfo.displayIcon} />
              <Button
                variant={"outline"}
                className="bg-red-700 text-white"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Close
              </Button>
            </div>
          </ScrollArea>
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
