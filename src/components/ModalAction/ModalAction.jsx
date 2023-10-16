import "./ModalAction.scss"
//digitar rfc com a página em branco cria a estrutura basica
export default function ModalAction(props) {

    if(props.open){
        return (
          <div className="modal">
              <h1>MODAL</h1>
              <button onClick={()=>props.setClose(false)}>CLOSE</button>
          </div>
        )
    }
}
