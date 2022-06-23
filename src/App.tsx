import React from 'react';
import './App.css';

type appProps = {
  something : string
}; 

type appState = {
  somethingElse:string;
}

class App extends React.Component<appProps,appState> { 
  state : appState = {
    somethingElse : 'friend'
      
  }

  render(){
    return (
    <div>
        <h1>Hello {this.state.somethingElse}</h1>
        <p>{this.props.something}</p>
    </div>
    )   
  }
    
}

export default App;
