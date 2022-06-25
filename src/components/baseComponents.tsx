import React, { ChangeEvent } from 'react'

type formState = Readonly<{
    content : string

}>

type formProps = Readonly<{
    inputValue : string,
    submitAction : (event:React.FormEvent,text: string) => void,
    cancelAction(): void 
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
        this.handleCancel = this.handleCancel.bind(this)
        this.state = {
            currentForm : <div>
                            <p>{this.props.currentValue}</p>
                            <button onClick={this.newForm}>Edit</button>
                          </div>
        }
        
    }

    handleCancel():void{
        this.setState (
            () => {
                return {
                    currentForm: <ReadElement currentValue={this.props.currentValue}/>
                }
            }
        )
    }
        

    newForm():void{
        this.setState (
            () => {
             return {currentForm : <FormElement inputValue={this.props.currentValue} cancelAction={this.handleCancel} submitAction={this.handlePush}/>}
            }
        )
    }

    handlePush(event:React.FormEvent,text: string):void{
        event.preventDefault()
        this.setState(
            () => {
                return {currentForm : <ReadElement currentValue={text}/>}
            })
    }

    render(): React.ReactNode {
        return (    
              this.state.currentForm
        )
    }
    
}

class FormElement extends React.Component<formProps, formState>{
    constructor(props:formProps){
        super(props)

        this.handleContent = this.handleContent.bind(this)

        this.state = {
            content: this.props.inputValue,
        }
    }

    handleContent(event:ChangeEvent<HTMLInputElement>):void{
        this.setState( () => {
          return   {content : event.target.value}
        })

    }


    render(){
        return (
            <div>
                <button onClick={this.props.cancelAction}>Cancel</button>
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
