// import React, { useState } from "react";
// import { TERipple } from "tw-elements-react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Hero() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = () => {
//     if (searchTerm.trim() !== "") {
//       axios
//         .get(`https://sb3aat.onrender.com/api/search/${searchTerm}`)
//         .then((response) => {
//           // هنا يمكنك التعامل مع البيانات التي تم الحصول عليها من الخادم
//           console.log(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching search results:", error);
//         });
//     }
//   };

//   return (
//     <div className="relative inset-0 m-0 h-screen w-full rounded-none bg-[url('https://khamsat.hsoubcdn.com/assets/images/hero-33cc6eb8f1a98f8aacf154a4ff4c5f76d5610553e8ba4accb6d22515a64a184a.jpg')] bg-cover bg-center mt-0">
//       <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2">
//         <div className="text-4xl font-bold text-center mb-7">
//           The largest Arab market for buying and selling services
//         </div>
//         <p className="text-xl text-center mb-9 ">
//           Get your work done easily and safely at prices starting from only $7
//         </p>

//         <div class="relative flex flex-wrap items-stretch w-full p-2 mb-4 bg-white">
//           <input
//             type="search"
//             class="relative flex-auto block w-auto min-w-0 p-2 m-0 -ml-2 text-lg  rounded-l focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
//             placeholder="Search"
//             aria-label="Search"
//             aria-describedby="button-addon3"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Link 
//     to={`/search/${searchTerm}`} 
//     className="relative z-[2] rounded-r border-2 border-green-500 px-6 py-2 font-medium uppercase text-white bg-green-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
// >
//     Search
// </Link>
//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default Hero;

import React, { useState } from "react";
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

    <div className="relative h-screen bg-[url('https://khamsat.hsoubcdn.com/assets/images/hero-33cc6eb8f1a98f8aacf154a4ff4c5f76d5610553e8ba4accb6d22515a64a184a.jpg')] bg-cover bg-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-4xl font-bold mb-7">
          The largest Arab market for buying and selling services
        </div>
        <p className="text-xl mb-9">
          Get your work done easily and safely at prices starting from only $7
        </p>

        <div className="relative max-w-md mx-auto">

          <input
            type="search"
            className="w-full p-3 pr-10 text-lg rounded-full focus:outline-none"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link
            to={`/search/${searchTerm}`}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center w-14 h-14 text-lg font-semibold text-black bg-green-500 rounded-full transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            onClick={handleSearch}
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

