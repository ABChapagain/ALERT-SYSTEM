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

// Admin import
import AdminAlerts from './pages/admin/AdminAlerts'
import AdminUsers from './pages/admin/AdminUsers'
import UserEdit from './pages/admin/UserEdit'

//context import
import { SuchanaContextProvider } from './context/SuchanaContext'

function App() {
  return (
    <Router>
      <SuchanaContextProvider>
        <Header />
        <main className='min-h-screen'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Login />} />
            <Route path='/auth/phone' element={<Phone />} />
            <Route path='/explore' element={<Explore />} />

            <Route path='/admin/alerts' element={<AdminAlerts />} />
            <Route path='/admin/users' element={<AdminUsers />} />
            <Route path='/admin/users/:id' element={<UserEdit />} />
            <Route path='/admin/users/:id/edit' element={<UserEdit />} />
          </Routes>
        </main>
        <Footer />
      </SuchanaContextProvider>
    </Router>
  )
}

export default App
