import React, { useEffect, useState } from 'react';

const Tooltip = ({ data }) => {
  const [countryData, setCountryData] = useState(data);
  const { id, iso_3166_1 } = data;

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${iso_3166_1}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const countryData = data[0];
        const { population, cca2, capital, region, name } = countryData;
        setCountryData({
          ...data,
          population,
          cca2,
          capital: capital[0],
          region,
          name: name.common,
        });
        console.log(countryData);
      }
    };
    getDetails();
  }, [iso_3166_1]);
  return (
    <div id={`tooltip-${id}`}>
      <strong>Capital</strong> {countryData.capital}
      <br />
      <strong>Country</strong> {countryData.name}
      <br />
      <strong>Region</strong> {countryData.region}
      <br />
      <strong>Population</strong> {countryData.population}
    </div>
  );
};

export default Tooltip;
