import { useState } from 'react';
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';
import WeatherDetails from './Components/WeatherDetails';
import ForeCast from './Components/ForeCast';
import Footer from './Components/Footer';


const App = () => {
  const  [location , setLocation] = useState('Bangalore');

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  return (
    <div className='bg-gradient-to-r from-indigo-600 to-blue-300 min-h-screen min-w-full bg-cover bg-fixed overflow-x-hidden'>
         <Header setLocation={setLocation} />
      <div className="flex justify-center my-8">
        <WeatherCard location={location} apikey={apiKey} />
      </div>
      <div className="flex justify-center mb-8">
        <WeatherDetails location={location} apiKey={apiKey} />
      </div>
      <ForeCast location={location} apiKey={apiKey} />
      <Footer />
    </div>
  );
};

export default App;