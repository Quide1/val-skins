function HorizontalCardInGame({
  urlHorizontalArt,
}: {
  urlHorizontalArt: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 max-h-[128px] items-center max-w-[579px]">
        <div className="col-span-3 h-full">
          <img src={urlHorizontalArt} alt="horizontal art in game" className="h-full" />
        </div>
        <div
          className=" flex justify-start h-full"
          style={{
            background:
              "linear-gradient(to right,  transparent 70%,rgb(100,0,0) )",
          }}
        >
          <img
            src="public/agent.png"
            alt="image of agent"
            className="max-h-[128px] "
          />
        </div>
      </div>
      <div className="flex flex-row justify-between border-2 p-0.5 text-sm">
        <p className="font-bold">midudev 43</p>
        <p className="text-gray-400">master</p>
        <p className="text-gray-400">Fade</p>
      </div>
    </div>
  );
}

export default HorizontalCardInGame;
