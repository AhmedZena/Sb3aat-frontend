import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BackgroundBlogCard() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://sb3aat.onrender.com/api/categories")
      .then((response) => {
        setCategories(response.data.categories);
        console.log(response.data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {categories.map((category, index) => (
          
          <Card
            key={index}
            shadow={false}
            className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
          >
            <CardBody
              floated={false}
              shadow={false}
              color="transparent"
              className={`absolute  m-0 h-full w-full  bg-cover bg-center`}
            >
               <img variant="top" src={category.CatImgSrc} className="absolute z-10 w-5/6 h-5/6 rounded-xl" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t  via-black/50" />
            </CardBody>
            <Typography
                variant="h2"
                color="black"
                className=" z-50 font-medium leading-[1.5] text-white flex justify-center items-center mb-24 "
              >
                {category.Name}
              </Typography>
          </Card>
        ))}
      </div>
    </>
  );
}



// import { Card, CardBody, Typography } from "@material-tailwind/react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";



// export default function BackgroundBlogCard() {

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://sb3aat.onrender.com/api/categories")
//       .then((response) => {
//         setCategories(response.data.categories);
//         console.log(response.data.categories);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);



//   return (
//     <>
//  <div className="flex flex-wrap justify-center gap-5">
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5] text-white"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5]"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5]"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
// </div>

// <div className="flex flex-wrap justify-center gap-5">
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5] text-white"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5]"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5]"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
// </div>

// <div className="flex flex-wrap justify-center gap-12">
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5] text-white"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
//   <Card
//     shadow={false}
//     className="relative grid h-[18rem] w-full max-w-[25rem] items-end justify-center overflow-hidden text-center mt-5 mb-10"
//   >
//     <CardBody
//       floated={false}
//       shadow={false}
//       color="transparent"
//       className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i.pinimg.com/564x/c0/32/08/c0320833a8deed0715715b9155aae307.jpg')] bg-cover bg-center"
//     >
//       <Typography
//         variant="h2"
//         color="black"
//         className="mt-10 font-medium leading-[1.5]"
//       >
//         How world!
//       </Typography>
//       <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//     </CardBody>
//   </Card>
  
// </div>


//     </>
//   );
// }
