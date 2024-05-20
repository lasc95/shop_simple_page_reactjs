import {Component} from 'react'

const styles = {
    //no se centrará si no le ponemos display flex
    //flexdirection dice que si es columna, va de arriba hacia abajo y lo centra, de otro modo, es de izquierda a derecha
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        //todos los elementos que agreguemos estarán dentro de este div, y empezarán desde la izquierda
        width: '1200px'
    }
}

class Layout extends Component{
    render(){
        return(
            //primer div, vamos a centrar
            //segundo div vamos a darle 1200 px
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }    
}

export default Layout
