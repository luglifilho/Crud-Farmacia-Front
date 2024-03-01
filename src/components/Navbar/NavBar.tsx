import { Link } from "react-router-dom"


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-orange-300 text-sky-600 flex justify-center p-4 '>
          <div className="container flex justify-between text-lg">
           <Link to={'/'}><div className='text-2xl font-bold '>GenPharmacy</div></Link> 

            <div className='flex gap-4 '>
            <Link to={'/produto'} className='hover:underline'>Produtos</Link>
              <Link to={'/categorias'} className='hover:underline'>Categorias</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar