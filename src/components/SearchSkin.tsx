type PropsComponent = {
  searchSkinByName: (words: string) => void;
};

function searchSkin({ searchSkinByName }: PropsComponent) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchSkinByName(event.target.value)
  }
  return (
    <div className="sticky top-0  w-full bg-slate-900 flex items-center justify-center ">
      <input
        type="text"
        className="w-full border-2 rounded-lg  border-red-700 p-2 m-2 text-black max-w-64"
        placeholder="prime vandal"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default searchSkin;
