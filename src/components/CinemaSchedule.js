import React from 'react';

const CinemaSchedule = () => {
  const movies = [
    {
      title: "Фильм 1",
      description: "Описание фильма 1",
      poster: "URL_постера_фильма_1",
      sessions: ["10:00", "14:00", "18:00"]
    },
    {
      title: "Фильм 2",
      description: "Описание фильма 2",
      poster: "URL_постера_фильма_2",
      sessions: ["12:00", "16:00", "20:00"]
    }
  ];

  return (
    <div>
      <h2>Расписание кинотеатра</h2>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>{movie.title}</h3>
          <img src={movie.poster} alt={movie.title} />
          <p>{movie.description}</p>
          <p>Сеансы: {movie.sessions.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default CinemaSchedule;