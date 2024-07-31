import { useSkinCardInfo } from "@/hooks/useSkinCardInfo";
import {  type Skin } from "@/types/weaponType";
// import { normalizedChromaName } from "@/utils/normalizedChromaName";
import { normalizedLevelName } from "@/utils/normalizedLevelName";

type PropsWeaponSkinCard = {
  skinCardProps: Skin;
};

function WeaponSkinCard({ skinCardProps }: PropsWeaponSkinCard) {
  const { chromas, displayName, levels } = skinCardProps;
  const {
chroma,
changeChroma
  } = useSkinCardInfo(chromas);
  
  

  return (
    <article className="border-2 border-gray-500 bg-slate-900 min-w-[270px] p-2 flex justify-center flex-col gap-4 max-w-[550px] text-center rounded-sm">
      <div className="border-2 text-xl">
        <h2 className="font-bold">{displayName}</h2>
      </div>
      <div className="border-2 h-7">
        <p className="text-red-700 font-bold">{chroma.displayName}</p>
      </div>
      <div className="min-h-80 flex justify-center items-center">
        <img
          src={`${chroma.fullRender}`}
          alt={`skin ${skinCardProps.displayName}`}
        />
      </div>
      <div className="flex flex-row justify-around min-h-8 border items-center">
        {chromas.map((_chroma,index) =>
          _chroma?.swatch ? (
            <div
              className={`border border-red-white hover:scale-125 animate-in transition-all ${
                chroma.uuid === _chroma.uuid
                  ? "border-2 border-red-600"
                  : ""
              }`}
              key={_chroma.uuid}
            >
              <img
                className="w-6"
                alt={`chroma ${_chroma.displayName}`}
                src={_chroma.swatch}
                onClick={() => changeChroma(index)}
              ></img>
            </div>
          ) : null
        )}
      </div>
      <div className="border flex flex-col border-red-500 gap-2">
        <div className="flex justify-start">
          <p className="text-bold">Levels</p>
        </div>
        <div className="flex justify-around text-sm min-h-8">
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
            <p className="text-gray-700"> Empty</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default WeaponSkinCard;
