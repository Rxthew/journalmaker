import React, { ChangeEvent } from 'react'

type formProps = Readonly<{
    action() : void
}>

type formState =  Readonly<{
    content : string
    readContent : string
}>

type readProps =  Readonly<{
    elementForm : React.ReactElement

}>

type pliableProps = formProps & readProps

type pliableState = formState


class ReadElement extends React.Component<readProps>{
    render(): React.ReactNode {
        return (    
            this.props.elementForm
        )
    }
    
}

class FormElement extends React.Component<formProps, formState>{
    constructor(props:formProps){
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


class Pliable extends React.Component<pliableProps,pliableState> {
            

}

export default Pliable
