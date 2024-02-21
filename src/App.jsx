import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/footer.jsx";
import Profile from "./Pages/Profile/profile.jsx";
import Services from "./Pages/Services/services";
import Service from "./Pages/Service/service";
import "bootstrap/dist/css/bootstrap.min.css";
import Myservices from "./Pages/Profile/myService";
import PersonalProfile from "./Pages/Profile/personalProfile";
import SubCategory from "./Pages/SubCateogry/subCategory.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Login from "./Pages/Auth/Login/Login.jsx";
import Register from "./Pages/Auth/Register/Register.jsx";
import Categories from "./Pages/Categories/categories.jsx";
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
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/subCategory" element={<SubCategory />}></Route>
            <Route path="/categories" element={<Categories />}></Route>
          </Routes>
          {/* <SubCategory /> */}
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
