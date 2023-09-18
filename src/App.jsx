
import Cabecalho from "./components/Cabecalho"
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg";
import style from "./App.module.css";


export default function App(){

  let viteLogoAlt = "Vite Logo";

  return(
    <>
    <h1 className={style.titulo}>APP - Componente principal!</h1>
    <div className={style.container}>
        {/* Iniciando a área do cabeçalho */}
        <Cabecalho/>

        {/* Iniciando a área do conteúdo */}
        <Conteudo viteLogoProps={viteLogo} viteAltProps={viteLogoAlt}/>
        
        {/* Iniciando a área do rodapé */}
        <Rodape/>
    </div>
    </>
  )
}