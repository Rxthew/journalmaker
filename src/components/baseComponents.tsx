import React, { ChangeEvent } from 'react'

type baseProps = Readonly<{
    action() : void
}>

type baseState = Readonly<{
    content : string
}>


type formState = baseState & Readonly<{
    readContent : string
}>

class readElement extends React.Component{

}

class FormElement extends React.Component<baseProps, formState>{
    constructor(props:baseProps){
        super(props)

        this.handleContent = this.handleContent.bind(this)
        this.handleCancel = this.handleCancel.bind(this)

        this.state = {
            content: '',
            readContent : ''
        }
    }

    handleContent(event:ChangeEvent<HTMLInputElement>):void{
        this.setState( () => {
          return   {content : event.target.value}
        })

    }

    handleCancel():void{
        this.setState( () => {
            return  {content : this.state.readContent}
          })

    }        

    render(){
        return (
            <div>
                <button onClick={this.handleCancel}></button>
                <form>
                    <label htmlFor='pliable_input'></label>
                    <input type='text' value={this.state.content} onChange={this.handleContent} id='pliable_input' name='pliable_input'/>
                    <button type='submit' onSubmit={this.props.action}></button>
                </form>
            </div>
        )
    }


}


class Pliable extends React.Component {

}

export default Pliable
