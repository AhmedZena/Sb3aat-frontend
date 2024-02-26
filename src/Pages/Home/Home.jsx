import Hero from "./Hero/Hero";
import BackgroundBlogCard from "./Cards/Card";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      <div>
        <Hero />
      </div>

      <>
        <h1 className="text-4xl font-bold text-center mt-10">Latest Blogs</h1>
        <div className="flex justify-center space-x-6">
          <BackgroundBlogCard />
          <BackgroundBlogCard />
          <BackgroundBlogCard />
          <BackgroundBlogCard />
        </div>

        <div className="flex justify-center space-x-6">
          <BackgroundBlogCard />
          <BackgroundBlogCard />
          <BackgroundBlogCard />
          <BackgroundBlogCard />
        </div>

        <div className="flex justify-center space-x-4">
          <BackgroundBlogCard />
          <BackgroundBlogCard />
          <BackgroundBlogCard />
        </div>
      </>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
