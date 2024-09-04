import React from 'react';
import CinemaSchedule from './components/CinemaSchedule';
import BlogList from './components/BlogList';
import CityInfo from './components/CityInfo';
import './App.css';
function App() {
  return (
    <div className="App">
      <CinemaSchedule />
      <BlogList />
      <CityInfo />
    </div>
  );
}

export default App;