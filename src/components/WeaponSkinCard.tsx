import { useSkinCardInfo } from "@/hooks/useSkinCardInfo";
import { Chroma, type Skin } from "@/types/weaponType";
import { normalizedChromaName } from "@/utils/normalizedChromaName";

type PropsWeaponSkinCard = {
  skinCardProps: Skin;
};

function WeaponSkinCard({ skinCardProps }: PropsWeaponSkinCard) {
  const { chromas, displayName } = skinCardProps;
  const { currentChromaImg, currentChromaName, changeCurrentChroma,currentChromaUuid } =
    useSkinCardInfo(chromas);
  const clickHandler = (chroma: Chroma) => {
    const { displayName, fullRender, uuid } = chroma;
    const variant = normalizedChromaName(displayName);
    changeCurrentChroma({
      chromaImg: fullRender,
      chromaName: variant,
      chromaUuid: uuid,
    });
  };

  return (
    <article className="border-2 border-gray-500 bg-slate-900 min-w-[270px] p-2 flex justify-center flex-col gap-4 max-w-[550px] text-center rounded-sm">
      <div className="border-2 text-xl">
        <h2 className="font-bold">{displayName}</h2>
      </div>
      <div className="border-2 h-7">
        { (
          <p className="text-red-700 font-bold">{currentChromaName}</p>
        ) }
      </div>
      <div>
        <img
          src={`${currentChromaImg}`}
          alt={`skin ${skinCardProps.displayName}`}
        />
      </div>
      <div className="flex flex-row justify-around min-h-8 border items-center">
        { skinCardProps.chromas.map((chroma) =>
              chroma?.swatch ? (
                <div
                  className={`border border-red-white hover:scale-125 animate-in transition-all ${currentChromaUuid === chroma.uuid ? 'border-2 border-red-600' : null}` }
                  key={chroma.uuid}
                >
                  <img
                    className="w-6"
                    alt={`chroma ${chroma.displayName}`}
                    src={chroma.swatch}
                    onClick={() => clickHandler(chroma)}
                  ></img>
                </div>
              ) : null
            )
          }
      </div>
      <div className="border flex flex-col border-red-500 gap-2">
        <div className="flex justify-start">
          <p>Levels</p>
        </div>
        <div className="flex justify-around text-sm">
          <p>Vfx</p>
          <p>Finisher</p>
          <p>Nose</p>
        </div>
      </div>
    </article>
  );
}

export default WeaponSkinCard;
