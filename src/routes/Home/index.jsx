
import "./Home.scss"

export default function Home(){

    document.title = "HOME";

    if (sessionStorage.getItem("token-user")) {
        return(
            <main>
                <h1>HOME</h1>
                <h2>Grande Oferta!</h2>
    
                <div>
                    <figure>
                        <img src="/img/black-friday-4571856_1920.png" alt="logo" />
                        <figcaption></figcaption>
                    </figure>
                </div>
            </main>
        )
    } else {
        window.location = "/login";
    }
}