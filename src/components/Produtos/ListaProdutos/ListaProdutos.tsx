import { useEffect, useState } from 'react';
import CardProdutos from '../CardProdutos/CardProdutos';
import Produto from '../../../models/Produto';
import { buscar } from '../../../service/Service';
import { DNA } from 'react-loader-spinner';




function ListaProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([]);

 

  

  async function buscarProdutos() {
    try {
      await buscar('/produto', setProdutos,);
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')    
      }
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>
    {produtos.length === 0 && (
      <DNA
        visible={true}
        height="200"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper mx-auto"
      />
    )}
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {produtos.map((produto) => (
            <>
              <CardProdutos key={produto.id} produto={produto} />
            </>
          ))}
        </div>
      </div>
    </div>
  </>
           
  );

            }


export default ListaProdutos;