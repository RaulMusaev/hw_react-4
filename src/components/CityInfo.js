import React from 'react';

const CityInfo = () => {
  const cities = [
    {
      country: "Россия",
      city: "Москва",
      description: "Столица России",
      emblem: "URL_герба_Москвы",
      population: "12 млн",
      area: "2561 км²"
    },
    {
      country: "Россия",
      city: "Санкт-Петербург",
      description: "Второй по величине город России",
      emblem: "URL_герба_Санкт-Петербурга",
      population: "5,4 млн",
      area: "1439 км²"
    }
  ];

  return (
    <div>
      <h2>Информация о городах</h2>
      {cities.map((city, index) => (
        <div key={index}>
          <h3>{city.city} ({city.country})</h3>
          <img src={city.emblem} alt={city.city} />
          <p>{city.description}</p>
          <p>Население: {city.population}</p>
          <p>Площадь: {city.area}</p>
        </div>
      ))}
    </div>
  );
};

export default CityInfo;