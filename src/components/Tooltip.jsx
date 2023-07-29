import React, { useEffect, useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ data }) => {
  const [countryData, setCountryData] = useState(data);
  const { id, iso_3166_1: countrycode } = data;

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countrycode}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const countryData = data[0];
        const { population, cca2, capital, name, flags } = countryData;
        setCountryData({
          ...data,
          population,
          cca2,
          capital: capital[0],
          name: name.common,
          flag: flags.png,
        });
        console.log(countryData);
      }
    };
    getDetails();
  }, [countrycode]);

  if (!countryData.capital) return;
  return (
    <div id={`tooltip-${id}`}>
      <img src={countryData.flag} alt="flag" /> <br />
      <strong>Capital</strong> {countryData.capital}
      <br />
      <strong>Country</strong> {countryData.name}
      <br />
      <strong>Population</strong> {countryData.population}
    </div>
  );
};

export default Tooltip;
