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

function useConditionalRendering (mostrarA){
    if(mostrarA){
        return <ComponenteA/>
    }else{
        return <ComponenteB/>
    }
}

export default class CondicionalSecction extends Component {
    constructor(){
        super();
        this.state={mostrarA:true}
    }
    render() {
  
        return (
            <div>
                <h4>CONDICIONALES!</h4>
                {useConditionalRendering(this.state.mostrarA)}
                
            </div>
        );
    }
}

