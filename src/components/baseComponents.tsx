import React, { ChangeEvent, useState } from 'react'
import {ReactComponent as Edit} from '../journalicons/edit.svg'



type elementProps = Readonly<{
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
    element(props:elementProps) : JSX.Element

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
        <button onClick={newForm}><Edit /></button>
    </div>
    )


    const handleCancel = function():void{
        const revertForm =  <ReadElement element={props.element} currentValue={props.currentValue} textCols={props.textCols} 
        textRows={props.textRows}/>
        setCurrentForm(revertForm)
        return

    }

    const handlePush = function(event:React.FormEvent,text: string):void{
        const revertForm =  <ReadElement element={props.element} currentValue={text} textCols={props.textCols}
        textRows={props.textRows}/> 
        event.preventDefault()
        setCurrentForm(revertForm)
        return              
    }
    return(
        currentForm
    )
}


const FormElement = function(props:formProps):JSX.Element{

    const handleContent = function(event:ChangeEvent<HTMLTextAreaElement>):void{
        setFormContent(event.target.value)
        return
    }

    const [formContent,setFormContent] = useState<string>(props.content)

    return (
        <div>
            <button onClick={props.cancelAction}>Cancel</button>
            <form id='pliable_form' onSubmit={(e : React.FormEvent) => {props.submitAction(e,formContent)}}>
                <textarea value={formContent} onChange={handleContent} id='pliable_form' name='pliable_form' rows={props.textRows} cols={props.textCols}></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )

}

const ParagraphElement = function (props:elementProps):JSX.Element{
    return(
        <>
        <p>{props.content}</p>
        </>
    )
    
}

const NameElement = function(props:elementProps):JSX.Element{
    return(
        <>
        <h1>{props.content}</h1>
        </>
    )

}

const TitleElement= function(props:elementProps):JSX.Element{
    return(
        <>
        <h2>{props.content}</h2>
        </>
    )

}


export {ReadElement, ParagraphElement, TitleElement, NameElement} 

