import "./App.css";
import Profile from "./components/Home/Profile";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Feature from "./components/Home/Feature";
import { BrowserRouter } from "react-router-dom";
import Logout from "./components/Home/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <div className="aside">
            {localStorage.getItem("User") && <Feature />}
          </div>
          <div className="mainContainer">
            <div className="firstContainer">
              <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </div>
            <div className="secondContainer"></div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
