import './App.css';
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
          {/* <Route exact path='/login' element={<Login/>}/> */}
        </Routes>
      </header>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
