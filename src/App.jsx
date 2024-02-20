import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/footer";
import Profile from "./Pages/profile/profile";
import Services from "./Pages/services/services";
import Service from "./Pages/service/service";
import "bootstrap/dist/css/bootstrap.min.css";
import Myservices from "./Pages/profile/myService";
import PersonalProfile from "./Pages/profile/personalProfile";
import SubCategory from "./Pages/subCateogry/subCategory.jsx";
import Navbar from "./components/navbar/navbar.jsx";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Services />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/profile" element={<Profile />}>
              <Route path="myServices" element={<Myservices />} />
              <Route path="personal" element={<PersonalProfile />} />
            </Route>
          </Routes>
          <SubCategory />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
