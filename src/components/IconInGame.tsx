
function IconInGame({urlIconImage}:{urlIconImage:string}) {
  return (
    <div
      className="w-[120px] h-[120px] p-2"
      style={{
        backgroundImage: "url(/public/borderIconInGame.png)",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat" 
      }}
    >
      <img src={urlIconImage} className="w-full h-full"/>
    </div>
  );
}

export default IconInGame;
