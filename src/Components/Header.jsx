import searchIcon from "../assets/search.png";
// eslint-disable-next-line react/prop-types
const Header = ({ setLocation }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const newLocation = e.target.location.value;
    setLocation(newLocation);
  };

  return (
    <header>
      <div className="flex justify-center items center">
        <div className="flex justify-center">
          <img src="weather.png" alt="" className="w-16 h-16 space-y-12" />
          <h1 className="text-md font-semibold md:text-2xl mt-6">
            WeatherVista
          </h1>
        </div>
      </div>
      <div className="flex justify-center mt-6 -mr-6">
        <form onSubmit={handleSearch} className="flex gap-x-1">
          <input
            type="text"
            name="location"
            className="bg-white opacity-80 rounded-full w-52 h-10 md:w-80 md:h-10"
            placeholder="Enter city"
          />
          <button
            type="submit"
            className="bg-white opacity-80 p-2 rounded-full flex justify-center"
          >
            {" "}
            <img src={searchIcon} alt="search" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
