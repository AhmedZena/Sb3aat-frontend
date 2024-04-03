import React from "react";
import { TERipple } from "tw-elements-react";

function Hero() {
  return (
    <div className="relative inset-0 m-0 h-screen w-full rounded-none bg-[url('https://khamsat.hsoubcdn.com/assets/images/hero-33cc6eb8f1a98f8aacf154a4ff4c5f76d5610553e8ba4accb6d22515a64a184a.jpg')] bg-cover bg-center mt-0">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
        <div className="text-4xl font-bold text-center mb-7">
          The largest Arab market for buying and selling services
        </div>
        <p className="text-xl text-center mb-9 ">
          Get your work done easily and safely at prices starting from only $7
        </p>

        <div class="relative flex flex-wrap items-stretch w-full p-2 mb-4 bg-white">
          <input
            type="search"
            class="relative flex-auto block w-auto min-w-0 p-4 m-0 -ml-2 text-lg  rounded-l focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
          />
          <TERipple>
            <button
              class="p-4 px-6 py-4 font-medium text-white uppercase transition duration-150 ease-in-out bg-green-500 border border-green-500 rounded-r hover:bg-green-600 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </TERipple>
        </div>
      </div>
    </div>
  );
}

export default Hero;
