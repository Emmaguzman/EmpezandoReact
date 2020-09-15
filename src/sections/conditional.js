import React, { Component } from 'react'

class LogIn extends Component{
    render(){
        return <button>Login</button>
    }
}
class LogOut extends Component{
    render(){

        return (
         <div>
         <h4><strong>Bienvenido</strong> a la app</h4>    
        <button>Logout</button>
        </div>   
        )
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
                {this.state.mostrarA
                ?<LogIn/>
                :<LogOut/>}
                
            </div>
        );
    }
}

