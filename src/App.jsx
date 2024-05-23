import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './pages/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import Products from './pages/Products/Products'
import Footer from './pages/Home/Footer'
import { ApiProvider } from './context/ApiContext'

function App() {

  return (
    <div>
      <ApiProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ApiProvider>
    </div>
  )
}

export default App
