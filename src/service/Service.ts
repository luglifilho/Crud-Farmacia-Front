import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/"
})


  // eslint-disable-next-line @typescript-eslint/ban-types
  export const buscar = async(url: string, setDados: Function, ) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  export const atualizar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  export const deletar = async(url: string) => {
    await api.delete(url)
  }