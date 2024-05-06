// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Tform from './components/Tform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  // const[alert,setAlert]=useState(null)
  // const showAlert=(message,type)=>{
  //   setAlert=({
  //     msg:message,
  //     type:type,
  //   })

  // }

  const toggleMOde = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743'

      showAlert('Dark mode is enable', 'success')
      document.title = 'Textutils-Dark Mode';
      // setInterval(()=>{
      //   document.title='textutils is amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title='install textutils Now'
      // },1500)
    }
    else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert('Light mode is enable', 'success')
      document.title = 'Textutils-Light Mode'
    }
  }
  return (
    <>
      {/* <router> */}
        <Navbar title='Textutils' about='about Textutils' mode={mode} toggleMOde={toggleMOde} />
        <Alert alert={alert} />
      <div className="container my-3">
      {/* <Router> */}

        {/* <Navbar /> */}
        {/* <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Tform showAlert={showAlert} heading='Enter your text to analyse' mode={mode} />}></Route>
        </Routes>
      </Router> */}

      <Tform showAlert={showAlert}  heading='Enter your text to analyse' mode={mode}/>
      {/* <Tform heading='Enter your text to analyse' mode={mode} /> */}
      </div>
      {/* </router> */}

    </>
  );
}

export default App;
