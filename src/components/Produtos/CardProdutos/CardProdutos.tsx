import { Link } from 'react-router-dom'
 import Produto from '../../../models/Produto';


 interface CardProdutoProps {
   produto: Produto
 }
 


function CardProduto({produto}: CardProdutoProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <div>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl text-center'>{produto.nome}</header>
     
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <img src='/src/assets/genlogo.jpg' className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase  text-black'>{produto.categoria?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className=' font-semibold uppercase text-black text-center text-5xl' >R${produto.preco}0</h4>
        </div>
      </div>
      <div className="flex">
        <Link to={`/editarProduto/${produto.id}`} className=' h-10 w-full text-slate-100 bg-indigo-400 hover:bg-indigo-400 flex items-center justify-center'>
          <button className='bg-indigo-400 h-10 w-full'>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${produto.id}`} className='h-10 w-full text-slate-100 bg-red-400 hover:bg-red-400 w-full flex items-center justify-center'>
          <button className='bg-red-400 h-10 w-full'>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto

