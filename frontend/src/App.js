import './App.css';
import Logout from './components/Home/Logout';
import HomePage from './components/HomePage';
import Signup from './components/Signup';
import {Routes,Route} from "react-router-dom"
import {BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>

    <BrowserRouter>
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route exact path='/' element={<Signup/>}/>
          <Route exact path='/home' element={<HomePage/>}/>
          <Route exact path='/logout' element={<Logout/>}/>
          {/* <Route exact path='/login' element={<Login/>}/> */}
        </Routes>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
