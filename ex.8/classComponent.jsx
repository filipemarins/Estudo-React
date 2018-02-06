import React, {Component} from 'react'

// Poderia tbm não importar o Component e dar o extends em React.Component

export default class ClassComponent extends Component {
    constructor(props) {
        // Sempre tem que chamar o super
        super(props)
        this.state = { value: props.initialValue }
    }

    sum(delta) {
        this.setState({ value: this.state.value + delta })
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={() => this.sum(-1)} >Dec</button>
                <button onClick={() => this.sum(1)}>Inc</button>
            </div>

        )
    }
}