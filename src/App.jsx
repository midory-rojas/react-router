import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ChiSiamo from './pages/ChiSiamo'
import Homepage from './pages/Homepage'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layout/DefaultLayout'
import SingoloProdotto from './pages/SingoloProdotto'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/prodotti" element={<Prodotti />} />
            <Route path="/prodotti/:id" element={<SingoloProdotto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
