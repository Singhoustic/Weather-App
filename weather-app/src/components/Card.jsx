import React from "react";

const Card = ({ weatherData }) => {
	return (
		<>
			<div className="card">
				{weatherData.length != 0 ? (
					<>
						<div className="cityname">{weatherData?.location?.name}</div>
						<div className="maxMinTemp">
							<div className="maxTemp">
								Temperature: {weatherData?.current?.temp_c}&deg;
							</div>
							<div className="minTemp">
								Humidity: {weatherData?.current?.humidity}&#37;
							</div>
						</div>
						<div className="iconStyle">
							<img
								className="icon"
								src={weatherData?.current?.condition?.icon}
							></img>
							<h4>{weatherData?.current?.condition?.text}</h4>
						</div>
						<div className="region">
							<div> Region: {weatherData?.location?.region}</div>
							<div>Feels Like: {weatherData?.current?.feelslike_c}&deg;</div>
						</div>
					</>
				) : (
					<>
						<h1>Enter City</h1>
					</>
				)}
			</div>
		</>
	);
};

export default Card;
