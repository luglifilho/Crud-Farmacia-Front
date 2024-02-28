import { Link } from 'react-router-dom'
 import Categoria from '../../../models/Categoria';

 interface CardCategoriaProps {
   categoria: Categoria,
   handleDelete: () => void;
 }


function CardCategoria({categoria, handleDelete}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl text-center'>{categoria.nome}</header>
     
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className=' h-10 w-full text-slate-100 bg-indigo-400 hover:bg-indigo-400 flex items-center justify-center'>
          <button className='bg-indigo-400 h-10 w-full'>Editar</button>
        </Link>
        {/* <Link to={`/deletarCategoria/${categoria.id}`} className='h-10 w-full text-slate-100 bg-red-400 hover:bg-red-400 w-full flex items-center justify-center'> */}
          <button onClick={handleDelete} className='bg-red-400 h-10 w-full'>Deletar</button>
        {/* </Link> */}
      </div>

     
    </div>
    
    
  )
}

export default CardCategoria

