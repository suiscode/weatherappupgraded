import { Inter } from "next/font/google";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import Circle from "./components/Circle";
import Card from "./components/Card";
import axios from "axios";
import Suggestion from "./components/Suggestion";
import Middle from "./components/Middle";
import Image from "next/image";
import Middleblack from "./components/Middleblack";
import Middlewhite from "./components/Middlewhite";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const borderGradient = `linear-gradient(to right, #111827 50%, white 50%)`;

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeatherData(response.data);
      setLoading(false);
    });
  }, []);

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("Ulaanbaatar");
  const [locationToFind, setLocationToFind] = useState("Ulaanbaatar");
  const [visibilty, setVisibilty] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [weatherData, setWeatherData] = useState([]);
  const [autoData, setAutoData] = useState([]);

  const handleItemClick = (item) => {
    setLocationToFind(item.text);
    setVisibilty(false);
    setLocation(item.text);
  };

  const handleKeyDown = (event, item) => {
    if (event.key === 'ArrowDown') {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex < autoData.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === 'ArrowUp') {
      setSelectedSuggestionIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (event.key === 'Enter' && selectedSuggestionIndex !== -1) {
      setLocationToFind(autoData[selectedSuggestionIndex].text);
    setVisibilty(false);
    setLocation(autoData[selectedSuggestionIndex].text);


    }
    console.log(selectedSuggestionIndex);
  };

  let autoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;

  useEffect(() => {
    axios.get(autoUrl).then((res) => {
      setAutoData(res.data.features);
    });
  }, [location]);

  let api_key = "7c91776fb1267161889e298c3e7ceb4b";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationToFind}&units=Metric&appid=${api_key}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        alert('Not available');
      }
    };

    if (locationToFind.trim() !== '') {
      fetchData();
    }
  }, [locationToFind]);

  if (loading) {
    return (
      <div className="flex bg-[#404040] w-[100vw] h-[100vh] justify-center items-center">
        <h1 className="text-[100px]">Loading...</h1>
      </div>
    );
  }

  return (
    <main
      className={
        "flex bg-[#404040] w-[100vw] h-[100vh] justify-center items-center"
      }
    >
      <div
        className={
          "w-[1600px] h-[1000px] bg-[#F3F4F6] overflow-hidden rounded-[50px] p-10 relative flex items-center pl-[170px]"
        }
      >
        <Search
          location={location}
          setLocation={setLocation}
          setVisibilty={setVisibilty}
          visibilty={visibilty}
          suggestions={autoData}
          selectedSuggestionIndex={selectedSuggestionIndex}
          setSelectedSuggestionIndex={setSelectedSuggestionIndex}
          handleKeyDown={handleKeyDown}
        />
        <Suggestion
          autoData={autoData}
          setLocationToFind={setLocationToFind}
          visibilty={visibilty}
          setVisibilty={setVisibilty}
          location={location}
          setLocation={setLocation}
          selectedSuggestionIndex={selectedSuggestionIndex}
          setSelectedSuggestionIndex={setSelectedSuggestionIndex}
          handleItemClick={handleItemClick}
        />
        <Middle />
        <Image
          src="/Vector.svg"
          width={43}
          height={43}
          alt="vector"
          className="absolute z-40 right-[748px]"
        />
        <Image
          src="/Vectori.svg"
          width={42}
          height={30}
          alt="vector"
          className="absolute z-40 right-[800px]"
        />
        <Middleblack position={"top-[-49px]"} />
        <Middlewhite position={"top-[350px]"} />
        <Middleblack position={"top-[549px]"} />
        <Middlewhite position={"top-[556px]"} />
        <Image
          src="/daycircle.svg"
          width={128}
          height={128}
          className="absolute top-[145px] left-[120px]"
        />

        <Card
          dateColor={"text-[#6B7280]"}
          locationColor={"text-black"}
          bgSet={false}
          image={`/sun.png`}
          location={weatherData.name}
          temp={weatherData?.main?.temp_max.toFixed()}
          weatherStatus={weatherData?.weather}
        />
        <div
          className={
            "bg-[#0F141E] h-full absolute top-0 right-0 rounded-tr-[50px] rounded-br-[50px] rounded-bl-[50px] w-[50%] z-0 flex justify-center items-center"
          }
        >
          <Card
            dateColor={"text-[#9CA3AF]"}
            locationColor={"text-white"}
            bgSet={true}
            image={`/moon.png`}
            location={weatherData.name}
            temp={weatherData?.main?.temp_min.toFixed()}
            weatherStatus={weatherData?.weather}
          />
          <Image
            src="/nightcircle.svg"
            width={128}
            height={128}
            className="absolute top-[850px] right-[150px]"
          />
        </div>
      </div>
    </main>
  );
}
