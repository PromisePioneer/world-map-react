import style from "./css-modules/CountryList.module.css";
import Spinner from "../Reusable/Spinner.jsx";
import Message from "../Reusable/Message.jsx";
import CountryItem from "./CountryItem.jsx";
import { useCities } from "../../context/CitiesContext.jsx";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your city by clicking the city on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={style.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
