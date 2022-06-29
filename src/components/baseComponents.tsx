import React, { ChangeEvent, useState } from 'react'


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

type readState = Readonly< JSX.Element
>

const ReadElement = function(props: readProps): JSX.Element{

    const newForm = function():void{
        const initForm = <FormElement content={props.currentValue} textCols={props.textCols} textRows={props.textRows}
        cancelAction={handleCancel} submitAction={handlePush}/>
        setCurrentForm(initForm)
        return
    }

    const [currentForm,setCurrentForm] = useState<readState>(
    <div>
        <props.element content={props.currentValue}/>
        <button onClick={newForm}>Edit</button>
    </div>
    )


    const handleCancel = function():void{
        const revertForm =  <ReadElement element={props.element} currentValue={props.currentValue} textCols={props.textCols} 
        textRows={props.textRows}/>
        setCurrentForm(revertForm)
        return

    }

    const handlePush = function(event:React.FormEvent,text: string):void{
        const revertForm =  <ReadElement element={props.element} currentValue={props.currentValue} textCols={props.textCols}
        textRows={props.textRows}/> 
        event.preventDefault()
        setCurrentForm(revertForm)
        return              
    }
    return(
        currentForm
    )
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

class NameElement extends React.Component<elementProps>{
    render(): React.ReactNode {
        return (
            <>
            <h1>{this.props.content}</h1>
            </>

        )
    }
}


export {ReadElement, ParagraphElement, TitleElement, NameElement} 

