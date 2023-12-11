import React, { useState } from 'react'
import styles from './styles.css'

const Contador = (props) => {
    const [contador, setContador] = useState(props.inicio)
    const [valorIncremento, setValorIncremento] = useState(props.valorIncremento)

    const [historio, setHistorico] = useState(['Historico de valores'])
    const listagem = historio.map((historio) => <p key={historio}> {historio}</p>)

    function handleUpdate(){
        setContador(parseInt(contador) + parseInt(valorIncremento))
        setHistorico([...historio, contador])
    }

    function handleDownUpdate(){
        setContador(contador - valorIncremento)
        setHistorico([...historio, contador])
    }

    function handleReset(){
        setContador(0)
        setHistorico(['RESETADO'])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setValorIncremento(valorIncremento)
    }

    const handleName = (e) => {
        setValorIncremento(e.target.value)
    }

    console.log(`Valor incremento ${valorIncremento}`);
    console.log(`Valor contador ${contador}`)

    return (
        <div>
            <form onClick={handleSubmit}>
                <label htmlFor="">
                    Definir valor de incremento 
                    <input type='number' onChange={handleName} value={valorIncremento} />
                </label>
                <button type='submit' >Definir</button>
            </form>
            
        
            <p>Contador: {contador}</p>
            <button onClick={() => contador < 100 ?  handleUpdate() : window.alert('Valor maximo alcançado!')}>
                Adicionar
            </button>

            <button onClick={() => handleReset()}>
                Reset
            </button>

            <button onClick={() => contador > 1 ? handleDownUpdate() : window.alert('Valor minimo alcançado!')}>
                Diminuir
            </button>

            <div>
                {listagem}
            </div>
        </div>
    )
}

export default Contador