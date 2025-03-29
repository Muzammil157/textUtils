import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/TextForm'
import Alert from './components/Alert'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('grey');

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
  }

  function hideAlert() {
    setAlert(null);
  }

  function changeColor(event) {
    setColor(event.target.value);
  }

  (() => {
    if (mode == 'light') {
      document.body.style.backgroundColor = '#fff';
    } else {
      document.body.style.backgroundColor = color;
    }
  })();

  function changeMode() {
    if (mode == 'light') {
      setMode('dark');
      showAlert('Dark mode enabled!', 'info');
    } else {
      setMode('light');
      setAlert(null);
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} changeViewMode={changeMode} changeModeColor={changeColor} />
      <Alert alertMessage={alert} removeAlert={hideAlert} />
      <div className="container my-3">
      
         <Textform heading="Enter the text to analyze" mode={mode} />
          {/* <About /> */}
        
      </div>
    </>
  )
}

export default App
