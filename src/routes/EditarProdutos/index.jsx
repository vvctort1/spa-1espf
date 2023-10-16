
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { ListaProduto } from "../../components/ListaProdutos";


export default function EditarProduto(){

    const {id} = useParams();
    const navigate = useNavigate();

    document.title = "Editar Produto " + id;

    // Criar uma estratégia para recuperar o produto na lista
    // Utilizando o id

    // lista
    // const produtoRecuperadoPorId = ListaProduto.filter(produto => produto.id == parseInt(id)); 

     // objeto, se colocar dessa forma, não é necessário colocar o índice como feito abaixo.
    // const produtoRecuperadoPorId = ListaProduto.filter(produto => produto.id == parseInt(id)[0]);



    // Criar uma estratégia para recuperar o produto da API-JSON com fetch, utilizando GET:

    const [produto,setProduto] = useState({
        id:id,
        nome: "",
        desc: "",
        preco: ""
    })

    useEffect(()=>{

        fetch(`http://localhost:5000/produtos/${id}`)
        .then((response)=> response.json())
        .then((response) => setProduto(response))
        .catch(error=> console.log(error));

    },[id])  // coloca o id aqui dentro para ele monitorar o id mudando.


    const handleChange = (e) =>{

        // Destructuring
        const { name,value } = e.target;

        // Terceira forma de input de dados utilizando spread: Setando os dados diretamente no objeto através de SPREAD
        setProduto({...produto,[name]:value});
    }

    // o "e" é quem está disparando a ação(botão, input, etc.)
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/produtos/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            // stringify transforma o json em texto (chamado de serialização)
            body: JSON.stringify(produto)
        })
        .then((response) => response.json())
        .then((response) => console.log("Dados alterados com sucesso - STATUS CODE: " + response.status))
        .catch(error => console.log(error));
        //Redirecionando para a página produtos
        navigate("/produtos")

    }

    return(
        <div>
            <h1>Editando o produto</h1>
            {/*
            <h2>Id : {id}</h2>
            <h2>Nome : {produtoRecuperadoPorId[0].nome}</h2>  
            <h2>Descrição : {produtoRecuperadoPorId[0].desc}</h2>  
            <h2>Preço do produto : {produtoRecuperadoPorId[0].preco}</h2>  
              */}
             <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Produto Selecionado</legend>
                        <div>
                            <label htmlFor="">Nome: </label>
                            <input type="text" name="nome" placeholder="Digite o nome do Produto" value={produto.nome} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Descrição: </label>
                            <input type="text" name="desc" placeholder="Digite a descrição do Produto" value={produto.desc} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="">Preço: </label>
                            <input type="text" name="preco" placeholder="Digite o preço do Produto" value={produto.preco} onChange={handleChange}/>
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
                




// primeira forma
{/* <form>
    <fieldset>
        <legend>Produto Selecionado</legend>
        <div>
            <label htmlFor="">Nome: </label>
            <input type="text" name="nome" placeholder="Digite o nome do Produto" value={produto.nome} onChange={(e)=> setProduto(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Descrição: </label>
            <input type="text" name="desc" placeholder="Digite a descrição do Produto" value={produto.desc} onChange={(e)=> setProduto(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">Preço: </label>
            <input type="text" name="preco" placeholder="Digite o preço do Produto" value={produto.preco} onChange={(e)=> setProduto(e.target.value)}/>
        </div>
        <div>
            <button>Editar</button>
        </div>
    </fieldset>
</form> */}


//Segunda forma de input com useState dentro do handleChange
// if(name == "nome"){
//     setProduto({"name":value, "desc": produto.desc,"preco":produto.preco});
// }else if(name == "desc"){
//     setProduto({"nome":produto.nome,"desc":value,"preco":produto.preco});
// }else if(name == "preco"){
//     setProduto({"nome":produto.nome,"desc":produto.desc,"preco":value});
// }