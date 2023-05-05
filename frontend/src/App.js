// import logo from './logo.png'
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <div className='App'>
        <h1 className='text-3xl underline'>Hello World</h1>
      </div>
      <Footer />
    </>
  )
}

export default App
