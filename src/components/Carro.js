import {Component} from 'react'
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro:{
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative', //posicion relativa
        left: 12,
        top: 20
    }
}

class Carro extends Component{
    render(){
        const {carro, esCarroVisible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0) //vamos acumulando, partimos con acc 0 y le sumamos elemento cantidad
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0 ? //si la cantidad es distinta a 0, mostramos el componente
                    <BubbleAlert value={cantidad}></BubbleAlert>
                    : null}
                </span>
                <button style={styles.carro} onClick={mostrarCarro}>
                    Carro
                </button>
                {esCarroVisible ? <DetallesCarro carro={carro}/> : null }
                
            </div>
        )
    }
}

export default Carro