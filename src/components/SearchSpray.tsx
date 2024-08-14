import React from 'react'
type PropsComponent = {
    searchSprayByName: (words: string) => void;
};
export function SearchSpray({ searchSprayByName: searchSprayByName }: PropsComponent) {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchSprayByName(event.target.value)
    }
    return (
        <div className="sticky top-0  w-full bg-transparent flex items-center justify-center">
            <input
                type="text"
                className="w-full border-2 rounded-lg  border-red-700 p-2 m-2 text-black max-w-64"
                placeholder="Cool joy spray"
                onChange={onChangeHandler}
            />
        </div>
    );
}
