
import style from "./Produtos.module.css";
import { Link } from "react-router-dom";
import { BiEdit as Editar } from "react-icons/bi";
import { FaTrash as Deletar } from "react-icons/fa"
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

    const handleDelete = (id) => {

        fetch(`http://localhost:5000/produtos/${id}`,{
            method: "DELETE",
        })

        .then(()=>window.location = '/produtos')
        .then(response => console.log(response.status))
        .catch(error => console.log(error));
    }

    return(
        <main>
            <h1>Produtos</h1>

            <ModalAction open={open} setClose={setOpen}/>

            <button onClick={()=>setOpen(true)} className={style.botaoAdicionar}>Adicionar</button>

            <table className={style.tblEstilo}>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                        <th>Editar</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutosApi.map((item, indice)=>
                        <tr key={indice} className={style.lineTbl}>
                            <td>{item.nome}</td>
                            <td>{item.desc}</td>
                            <td>{item.preco}</td>
                            <td><Link to={`/editar/produtos/${item.id}`}><Editar/></Link></td>
                            <td><Link  onClick={()=>handleDelete(item.id)}><Deletar/></Link></td>
                        </tr>
                )}

                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5}>
                      PRODUTOS INFORMÁTICOS - QTD = {listaProdutosApi.length}
                    </td>
                  </tr>
                </tfoot>

            </table>
        </main>
    )
}