import { useState } from "react";
import "./ModalAction.scss"

//digitar rfc com a página em branco cria a estrutura basica
export default function ModalAction(props) {

    const [produto,setProduto] = useState({
        nome: "",
        desc: "",
        preco: "",

    })

    const handleChange = (e) =>{

        // Destructuring
        const { name,value } = e.target;

        // Terceira forma de input de dados utilizando spread: Setando os dados diretamente no objeto através de SPREAD
        setProduto({...produto,[name]:value});
    }


    const handlePost = (produto) => {

        fetch("http://localhost:5000/produtos",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(produto)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }


    if(props.open){
        return (
          <div className="modal">
              <h1>MODAL</h1>
              <button onClick={()=>props.setClose(false)}>CLOSE</button>

              <div className="inserirProduto">
                <form onSubmit={()=> handlePost(produto)}>
                    <fieldset>
                        <legend >Novo Produto</legend>
                        <label htmlFor="idNome">Nome</label>
                        <input type="text" name="nome" id="idNome" value={produto.nome} onChange={handleChange}/>
                        <label htmlFor="idDesc">Descrição</label>
                        <input type="text" name="desc" id="idDesc" value={produto.desc} onChange={handleChange}/>
                        <label htmlFor="idPreco">Preço</label>
                        <input type="text" name="preco" id="idPreco" value={produto.preco} onChange={handleChange}/>
                        <input type="submit" value="Criar" />
                    </fieldset>
                </form>
              </div>


          </div>
        )
    }
}
