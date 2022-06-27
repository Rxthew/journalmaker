import React from 'react';
import './App.css';
import HeaderElement from './components/header'
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
          <HeaderElement/>
          <main>
              {this.state.elementList}
          </main>
          <aside>
              <button onClick={this.addNewEntry}></button>
          </aside>
      </div>
    )   
  }
    
}

export default App;
