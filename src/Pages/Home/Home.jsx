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
      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr1} />
      </div>

    </>
  );
}

export default Home;
