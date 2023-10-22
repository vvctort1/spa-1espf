
import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";
import style from "./App.module.css";
import { Outlet } from "react-router-dom";


export default function App(){

  return(
    <>
    <div className={style.container}>
        {/* Iniciando a área do cabeçalho */}
        <Cabecalho/>

        <Outlet/>
        
        {/* Iniciando a área do rodapé */}
        <Rodape/>
    </div>
    </>
  )
}