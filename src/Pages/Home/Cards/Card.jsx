// import { Card, CardBody, Typography } from "@material-tailwind/react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// export default function BackgroundBlogCard() {
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("https://sb3aat.onrender.com/api/categories")
//       .then((response) => {
//         setCategories(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//     <div>
//     <div className="grid justify-center grid-cols-4 ">
//         {categories.map((category, index) => (
//           <Card
//             onClick={() => navigate(`/subCategories/${category._id}`)}
//             key={index}
//             shadow={false}
//             className="relative grid h-[18rem] w-11/12 max-w-[25rem] items-end justify-center overflow-hidden text-center hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
//           >
//             <CardBody
//               floated={false}
//               shadow={false}
//               color="transparent"
//               className={`absolute  m-0 h-full w-full  bg-cover bg-center`}
//             >
//               <img
//                 variant="top"
//                 src={category.CatImgSrc}
//                 className="absolute z-10 w-5/6 h-5/6 rounded-xl"
//               />

//               <div className="absolute z-20 w-5/6 bg-black bg-opacity-50 to-bg-black-10 rounded-xl h-5/6" />
//             </CardBody>
//             <Typography
//               variant="h4"
//               color="black"
//               className=" z-50  leading-[1.5] text-white  text-center mb-32 "
//             >
//               {category.Name}
//             </Typography>
//           </Card>
//         ))}
//       </div>
    
//     </div>
     
//     </>
//   );
// }



import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BackgroundBlogCard() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://sb3aat.onrender.com/api/categories")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid justify-center sm:grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category, index) => (
        <Card
          key={index}
          onClick={() => navigate(`/subCategories/${category._id}`)}
          shadow={false}
          className="relative grid h-[18rem] w-11/12 max-w-[25rem] items-end justify-center overflow-hidden text-center hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out"
        >
          <CardBody
            floated={false}
            shadow={false}
            color="transparent"
            className={`absolute m-0 h-full w-full bg-cover bg-center`}
          >
            <img
              variant="top"
              src={category.CatImgSrc}
              className="absolute z-10 w-5/6 h-5/6 rounded-xl"
            />

            <div className="absolute z-20 w-5/6 bg-black bg-opacity-50 to-bg-black-10 rounded-xl h-5/6" />
          </CardBody>
          <Typography
            variant="h4"
            color="black"
            className="z-50 leading-[1.5] text-white text-center mb-32"
          >
            {category.Name}
          </Typography>
        </Card>
      ))}
    </div>
  );
}

