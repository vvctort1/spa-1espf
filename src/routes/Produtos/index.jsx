import { ListaProduto } from "../../components/ListaProdutos"


export default function Produtos(){

    document.title = "Lista de Produtos";

    return(
        <main>
            <h1>Produtos</h1>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>DESCRIÇÃO</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {ListaProduto.map((item, indice)=>
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.desc}</td>
                            <td>{item.preco}</td>
                        </tr>
                )}

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>PRODUTOS INFORMÁTICOS - QTD = {ListaProduto.length}</td>
                    </tr>
                </tfoot>


            </table>
        </main>
    )
}