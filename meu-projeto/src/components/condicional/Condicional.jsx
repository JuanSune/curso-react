//Aqui e como faz a condiocional no REACT

import { useState } from "react" 

function Condicional(){
    const [ name, setName ] = useState()
    const [ userName, setUserName ] = useState()

    function NovoNome(x){
        x.preventDefault()
        console.log(name)
        setUserName(name)
    }

    return(
        <div>
            <form onSubmit={NovoNome}>
                <div>
                    <input type="text" 
                    placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <button type="submit">Cadastre-se</button>
                </div>
            </form>
            <div>
                {userName && (
                    <h1>Tudo bem senhor {name}</h1>
                )}
                
            </div>
        </div>
    )
}

export default Condicional;