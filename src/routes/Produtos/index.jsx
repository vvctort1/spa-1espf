import { ListaProduto } from "../../components/ListaProdutos"
import style from "./Produtos.module.css";
import { Link } from "react-router-dom";
import { BiEdit as Editar } from "react-icons/bi";
import { useEffect, useState } from "react";
import ModalAction from "../../components/ModalAction/ModalAction";


export default function Produtos(){

    document.title = "Lista de Produtos";

    const [listaProdutosApi, setListaProdutosApi] = useState([]);

    //função para controlar o fluxo de execução, nesse caso criamos um array de dependencias
    useEffect(()=>{

        //Realizando o Request
        fetch("http://localhost:5000/produtos")
        //Recebendo o Response e transformando em json
        //então
        //Transformando o dado textificado pelo http em json
        .then((response)=> response.json())
        //Exibindo os dados no console
        .then((response)=> setListaProdutosApi(response))
        //Exibindo caso ocorra algum erro
        .catch(error=> console.log(error))

    },[])

    const [open, setOpen] = useState(false)

    return(
        <main>
            <h1>Produtos</h1>

            <ModalAction open={open} setClose={setOpen}/>

            <button onClick={()=>setOpen(true)}>OPEN - MODAL</button>

            <table className={style.tblEstilo}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutosApi.map((item, indice)=>
                        <tr key={indice} className={style.lineTbl}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.desc}</td>
                            <td>{item.preco}</td>
                            <td><Link to={`/editar/produtos/${item.id}`}><Editar/></Link></td>
                        </tr>
                )}

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={5}>PRODUTOS INFORMÁTICOS - QTD = {ListaProduto.length}</td>
                    </tr>
                </tfoot>


            </table>
        </main>
    )
}