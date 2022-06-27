import React from 'react';
import './App.css';
import {ReadElement,TitleElement} from './components/baseComponents'
import JournalEntry from './components/templateEntry'
import {v4} from 'uuid'


type appState = Readonly<{
  elementList : React.ReactElement[];
}>

class App extends React.Component<{},appState> {
  constructor(props:{}){
    super(props);
    this.deleteEntry = this.deleteEntry.bind(this)
    this.state = {
      elementList : [<JournalEntry key={v4()} id={v4()} del={this.deleteEntry}/>,<JournalEntry key={v4()} id={v4()} del={this.deleteEntry}/>]           
    }
     
  }
  
  deleteEntry(event:React.MouseEvent){
      const checkId:string = event.currentTarget.id
      this.setState( () => {
        return {
         elementList: this.state.elementList.filter(elem => elem.props.id !== checkId)
       }
       })
  }

  render(){
    return (
      <div>
      <ReadElement currentValue='John Doe' element={TitleElement} textCols={20} textRows={20}/>
      {this.state.elementList}
      </div>
    )   
  }
    
}

export default App;
