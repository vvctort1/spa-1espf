
import Cabecalho from "./components/Cabecalho"
import Conteudo from "./components/Conteudo"
import Rodape from "./components/Rodape"


export default function App(){
  return(
    <>
    <h1>APP - Componente principal!</h1>
    <div>
        {/* Iniciando a área do cabeçalho */}
        <Cabecalho/>

        {/* Iniciando a área do conteúdo */}
        <Conteudo/>
        
        {/* Iniciando a área do rodapé */}
        <Rodape/>
    </div>
    </>
  )
}