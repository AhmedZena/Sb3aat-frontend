import Header from "./Header/Header";
import Hero from "./Hero/Hero";
// import About from "./About US/About Us";
import Carousel from "./Serve/Serve";
import Card from "./Cards/Card";

const prdArr = [
  {
    imgSrc: ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"],
    title: "product 1",
  },
  {
    imgSrc: ["./2.jpg", "./4.jpg", "./3.jpg", "./1.jpg"],
    title: "product 2",
  },
  {
    imgSrc: ["./4.jpg", "./2.jpg", "./3.jpg", "./1.jpg"],
    title: "product 3",
  },
  {
    imgSrc: ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"],
    title: "product 4",
  },
];

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Card />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {prdArr.map((s) => {
          return (
            <div className="flex justify-center items-center h-screen bg-white">
              <div
                className="max-w-lg relative z-10"
                style={{ height: "18rem" }}
              >
                <Carousel autoSlide={true}>
                  {[...s.imgSrc.map((s) => <img src={s} />)]}
                </Carousel>
                <h1 style={{ color: "white" }}>{s.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div> */}
      {/* <About /> */}
      {/* </div> */}
    </>
  );
}

export default Home;
