import Home from '@/pages/Home'
import About from '@/pages/About'
import Collections from '@/pages/Collections'
import Contact from '@/pages/Contact'
import Login from '@/pages/Login'
import Wishlist from '@/pages/Wishlist'
import {Routes, Route} from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout';


export const AppRoutes = () => {
  return(
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  )
}