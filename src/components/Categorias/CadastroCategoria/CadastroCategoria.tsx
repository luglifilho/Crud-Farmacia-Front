import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";

function CadastroCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    await buscar(`/categoria/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });

    console.log(JSON.stringify(categoria));
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria);

        alert("Categoria atualizada com sucesso");

      } catch (error: any) {
        alert("Erro ao atualizar a categoria");
      }
    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria);

        alert("Categoria cadastrado com sucesso");
        
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("Erro ao cadastrado o Categoria");
        }
      }
     
    }

    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8 text-black">
        {id === undefined ? "Cadastre uma nova categoria" : "Editar categoria"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4 p-10"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2 text-black">
          <label htmlFor="descricao">Nome da categoria:</label>
          <input
            type="text"
            placeholder="Digite o nome"
            name="nome"
            className="border-2 border-slate-700 rounded p-2 bg-neutral-300"
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? "Cadastrar" : "Editar"}
        </button>
      </form>
    </div>
  );
}

export default CadastroCategoria;
