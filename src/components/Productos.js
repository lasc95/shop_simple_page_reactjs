import {Component} from 'react'
import Producto from './Producto'

const styles = {
    //para mostrar de manera horizontal el div de abajo
    productos: {
        display: 'flex', //para manipular mas facil el contenido
        flexDirection: 'row', // se vea de iz a derecha
        justifyContent: 'space-between', // que se separen de manera equitativa (los 3 que ocupen el 100%)
    }
}

class Productos extends Component{
    render(){
        const {productos, agregarAlCarro} = this.props
        return(
            <div style={styles.productos}>
                {productos.map((producto) => 
                <Producto
                agregarAlCarro={agregarAlCarro}
                key={producto.name}
                producto={producto}/>)}
            </div>
        )
    }

}

export default Productos
