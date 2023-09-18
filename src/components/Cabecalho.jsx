import { Link } from 'react-router-dom';


export default function Cabecalho(){
    return(
        <>
            <header>
                <h1>Vite+React coded by - rm551649</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li><Link to="/editar/produtos/1">Editar Produtos</Link></li>
                            <li><Link to="/editar/produtos/2">Editar Produtos</Link></li>
                        </ul>
                    </nav>
            </header>
        </>
    )
}