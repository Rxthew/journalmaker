import React, { ChangeEvent } from 'react'

type formState = Readonly<{
    content : string

}>

type formProps = Readonly<{
    inputValue : string,
    submitAction : (event:React.FormEvent,text: string) => void,
}>

type readProps = Readonly<{
    currentValue : string

}>

type readState = Readonly<{
    currentForm : React.ReactElement
}>


class ReadElement extends React.Component<readProps,readState>{
    constructor(props:readProps){
        super(props)
        this.newForm = this.newForm.bind(this)
        this.handlePush = this.handlePush.bind(this)
        this.state = {
            currentForm : <p>{this.props.currentValue}</p>
        }
        
    }

    newForm():void{
        this.setState (
            () => {
             return {currentForm : <FormElement inputValue={this.props.currentValue} submitAction={this.handlePush}/>}
            }
        )
    }

    handlePush(event:React.FormEvent,text: string):void{
        event.preventDefault()
        this.setState(
            () => {
                return {currentForm : <p>{text}</p>}
            })
    }

    render(): React.ReactNode {
        return (    
            <div>
                {this.state.currentForm}
                <button onClick={this.newForm}>Edit</button>
            </div>
        )
    }
    
}

class FormElement extends React.Component<formProps, formState>{
    constructor(props:formProps){
        super(props)

        this.handleContent = this.handleContent.bind(this)
        this.handleCancel = this.handleCancel.bind(this)

        this.state = {
            content: this.props.inputValue,
        }
    }

    handleContent(event:ChangeEvent<HTMLInputElement>):void{
        this.setState( () => {
          return   {content : event.target.value}
        })

    }

    handleCancel():void{
        this.setState( () => {
            return  {content : this.props.inputValue}
          })

    }

    render(){
        return (
            <div>
                <button onClick={this.handleCancel}>Cancel</button>
                <form  onSubmit={(e : React.FormEvent) => {this.props.submitAction(e,this.state.content)}}>
                    <label htmlFor='pliable_input'></label>
                    <input type='text' value={this.state.content} onChange={this.handleContent} id='pliable_input' name='pliable_input'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }


}


export default ReadElement
