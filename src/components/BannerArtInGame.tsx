function BannerArtInGame({ urlArtImage }: { urlArtImage: string }) {
  return (
    <div
      className="relative h-[500px] w-[200px] border-t-4"
      style={{
        backgroundImage: `url(${urlArtImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center absolute top-[65%] z-10 w-full">
        <p className="text-sm font-semibold">listo</p>
        <p className="bg-yellow-300 p-1 text-sm w-full text-center justify-center text-black font-bold shadow-lg">
          Midudev43
        </p>
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, rgb(15 23 42))",
        }}
      ></div>
    </div>
  );
}

export default BannerArtInGame;
