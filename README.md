# Weather App (WeatherVista)

A simple weather app built with **Vite**, **React**, and **Tailwind CSS** that allows users to check current weather conditions for any city. The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

## Features
- Search for the weather by city name.
- Displays current temperature, humidity, wind speed, and weather conditions.
- Provides a weather icon based on the current weather conditions.
- Responsive design with **Tailwind CSS** for mobile and desktop views.

## Technologies Used
- **Vite**: A fast and modern build tool that provides a smooth development experience.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the app.
- **OpenWeatherMap API**: Provides weather data for different cities.

## Installation

### 1. Clone the repository
 git clone ....

### 2. install dependencies

npm install
# or if you're using yarn
yarn install


 ### 3. Create an OpenWeatherMap account

You will need an API key from OpenWeatherMap to fetch weather data. Follow these steps:

    Go to OpenWeatherMap.
    Sign up for an account and get your free API key.

### 4. Set up the API key

Create a .env file in the root of the project and add the following line:

VITE_OPENWEATHERMAP_API_KEY=your-api-key-here

Replace your-api-key-here with your actual API key.

### 5. Start the development server

Now that everything is set up, you can start the development server with:

npm run dev
# or if you're using yarn
yarn dev

