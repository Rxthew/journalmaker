import React from 'react';
import './App.css';
import HeaderElement from './components/header'
import JournalEntry from './components/templateEntry'
import {ReactComponent as Add} from './journalicons/add.svg'
import {v4} from 'uuid'


type appState = Readonly<{
  elementList : React.ReactElement[];
}>

class App extends React.Component<{},appState> {
  constructor(props:{}){
    super(props);
    this.deleteEntry = this.deleteEntry.bind(this)
    this.addNewEntry = this.addNewEntry.bind(this)
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

  addNewEntry(){
    this.setState ( () => {
      return {
        elementList : [...this.state.elementList, <JournalEntry key={v4()} id={v4()} del={this.deleteEntry}/>]
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
              <button aria-label='Add new entry' onClick={this.addNewEntry}><Add/></button>
          </aside>
      </div>
    )   
  }
    
}

export default App;
