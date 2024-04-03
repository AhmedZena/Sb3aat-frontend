import Header from "./Header/Header";
import Hero from "./Hero/Hero";
// import About from "./About US/About Us";
import Carousel from "./Serve/Serve";
import CustomCard from "./Cards/Card";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FourthCards from "../../components/FourthCards";


function Home() {
  const [arr, setArr] = useState([]);
const [arr1, setArr1] = useState([]);
const [arr2, setArr2] = useState([]);

  //   const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://sb3aat.onrender.com/api/services/category/65f04379d93290b026515596`
      )
      .then((ser) => {
        console.log(ser.data);
        setArr(ser.data.slice(0, 4));
      })
      .catch((e) => {});
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://sb3aat.onrender.com/api/services/category/65f043dfd93290b02651559c`
      )
      .then((ser) => {
        console.log(ser.data);
        setArr1(ser.data.slice(0, 4));
      })
      .catch((e) => {});
  }, []);
  useEffect(() => {
    axios
      .get(
        `https://sb3aat.onrender.com/api/services/category/65f19983a8fbab9c153785c3`
      )
      .then((ser) => {
        console.log(ser.data);
        setArr2(ser.data.slice(0, 4));
      })
      .catch((e) => {});
  },[])
  
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <CustomCard />
      <div className="p-5 mt-10 bg-zinc-200">

      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr1} />
      <div className="flex flex-col w-full bg-white">
      <h1 className="mt-10 text-3xl font-bold text-center">Why Sabaat is your best choice for doing your work ?</h1>
      <div className="grid justify-center grid-cols-3 p-5 bg-white">
        
        <div className="flex flex-col items-center justify-center p-10 text-3xl text-center ">
          <img src="https://www.svgrepo.com/show/101816/24-hours.svg" alt="" className="w-20 h-20" />
          <p className="text-center">24/7 Support</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-3xl text-center ">
          <img src="https://www.svgrepo.com/show/523353/dollar-minimalistic.svg" alt="" className="w-20 h-20" />
          <p className="text-center">Economical prices</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-3xl text-center ">
          <img src="https://www.svgrepo.com/show/381231/category-variety-random-shuffle.svg" alt="" className="w-20 h-20" />
          <p className="text-center">Variety of services</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-3xl text-center ">
          <img src="https://www.svgrepo.com/show/154326/user-avatar-with-check-mark.svg" alt="" className="w-20 h-20" />
          <p className="text-center">Professional service providers</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-3xl text-center ">
          <img src="https://www.svgrepo.com/show/482915/simple-wallet-line-drawing.svg" alt="" className="w-20 h-20" />
          <p className="text-center">Safe and reliable transactions</p>
        </div>
        <div className="flex flex-col items-center justify-center p-10 text-3xl text-center ">
          <img src="https://www.svgrepo.com/show/18128/guarantee.svg" alt="" className="w-20 h-20" />
          <p className="text-center">Guarantee of rights</p>
        </div>
      </div>
      </div>
    
      </div>

    </>
  );
}

export default Home;
