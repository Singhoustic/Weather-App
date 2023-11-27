import React, { useRef } from "react";
import Card from "./Card";
const Search = (props) => {
	return (
		<>
			<div className="data">
				<input
					type="search"
					id="city_name"
					value={props.searchData}
					placeholder="Enter City"
					onChange={(e) => {
						props.searchedItem(e.target.value);
					}}
				/>
				<button onClick={props.getWeather}>Search</button>
			</div>
		</>
	);
};

export default Search;
