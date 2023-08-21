import PropTypes from 'prop-types'

function frag(x){
    return(
        <>
            
                <li>Tudo bem caro {x.nome}, lhe desejo {x.data}</li>
            
        </>
    )
}

frag.propTypes = {
    nome: PropTypes.string,
    data: PropTypes.string
}

frag.defaultProps = {
    nome: 'Nome não informado',
    data: 'Data não informada'
}


export default frag;