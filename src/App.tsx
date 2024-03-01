import Home from './paginas/home/Home';
import './App.css';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/footer/footer';
import ListaCategorias from './components/Categorias/ListaCategorias/ListaCategorias';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaProdutos from './components/Produtos/ListaProdutos/ListaProdutos';
import CadastroCategoria from './components/Categorias/CadastroCategoria/CadastroCategoria';



function App() {
  return (
    <>
    <BrowserRouter>
   
    <Navbar/>
    <div className=' bg-white'>
    <Home/>
    <Routes>
      <Route path='/categoria' element={<ListaCategorias/>} />
      <Route path='/produto' element={<ListaProdutos/>} />
      <Route path='/cadastroCategoria' element={<CadastroCategoria/>} />
      <Route path='/editarCategoria/:id' element={<CadastroCategoria/>} />
    </Routes>
    <Footer/>
    </div>
   
    </BrowserRouter>
    </>
  );
}

export default App;