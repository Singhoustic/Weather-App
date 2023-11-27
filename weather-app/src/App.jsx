import "./App.css";
import Search from "./components/Search";
import Card from "./components/Card";
import { useState } from "react";
function App() {
	const [search, setSearch] = useState("");
	const [weather, setWeather] = useState([]);
	const accessKey = "63f4b82a08224e19a4f163827232511";

	const changeSearch = (value) => {
		setSearch(value);
	};

	const getWeatherData = async () => {
		await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${accessKey}&q=${search}`
		)
			.then((res) => res.json())
			.then((data) => {
				setWeather(data);
				// console.log(data);
			})
			.catch((error) => {
				error("404 Error Not Frund");
				return error;
			});
	};

	return (
		<>
			<div className="main">
				<h2>Weather App</h2>
				<Search
					searchData={search}
					searchedItem={changeSearch}
					getWeather={getWeatherData}
				/>
				<Card weatherData={weather} />
			</div>
		</>
	);
}

export default App;
