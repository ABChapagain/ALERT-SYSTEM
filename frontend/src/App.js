// import logo from './logo.png'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

// Pages import
import Home from './pages/Home'
import Login from './pages/Login'
import Explore from './pages/Explore'

function App() {
  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
