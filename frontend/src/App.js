// import logo from './logo.png'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages import
import Home from './pages/Home'
import Login from './pages/Login'
import Explore from './pages/Explore'
import Phone from './pages/Phone'

function App() {
  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/auth/phone' element={<Phone />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
