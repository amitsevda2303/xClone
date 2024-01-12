import './App.css';
import Profile from './components/Home/Profile';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import {Routes,Route} from "react-router-dom"
import Feature from "./components/Home/Feature"
import {BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>

    <BrowserRouter>
    <div className="App">
      <header className="App-header">
         <div className="superContainer"> {localStorage.getItem("User")&&<>
         <Feature/>
         <div className='PageHandler'><Profile/></div>
         </>}</div>
        <Routes>
          <Route exact path='/' element={<Signup/>}/>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          {/* <Route exact path='/logout' element={<Logout/>}/> */}
          {/* <Route exact path='/login' element={<Login/>}/> */}
        </Routes>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
