import { type Datum } from "@/types/playerCardType";
import { Button } from "./ui/button";

type PlayerCardProps = {
  props: Datum;
  createChangeHandler: (newInfo: Datum) => void
};


function PlayerCard({ props, createChangeHandler }: PlayerCardProps) {
  const clickHandler = createChangeHandler()
  return (
    <article className="bg-slate-950 flex flex-col items-center justify-center gap-2 p-4 rounded-lg border-2 border-slate-950 hover:border-red-700 transition-all">
      <h3 className=" font-bold text-xl">{props.displayName}</h3>
      <div className="max-w-[200px]">
        <img
          src={`${props.largeArt}`}
          alt={`banner of ${props.displayName}`}
          className="w-full"
        />
      </div>
      <Button className="bg-red-700" variant={"ghost"} onClick={}>
        Select
      </Button>
    </article>
  );
}

export default PlayerCard;
