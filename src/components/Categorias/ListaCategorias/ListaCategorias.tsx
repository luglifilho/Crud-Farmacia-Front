import { useEffect, useState } from 'react';
import CardCategorias from '../CardCategorias/CardCategorias';
import Categoria from '../../../models/Categoria';
import { buscar, deletar } from '../../../service/Service';
import { DNA } from 'react-loader-spinner';
import { Link } from 'react-router-dom';




function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

 

  

  async function buscarCategorias() {
    try {
      await buscar('/categoria', setCategorias,);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')    
      }
    }
  }
    async function deletarCategoria(id:number) {

        try {
          if (window.confirm("Você realmente deseja excluir a categoria?")) {
            await deletar(`/categoria/${id}`)
            window.location.reload();
          }
        } catch (error) {
          alert('O token expirou, favor logar novamente')  
        }
        
        
    }
  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  return (
    <>
    {categorias.length === 0 && (
      <DNA
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper mx-auto"
      />
    )}
    <div className=' mr-[150px] flex justify-end'>
        <Link to={'/cadastroCategoria'}> <button className='bg-orange-300 text-black rounded-full w-120 p-5 font-bold text-2xl '>
            Cadastrar nova Categoria</button>
            </Link>
    </div>
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria) => (
            <>
              <CardCategorias key={categoria.id} categoria={categoria} handleDelete={() => deletarCategoria(categoria.id)} />
            </>
          ))}
        </div>
      </div>
    </div>

    
  </>
           
  );

            }


export default ListaCategorias;