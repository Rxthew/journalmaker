import React from 'react';
import './App.css';
import {ReadElement,ParagraphElement,TitleElement} from './components/baseComponents'
import JournalEntry from './components/templateEntry'


type appState = Readonly<{
  elementList : React.ReactElement[];
}>

class App extends React.Component<{},appState> {
  appRoot: React.ReactElement
  constructor(props:{}){
    super(props);
    this.state = {
      elementList : [<ReadElement currentValue='John Doe' element={TitleElement} textCols={20} textRows={20}/>,<JournalEntry del={()=>{}}/>]           
    }
    this.appRoot = <div>{this.state.elementList}</div>
  } 
  render(){
    return (
        this.appRoot
    )   
  }
    
}

export default App;
