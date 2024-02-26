import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const [mode,setMode]=useState('light');
const [alert,setAlert]=useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setInterval(() => {
    setAlert(null);
    
  }, 2000);
}

const toggleMode= ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='grey'
    showAlert("Dark mode has been enabled","success");
  }else{
    setMode('light');
    document.body.style.backgroundColor ='white'
    showAlert("Light mode has been enabled","success")
  }
}
  return (
    <>
    <Router>
    <Navbar title="neelesh.co" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <div className="container my-8">
        <Routes>
            <Route path='/about' element={<About/>} />
            {/* <Route path="/about">
              <About/>
            </Route> */}
            <Route path='/textform' element={<TextForm title="Enter Text Here..." mode={mode} showAlert={showAlert}/>} />
            
        </Routes>
            
    </div>
    </Router>
    </>
  );
}

export default App;
