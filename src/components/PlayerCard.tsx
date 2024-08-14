import { type Datum } from "@/types/playerCardType";
import { Button } from "./ui/button";

type PlayerCardProps = {
  props: Datum;
  createChangeHandler: (newInfo: Datum) => void;
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
};

function PlayerCard({ props, createChangeHandler,setIsOpen }: PlayerCardProps) {
  const onClickHandler = () => {
    console.log()
    setIsOpen((prevState)=>(!prevState))
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
          loading="eager"
        />
      </div>

      <Button
        className="bg-red-700"
        variant={"default"}
        onClick={onClickHandler}
      >
        Select
      </Button>

    </article>
  );
}

export default PlayerCard;
