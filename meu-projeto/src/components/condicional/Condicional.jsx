//Aqui e como faz a condiocional no REACT

import { useState } from "react" 

function Condicional(){
    const [ name, setName ] = useState()
    return(
        <div>
            <form>
                <div>
                    <input type="text" 
                    placeholder='Digite seu nome' />
                </div>
                <div>
                    <button type="submit">Cadastre-se</button>
                </div>
            </form>
        </div>
    )
}

export default Condicional;