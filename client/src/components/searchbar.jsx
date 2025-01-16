import React, { useState } from 'react';
import axios from 'axios';
import { GooglePlacesAutocomplete } from 'react-google-places-autocomplete';

const LocationSearch = () => {
  const [location, setLocation] = useState(null);  // The location name
  const [weatherData, setWeatherData] = useState(null);  // The weather data for the location
  const [activities, setActivities] = useState([]);  // The activities for the location based on weather
  const [error, setError] = useState('');  // Error state if there's an issue fetching weather

  // Mapping of weather conditions to activities
  const weatherToActivities = {
    sunny: ['Hiking', 'Beach Day', 'Cycling', 'Picnic'],
    rainy: ['Indoor Activities', 'Museum', 'Cinema', 'Shopping'],
    snowy: ['Skiing', 'Snowboarding', 'Ice Skating', 'Sledging'],
    cloudy: ['Walking', 'City Tour', 'Photography'],
  };

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const weatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';  // Replace with your OpenWeatherMap API key
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherApiKey}&units=metric`;

      const response = await axios.get(weatherUrl);
      const data = response.data;
      setWeatherData(data);
      setError('');

      // Map weather description to activities
      const weatherDescription = data.weather[0].main.toLowerCase();  // Example: 'Clear', 'Rain', etc.
      const suggestedActivities = weatherToActivities[weatherDescription] || [];
      setActivities(suggestedActivities);

    } catch (err) {
      setWeatherData(null);
      setActivities([]);
      setError('Failed to fetch weather data');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Search Location</h2>

      {/* Google Places Autocomplete */}
      <GooglePlacesAutocomplete
        placeholder="Search for a city"
        onPress={(data, details = null) => {
          // Get the location name and coordinates
          setLocation(data.description);
          const { lat, lng } = details.geometry.location;
          fetchWeatherData(lat, lng);  // Fetch weather for the location
        }}
        query={{
          key: 'YOUR_GOOGLE_PLACES_API_KEY',  // Replace with your Google Places API key
          language: 'en',
          types: 'cities',  // Limit search to cities
        }}
        debounce={300}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display Weather Data */}
      {weatherData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Weather in {location}</h3>
          <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
        </div>
      )}

      {/* Display Activity Suggestions */}
      {activities.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Suggested Activities:</h3>
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
