import { type Datum } from "@/types/playerCardType";
import { Button } from "./ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
type PlayerCardProps = {
  props: Datum;
  createChangeHandler: (newInfo: Datum) => void;
};

function PlayerCard({ props, createChangeHandler }: PlayerCardProps) {
  const onClickHandler = () => {
    createChangeHandler({ ...props });
  };
  return (
    <article className="bg-slate-950 flex flex-col items-center justify-between gap-2 p-4 rounded-lg border-2 border-slate-950 hover:border-red-700 transition-all w-[236px] h-[620px] ">
      <h3 className=" font-bold text-xl">{props.displayName}</h3>
      <div className="max-w-[200px]">
        <img
          src={`${props.largeArt}`}
          alt={`banner of ${props.displayName}`}
          className="w-full"
        />
      </div>
      <DialogTrigger asChild>
        <Button
          className="bg-red-700"
          variant={"ghost"}
          onClick={onClickHandler}
        >
          Select
        </Button>
      </DialogTrigger>
    </article>
  );
}

export default PlayerCard;
