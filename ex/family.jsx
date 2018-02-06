import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Família</h1>    
        {/* Só funciona para um elemento 
            {React.cloneElement(props.children, {...props})}
        */}
        { /* multiplos
        { React.Children.map(props.children, child => React.cloneElement(child, {...props})) }
        */}
        { childrenWithProps(props.children, props) }
    </div>
)