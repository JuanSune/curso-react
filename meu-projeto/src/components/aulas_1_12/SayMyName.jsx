    import styles from './SayMyName.module.css'
    
    function Nome({nome,idade,profissao}){
        return(
            <div className={styles.Principal}>
                <h1>Tudo bem</h1>
                <p>A minha idade é: {idade}</p>
                <p>Meu nome é: {nome}</p>
                <p>Minha profissao é: {profissao}</p>
            </div>
        )
    }

    export default Nome