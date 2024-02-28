import homeLogo from '../../assets/pharma.jpg';
//import './Home.css';


function Home() {
    return (
        <>
        <div className=" flex justify-center ">
          <div className='container grid grid-cols-2 bg-white text-sky-600'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Remedio para sua Dor</h2>
              <p className='text-xl'>Os melhores rémedios do mercado</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded-full bg-neutral-200 text-orange-800 py-2 px-4'>Ver Produtos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-3/4 ' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;