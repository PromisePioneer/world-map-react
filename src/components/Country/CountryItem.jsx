import styles from "./css-modules/CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagsapi.com/${country.emoji}/shiny/64.png`}
        alt={country.emoji}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
