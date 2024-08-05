type PropsComponent = {
  searchSkinByName: (words: string) => void;
};

function searchSkin({ searchSkinByName }: PropsComponent) {
  const onChangeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value)
    searchSkinByName(event.target.value)
  }
  return (
    <div>
      <input
        type="text"
        className="w-full border-2 rounded-lg border-red-700 p-2 m-2 text-black"
        placeholder="Vandal Prime"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default searchSkin;
