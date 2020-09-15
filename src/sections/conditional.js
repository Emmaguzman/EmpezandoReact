import React, { Component } from 'react'

class ComponenteA extends Component{
    render(){
        return <h4>Componente A</h4>
    }
}
class ComponenteB extends Component{
    render(){
        return <h4>Componente B</h4>
    }
}


export default class CondicionalSecction extends Component {
    constructor(){
        super();
        this.state={mostrarA:false}
    }
    render() {

        return (
        
            <div>
                <h4>CONDICIONALES!</h4>
                {this.state.mostrarA?<ComponenteA/>:<ComponenteB/>}
                
            </div>
        );
    }
}

