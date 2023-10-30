import { useState } from "react"


export default function Login() {

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

  return (
    <div>
        <h1>Login</h1>

        <div>
            <form>
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
