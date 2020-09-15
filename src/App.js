import React,{Component} from 'react';
//import CondicionalSecction from './sections/conditional'
import logo from './logo.svg';
import './App.css';
import cars from './assets/cars.json'

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

class CarItem extends Component{
  render(){
    const {car,id}=this.props;
  
  return(    
      <li >
        <p>key: {id}</p>
        <p><strong>NOMBRE:</strong>{car.name}</p>
        <p><strong>MARCA:</strong>{car.company}</p>
      </li>
    
  )
}
}

function App() {
  return (
   <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />                
      </header>
    </div>

    <div>
      <ul>
        {cars.map(car=>{
         return <CarItem  id={car.id} key={car.id} car={car}/>
        })
      }
      </ul>
    </div>

    </div> 
  );
}

export default App;
