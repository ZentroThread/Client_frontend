import Home from '@/pages/Home'
import About from '@/pages/About'
import Collections from '@/pages/Collections'
import Contact from '@/pages/Contact'
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
      </Route>
    </Routes>
  )
}