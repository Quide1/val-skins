  import { type Skin } from "@/types/weaponType";
  import { useState } from "react";
  type PropsWeaponSkinCard = {
    skinCardProps: Skin;
  };
  function WeaponSkinCard({ skinCardProps }: PropsWeaponSkinCard) {
    console.log(skinCardProps);
    return (
      <article className="border-2 border-gray-500 bg-slate-900 min-w-[270px] p-2 flex  justify-center flex-col gap-4 max-w-[550px] text-center rounded-sm">
        <div className="border-2 text-xl">
          <h2>{skinCardProps.displayName}</h2>
        </div>
        <div className="border-2 h-7">
        
          {skinCardProps.chromas.length >= 2 ? (<p className="text-red-700 font-bold">ss</p> ): null}
        </div>
        <div>
          <img
            src={`${skinCardProps.displayIcon}`}
            alt={`skin ${skinCardProps.displayName}`}
          />
        </div>
        <div className="flex flex-row justify-around min-h-8 border items-center">
          {skinCardProps.chromas.length >= 2 
            ? skinCardProps.chromas.map((chroma, index) =>
              chroma?.swatch ? (
                <div className="border border-red-white hover:scale-125 animate-in transition-all">
                  <img
                    className="w-6"
                    key={chroma.uuid}
                    alt={`chroma ${index}`}
                    src={chroma.swatch}
                  ></img>
                </div>
              ) : null
            )
            : null}
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
