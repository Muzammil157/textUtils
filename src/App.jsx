import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
// import About from './components/About'

function App() {
  const [mode, setMode] = useState('light');
  function changeMode() {
    if (mode == 'dark') {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} changeViewMode={changeMode} />
      <div className="container my-3">
        <Textform heading="Enter the text to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  )
}

export default App
