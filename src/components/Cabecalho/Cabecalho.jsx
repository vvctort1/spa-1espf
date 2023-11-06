import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Cabecalho.scss";

export default function Cabecalho(){

    const objUser = JSON.parse(sessionStorage.getItem("data-user"));


    const rotaAtual = useLocation();

    const navigate = useNavigate();

    const handleLogout = () => {

        sessionStorage.removeItem("token-user");
        sessionStorage.removeItem("data-user");

        navigate("/login");
    }


    return(
        <>
            <header className='cabecalho'>
                
                <div >
                    <p>{sessionStorage.getItem("token-user") ? objUser.email : ""}</p>
                    <p>{ sessionStorage.getItem("token-user") ? objUser.name: ""}</p>
                </div>
                <div>
                    <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "btnLogout" : "btn"}>Logout</button>
                </div>
                    <nav>
                        <ul>
                            <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link></li>
                            <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>Produtos</Link></li>
                            <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link></li>
                        </ul>
                    </nav>
            </header>
        </>
    )
}