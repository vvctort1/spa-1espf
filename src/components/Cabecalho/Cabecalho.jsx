import { Link } from 'react-router-dom';
import "./Cabecalho.scss";

export default function Cabecalho(){
    return(
        <>
            <header className='cabecalho'>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                        </ul>
                    </nav>
            </header>
        </>
    )
}