import { useState } from "react";
//onChange={(e) => setName(e.target.value)}
function Form (){

    const [nome, setNome] = useState("")
    function foi(x){
        x.preventDefault()
        console.log(`Foi devidamente registrado com o nome de: ${nome}`)
    }
    return(
        <div>
            <h1>Digite seu nome:</h1>
            <form onSubmit={foi}>
                <div>
                    <input type="text" name="" id="" placeholder="Seu nome" onChange={(texto) => setNome(texto.target.value)} />
                </div>
                <div>
                    <input type="submit" value="inscreva-se" />
                </div>
            </form>
        </div>
    )
}

export default Form