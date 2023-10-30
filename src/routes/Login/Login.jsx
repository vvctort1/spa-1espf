import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Login() {

    //CRIANDO O REDIRECIONADOR
    const navigate = useNavigate();

    const [usuario,setUsuario] = useState({
        email: "",
        senha: ""
    })

    //PREENCHIMENTO DO FORM
    const handleChange = (e) => {
      //DESTRUCTURING NOS CAMPOS DO FORM(NAME,INPUT).
      const {name,value} = e.target;
      //PREENCHENDO O USE-STATE COM OS VALORES DA DESESTRUTURAÇÃO, UTILIZANDO O OPERADOR SPREAD.
      setUsuario({...usuario,[name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let users;

    try {
        const response = await fetch("http://localhost:5000/usuarios");
        users = await response.json();
    } catch (error) {
        alert("Ocorreu um erro no processamento da sua solicitação!");
    }

    //REALIZANDO A VALIDAÇÃO DO USUÁRIO.
    for (let x = 0; x < users.length; x++){
        const user = users[x];
        //REALIZANDO A COMPARAÇÃO DE FATO!
        if (user.email == usuario.email && user.senha == usuario.senha){
            alert("Login realizado com sucesso!")
            navigate('/',{replace: true})

            return;
        }
    }

    alert("Login ou senha incorretos")
    setUsuario({
        email: "",
        senha: ""
    });
  }

  return (
    <div>
        <h1>Login</h1>

        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>User Information:</legend>
                    <div>
                        <label htmlFor="idEmail">Email: </label>
                        {/*Para o preenchimento é obrigatório adicionar o atributo value e o evento onChange*/}
                        <input type="email" id="idEmail" name="email" placeholder="Digite seu email" value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha: </label>
                        <input type="password" id="idSenha" name="senha" placeholder="Digite sua senha" value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
