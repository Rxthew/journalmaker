import React, { ChangeEvent } from 'react'

type elementProps = Readonly<{
    content : string
}>

type formState = Readonly<{
    content : string

}>

type formProps = elementProps & Readonly<{
    textRows: number,
    textCols: number,
    submitAction : (event:React.FormEvent,text: string) => void,
    cancelAction(): void 
    
}>


type readProps = Readonly<{
    textRows : number,
    textCols : number,
    currentValue : string
    element : React.ComponentClass<elementProps>

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
                          <this.props.element content={this.props.currentValue}/>
                          <p>{this.props.currentValue}</p>
                          <button onClick={this.newForm}>Edit</button>
                          </div>
                            
        }
        
    }
    
    handleCancel():void{
        this.setState (
            () => {
                return {
                    currentForm: <ReadElement element={this.props.element} currentValue={this.props.currentValue} textCols={this.props.textCols} textRows={this.props.textRows}/>
                }
            }
        )
    }
        

    newForm():void{
        this.setState (
            () => {
             return {currentForm : <FormElement content={this.props.currentValue} textCols={this.props.textCols} textRows={this.props.textRows}
             cancelAction={this.handleCancel} submitAction={this.handlePush}/>}
            }
        )
    }

    handlePush(event:React.FormEvent,text: string):void{
        event.preventDefault()
        this.setState(
            () => {
                return {currentForm : <ReadElement element={this.props.element} currentValue={text} textCols={this.props.textCols} textRows={this.props.textRows}/>}
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
            content: this.props.content,
        }
    }

    handleContent(event:ChangeEvent<HTMLTextAreaElement>):void{
        this.setState( () => {
          return   {content : event.target.value}
        })

    }


    render(){
        return (
            <div>
                <button onClick={this.props.cancelAction}>Cancel</button>
                <form id='pliable_form' onSubmit={(e : React.FormEvent) => {this.props.submitAction(e,this.state.content)}}>
                    <textarea value={this.state.content} onChange={this.handleContent} id='pliable_form' name='pliable_form' rows={this.props.textRows} cols={this.props.textCols}></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }


}

class ParagraphElement extends React.Component<elementProps>{
    render(): React.ReactNode {
        return (
        <>
        <p>{this.props.content}</p>
        </>
        )
    }
}

class TitleElement extends React.Component<elementProps>{
    render(): React.ReactNode {
        return (
            <>
            <h2>{this.props.content}</h2>
            </>

        )
    }
}


export {ReadElement, ParagraphElement, TitleElement} 

