import React from "react";
import { useParams } from "react-router-dom";
import { ListaProduto } from "../../components/ListaProdutos";


export default function EditarProduto(){

    const {id} = useParams();

    document.title = "Editar Produto " + id;

    // Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id

    // lista
    const produtoRecuperadoPorId = ListaProduto.filter(produto => produto.id == parseInt(id)); 

     // objeto, se colocar dessa forma, não é necessário colocar o índice como feito abaixo.
    // const produtoRecuperadoPorId = ListaProduto.filter(produto => produto.id == parseInt(id)[0]);



    return(
        <div>
            <h1>Editando o produto</h1>
            <h2>Id : {id}</h2>
            <h2>Nome : {produtoRecuperadoPorId[0].nome}</h2>  
            <h2>Descrição : {produtoRecuperadoPorId[0].desc}</h2>  
            <h2>Preço do produto : {produtoRecuperadoPorId[0].preco}</h2>  
             
             <div>
                <form>
                    <fieldset>
                        <legend>Produto Selecionado</legend>
                        <div>
                            <label htmlFor="">Nome: </label>
                            <input type="text" name="nome" placeholder="Digite o nome do Produto"/>
                        </div>
                        <div>
                            <label htmlFor="">Descrição: </label>
                            <input type="text" name="desc" placeholder="Digite a descrição do Produto"/>
                        </div>
                        <div>
                            <label htmlFor="">Preço: </label>
                            <input type="text" name="preco" placeholder="Digite o preço do Produto"/>
                        </div>
                        <div>
                            <button>Editar</button>
                        </div>
                    </fieldset>
                </form>
             </div>
        </div>
    )
}


// ali em cima o index é 0, pois o produtoRecuperadoPorId pode retornar apenas 1 item (id é único), logo a lista só vai ter o item que o usuário tiver selecionado.