import "./App.css";
import Clock from './Clock';
import Crono from './Cronometre';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {



  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Routes>
            <Route exact path='*' element={<Clock />}></Route>
            <Route exact path='/Crono' element={<Crono />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>

  
  
  
  
  
  
  )




}

export default App;
