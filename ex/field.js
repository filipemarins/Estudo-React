import React, {Component} from 'react'

// No react o componente pode ser controlado ou não... No componente controlado o estado dele no javascript é quem comanda as edições na dom

// Voce digita no input, gera um evento a partir da dom, o evento é capturado, é chamado uma função que evolui estado do objeto e renderiza o componente

// A valor do dado sempre esta no controle (se for um componente controlado), quem vai deter o dominio/controle do dado é o componente, não a view/dom...

class Field extends Component {
    constructor(props) {
        super(props)
        this.state = {value: props.initialValue}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange} value={this.state.value} />
            </div>
        )
    }
}

export default Field