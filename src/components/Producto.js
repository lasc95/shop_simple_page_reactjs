import {Component} from 'react'
import Button from './Button'

const styles = {
    producto: {
        border: 'solid 1px #eee', //los envuelve en una cajita
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)', //sombreado
        width: '30%',
        padding: '10px 15px', // que el contenido se aleje xpx de los bordes
        borderRadius: '5px'

    },
    img: { //para que ocupe todo el cuadro, solamente la imagen
        width: '100%'
    }
}

class Producto extends Component{
    render(){
        const {producto, agregarAlCarro} = this.props
        console.log(this.props)
        return(
            <div style={styles.producto}>
                <img alt={producto.name} src={producto.img} style={styles.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al Carro
                </Button>
            </div>
        )
    }
}

export default Producto