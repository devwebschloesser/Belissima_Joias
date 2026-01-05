import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { CarrinhoProvider } from "./Context/CarrinhoContext"
import CarrinhoPage from "./Pages/CarrinhoPage"
import DepoimentosPage from "./Pages/DepoimentosPage"

function App() {
  

  return (
    <>
    <CarrinhoProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/carrinho" element={<CarrinhoPage />} />
        <Route path="/depoimentos" element={<DepoimentosPage />} />
    </Routes>
    </BrowserRouter>
    </CarrinhoProvider>
    
    </>
  )
}

export default App
