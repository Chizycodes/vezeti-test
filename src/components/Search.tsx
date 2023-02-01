import React, { FC } from 'react';

type Props = {
    handleSearch: () => void;
    query: string;
    setQuery: (query: string) => void;
};

const Search: FC<Props> = ({ handleSearch, query, setQuery }) => {
	return (
		<div className="relative max-w-[500px] w-full hidden md:block">
			<input
				type="search"
				placeholder="Search for products"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
				className="v-input border-[#000000] h-[40px] w-full"
			/>
			<img
				src="/images/search.svg"
				alt="search"
				className="absolute right-[12px] top-[12px] cursor-pointer"
				onClick={handleSearch}
			/>
		</div>
	);
};

export default Search;
