import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Login from "./Login/Login";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import Register from "./Login/Register/Register";
import RequiredAuth from "./RequiredAuth/RequiredAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/about"
          element={
            <RequiredAuth>
              <About></About>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
