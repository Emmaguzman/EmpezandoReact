import React,{Component} from 'react';
import CondicionalSecction from './sections/conditional'
import logo from './logo.svg';
import './App.css';


/*class ComponenteTest extends Component{
  constructor(){
  super();
  this.state= {cnt:0}
    setInterval(() => {
      this.setState({cnt:this.state.cnt +1})
    }, 1000);
  }
  render(){
    //return <ContadorNumero numero= {this.state.cnt}></ContadorNumero>
  return <h2>{this.state.cnt}</h2>
  }
}

class ContadorNumero extends React.Component{
  render(){
  return <h2>{this.props.numero}</h2>
  }

}

class Componente extends Component{
  render(){
  return (<h1>Hola como estas {this.props.name} ??</h1>);
  }
}

class ComponenteDos extends  Component{
  render(){
    return(<h1>MI SEGUNDO COMPONENTE</h1>);
  }
}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        
        <CondicionalSecction></CondicionalSecction>
      </header>
      
    </div>
    
  );
}

export default App;
