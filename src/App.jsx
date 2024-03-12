import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.jsx";
import Profile from "./Pages/profile/profile.jsx";
import Services from "./Pages/services/services.jsx";
import Service from "./Pages/service/service.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Myservices from "./Pages/profile/myService";
import PersonalProfile from "./Pages/profile/personalProfile";
import SubCategory from "./Pages/subCateogry/subCategory.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Login from "./Pages/Auth/Login/Login.jsx";
import Register from "./Pages/Auth/Register/Register.jsx";
import Categories from "./Pages/Categories/categories.jsx";
import Home from "./Pages/Home/Home.jsx";
import Notifications from "./Pages/notfications/notficationsPage.jsx";
import About from "./Pages/About US/About Us.jsx";
import Message from "./Pages/Message/Message.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Payment from "./Pages/Payment/Payment.jsx";
import Paypal from "./Pages/Payment/Paypal.jsx";
import Courses from "./Pages/courses/courses.jsx";
import CreateService from "./Pages/service/CreateService.jsx";
import Course from "./Pages/courses/Course.jsx";
import {CreateCourse}  from "./Pages/courses/CreateCourse.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/profile" element={<Profile />}>
          <Route index element={<PersonalProfile />} />
          <Route path="myServices" element={<Myservices />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/subCategory" element={<SubCategory />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/courses" element={<Courses />}>
          <Route index element={<Courses />} />
          <Route path=":id" element={<Courses />} />
        </Route>
        <Route path="/course" element={<Course />} />
        <Route path="/createService" element={<CreateService />}></Route>
        <Route path="/createCourse" element={<CreateCourse />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/message" element={<Message />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/paypal" element={<Paypal />} />
      </Routes>
      {/* <SubCategory /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
