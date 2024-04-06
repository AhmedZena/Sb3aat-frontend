import React, { useState } from "react";
import { TERipple } from "tw-elements-react";
import axios from "axios";
import { Link } from "react-router-dom";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      axios
        .get(`https://sb3aat.onrender.com/api/search/${searchTerm}`)
        .then((response) => {
          // هنا يمكنك التعامل مع البيانات التي تم الحصول عليها من الخادم
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  };

  return (
    <div className="relative inset-0 m-0 h-screen w-full rounded-none bg-[url('https://khamsat.hsoubcdn.com/assets/images/hero-33cc6eb8f1a98f8aacf154a4ff4c5f76d5610553e8ba4accb6d22515a64a184a.jpg')] bg-cover bg-center mt-0">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
        <div className="mt-5 mb-2 text-xl font-bold text-center sm:text-4xl sm:mb-7">
          The largest Arab market for buying and selling services
        </div>
        <p className="mb-10 text-lg text-center sm:text-xl sm:mb-9 mt-9 ">
          Get your work done easily and safely at prices starting from only $7
        </p>

        <div class="relative flex  sm:flex-wrap   items-stretch w-full p-2 mb-4 bg-white">
          <input
            type="search"
            class="relative flex-auto block w-auto min-w-0 p-4 m-0 -ml-2 text-lg  rounded-l focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link 
    to={`/search/${searchTerm}`} 
    className="relative z-[2] rounded-r border-2 border-green-500 px-6 py-2 font-medium uppercase text-white bg-green-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
>
    Search
</Link>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;