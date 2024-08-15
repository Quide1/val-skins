type PropsComponent = {
  searchCardByName: (words: string) => void;
};

function searchCard({ searchCardByName }: PropsComponent) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    searchCardByName(event.target.value)
  }
  return (
    <div className="sticky top-0  w-full bg-slate-900  flex items-center justify-center">
      <input
        type="text"
        className="w-full border-2 rounded-lg  border-red-700 p-2 m-2 text-black max-w-64"
        placeholder="Hivemind Card"
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default searchCard
