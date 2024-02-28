

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-orange-300 text-sky-600 flex justify-center p-4 '>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold '>GenPharmacy</div>

            <div className='flex gap-4 '>
              <div className='hover:underline'>Produtos</div>
              <div className='hover:underline'>Categorias</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar