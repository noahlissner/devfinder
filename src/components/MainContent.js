import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "../assets/icon-search.svg";
import ResultCard from "./ResultCard";

const MainContent = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState();

  const apiCall = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${searchInput}`
      );
      setData(response.data);
    } catch (error) {
      setError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall();
  };

  const handleChange = (value) => {
    setError(false);
    setSearchInput(value);
  };

  return (
    <div className="mt-7 w-full ">
      <form
        onSubmit={handleSubmit}
        onChange={(e) => handleChange(e.target.value)}
        className="flex h-[60px] sm:h-[69px] items-center bg-lightTheme-bg-light dark:bg-darkTheme-bg-light rounded-2xl shadow-light dark:shadow-none duration-150"
      >
        <img src={SearchIcon} alt="" className="ml-4 mr-2.5 sm:ml-8 sm:mr-6" />
        <input
          type="text"
          className="flex-1 bg-transparent focus:outline-none text-lg text-lightTheme-logo dark:text-darkTheme-text placeholder-lightTheme-text-light dark:placeholder-darkTheme-text"
          placeholder="Search Github username..."
        />
        <span
          className={`text-[15px] text-[#F74646] font-bold ${
            error && "ml-[7px] sm:ml-6"
          }`}
        >
          {error && "No results"}
        </span>
        <button
          type="submit"
          className="w-[84px] h-[46px] sm:w-[106px] sm:h-[50px] rounded-xl bg-primary-blue
        text-darkTheme-text mx-[7px] sm:mr-[10px] sm:ml-6 hover:bg-button-hover duration-150 font-bold"
        >
          Search
        </button>
      </form>
      {data && <ResultCard data={data} />}
    </div>
  );
};

export default MainContent;
