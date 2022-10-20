import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import React, { useEffect, useState } from "react";

const cities = [
  {
    code: "FR",
    name: "Paris",
  },
  {
    code: "CM",
    name: "Londres",
  },
  {
    code: "CA",
    name: "Toronto",
  },
  {
    code: "CN",
    name: "Pekin",
  },
  {
    code: "ID",
    name: "Jakarta",
  },
  {
    code: "NO",
    name: "Oslo",
  },
];
const WEATHER_API_KEY = "eaea3a0c292ca39cb5e5272736989424";

const kelvinToDegre = (kelvin) => {
  console.log("kelvin", kelvin);
  return (kelvin - 273).toFixed(1);
};
// Afficher la météo d'un pays aléatoirement

const Page1 = () => {
  const [selectedCity, setSelectedCity] = useState("FR");

  //récupérer la lat et lon de la ville
  const {
    data: latLon,
    isLoading: isLatLonLoading,
    refetch: refetchLatLon,
  } = useQuery(["latlng"], async () => {
    return await Axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${selectedCity}&appid=${WEATHER_API_KEY}`
    ).then((res) => res.data[0]);
  });

  let lat = latLon?.lat;
  let lon = latLon?.lon;

  //Retourner des infos sur la météo
  const {
    data: meteoData,
    isLoading: isMeteoLoading,
    refetch: refetchMeteo,
  } = useQuery(["meteo"], async () => {
    const data = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        lat ? lat : 0
      }&lon=${lon ? lon : 0}&appid=${WEATHER_API_KEY}`
    ).then((res) => res.data);
    return data;
  });

  let temp = meteoData ? kelvinToDegre(meteoData.main.temp) : "inconnu";
  let weather = meteoData?.weather[0].main;

  //Mettre à jour la ville sélectionnée
  const handleCountrySelection = (e) => {
    setSelectedCity(e.target.value);
  };

  //Recharger l'api à chaque fois qu'on change de ville
  useEffect(() => {
    refetchLatLon();
    refetchMeteo();
  }, [selectedCity]);

  return (
    <div className="page">
      <select onChange={(e) => handleCountrySelection(e)}>
        {cities?.map((city) => {
          return (
            <option value={city.name} key={city.code}>
              {city.name}
            </option>
          );
        })}
      </select>
      {!isLatLonLoading && !isMeteoLoading ? (
        <>
          <p>
            lat : {lat.toFixed(2)} / lng : {lon.toFixed(2)}
          </p>
          <p>Température : {temp}</p>
          <p>Temps : {weather}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};
export default Page1;
