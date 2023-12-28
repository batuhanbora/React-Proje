import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './pages/Navbar/Navbar'
import HomePage from './pages/Home/HomePage'
import Products from './pages/Products/Products'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
