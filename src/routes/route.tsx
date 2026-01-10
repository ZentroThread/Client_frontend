import Home from '@/pages/Home'
import About from '@/pages/About'
import {Routes, Route} from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout';


export const AppRoutes = () => {
  return(
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}