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
import AlertView from './pages/admin/AlertView'
import CheckUser from './pages/CheckUser'
import AdminMessages from './pages/admin/AdminMessages'
import MessageCreate from './pages/admin/MessageCreate'
import Logout from './pages/Logout'

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
            <Route path='/check' element={<CheckUser />} />
            <Route path='/alerts/:id' element={<AlertView />} />

            <Route path='/admin/alerts' element={<AdminAlerts />} />

            <Route path='/admin/users' element={<AdminUsers />} />
            <Route path='/admin/users/:id' element={<UserEdit />} />
            <Route path='/admin/users/:id/edit' element={<UserEdit />} />

            <Route path='/admin/messages' element={<AdminMessages />} />
            <Route path='/admin/messages/create' element={<MessageCreate />} />

            <Route path='/logout' element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </SuchanaContextProvider>
    </Router>
  )
}

export default App
