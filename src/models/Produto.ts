import Categoria from './Categoria';
export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    VendaComreceita: boolean;
    categoria:  Categoria ;
}