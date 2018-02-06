import React, {Component} from 'react'

// Poderia tbm não importar o Component e dar o extends em React.Component

export default class ClassComponent extends Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}