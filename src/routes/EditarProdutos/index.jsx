import React from "react";
import { useParams } from "react-router-dom";


export default function EditarProduto(){

    const {id} = useParams();

    document.title = "Editar Produtos" + id;

    return(
        <main>
            <h1>Editando o produto</h1>
            <h2>Produtos Selecionados : {id}</h2>
        </main>
    )
}