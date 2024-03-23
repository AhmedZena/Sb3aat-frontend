import React from "react";
import { TERipple } from "tw-elements-react";

function Hero() {
  return (
    <div className="relative inset-0 m-0 h-screen w-full rounded-none bg-[url('https://khamsat.hsoubcdn.com/assets/images/hero-33cc6eb8f1a98f8aacf154a4ff4c5f76d5610553e8ba4accb6d22515a64a184a.jpg')] bg-cover bg-center mt-0">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-4xl font-bold mb-7 text-center">
          The largest Arab market for buying and selling services
        </div>
        <p className="text-lg mb-9 text-center ">
          Get your work done easily and safely at prices starting from only $7
        </p>

        <div className="relative mb-4 flex w-full flex-wrap items-stretch ">
          <input
            type="search"
            className="relative m-0 -ml-2 block w-auto text-lg min-w-0 flex-auto rounded-l border border-solid  focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 p-1"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
          />
          <TERipple>
            <button
              className="relative z-[2] rounded-r border-2 border-green-500 px-6 py-2  font-medium uppercase text-white  bg-green-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
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

