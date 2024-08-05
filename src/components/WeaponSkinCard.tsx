import { useEffect, useState } from "react";
import { useSkinCardInfo } from "@/hooks/useSkinCardInfo";
import { type Skin } from "@/types/weaponType";
import { normalizedChromaName } from "@/utils/normalizedChromaName";
import { normalizedLevelName } from "@/utils/normalizedLevelName";
import Loader from "./Loader";

type PropsWeaponSkinCard = {
  skinCardProps: Skin;
};

function WeaponSkinCard({ skinCardProps }: PropsWeaponSkinCard) {
  const { chromas, displayName, levels } = skinCardProps;
  const { chroma, changeChroma } = useSkinCardInfo(chromas);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(chroma);
  }, [chroma]);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <article className="  bg-slate-950 min-w-[270px] p-2 flex justify-center flex-col gap-6 max-w-[350px] text-center rounded-sm items-center border-2 border-slate-900 hover:border-white transition-all">
      <div className="text-xl">
        <h2 className="font-bold">{displayName}</h2>
      </div>
      <div className=" h-7">
        <p className="text-red-700 font-bold">
          {normalizedChromaName(chroma.displayName)}
        </p>
      </div>
      <div className="flex items-center justify-center  h-[250px] max-w-[350px] p-2">
        {isLoading && <Loader />}
        <img
          src={`${chroma.fullRender}`}
          alt={`skin ${skinCardProps.displayName}`}
          onLoad={handleImageLoad}
          loading="lazy"
          className="max-h-full border-white-600"
        />
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <div className="flex justify-start pl-4 font-bold">
          <p className="text-bold">Chromas</p>
        </div>
        <div className="flex flex-row justify-around min-h-8  items-center gap-4 pb-4 pt-4">
          {chromas.map((_chroma, index) =>
            _chroma?.swatch ? (
              <div
                className={` bg-gray-600 hover:scale-125 animate-in transition-all ${
                  chroma.uuid === _chroma.uuid ? "border-2 border-red-600" : ""
                }`}
                key={_chroma.uuid}
              >
                <img
                  className="w-6 h-6 shadow-md shadow-red-400"
                  alt={`chroma ${_chroma.displayName}`}
                  src={_chroma.swatch}
                  onClick={() => changeChroma(index)}
                ></img>
              </div>
            ) : (
              <p className="text-gray-700"> No chromas available</p>
            )
          )}
        </div>
      </div>
      <div className=" flex flex-col gap-2 w-full">
        <div className="flex justify-start pl-4 font-bold">
          <p className="text-bold">Levels</p>
        </div>
        <div className="flex text-sm min-h-8 items-center justify-evenly pb-6 pt-4 ">
          {levels.length > 1 ? (
            levels.map((level, index) => {
              return level.levelItem !== null &&
                level.levelItem !== undefined ? (
                <a
                  target="_blank"
                  key={index}
                  href={level.streamedVideo ?? "#"}
                >
                  {" "}
                  <p
                    className="text-red-700 font-semibold hover:text-white"
                    key={level.uuid}
                  >
                    {normalizedLevelName(level.levelItem)}
                  </p>
                </a>
              ) : null;
            })
          ) : (
            <p className="text-gray-700"> No levels available</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default WeaponSkinCard;
