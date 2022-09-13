import React, { ChangeEvent, useState } from 'react'
import {ReactComponent as Edit} from '../journalicons/edit.svg'



type elementProps = Readonly<{
    content : string
}>


type formProps = elementProps & Readonly<{
    submitAction : (event:React.FormEvent,text: string) => void,
    cancelAction(): void 
    
}>


type readProps = Readonly<{
    currentValue : string
    element(props:elementProps) : JSX.Element

}>

type readState = Readonly< JSX.Element
>

const ReadElement = function(props: readProps): JSX.Element{

    const newForm = function():void{
        const initForm = <FormElement content={props.currentValue} cancelAction={handleCancel} submitAction={handlePush}/>
        setCurrentForm(initForm)
        return
    }

    const [currentForm,setCurrentForm] = useState<readState>(
    <div>
        <props.element content={props.currentValue}/>
        <button aria-label='Edit entry component' onClick={newForm}><Edit /></button>
    </div>
    )


    const handleCancel = function():void{
        const revertForm =  <ReadElement element={props.element} currentValue={props.currentValue}/>
        setCurrentForm(revertForm)
        return

    }

    const handlePush = function(event:React.FormEvent,text: string):void{
        const revertForm =  <ReadElement element={props.element} currentValue={text}/> 
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

    const modalTabTrap = function(event: React.FocusEvent<HTMLFormElement, Element>):void{
        const parent = event.currentTarget
        if(parent.contains(event.relatedTarget)){
            return
        }
        const cancel = Array.from(parent.children)[0] as HTMLButtonElement
        setTimeout(() => cancel.focus(),0)

    }

    const [formContent,setFormContent] = useState<string>(props.content)

    return (
        <div>
            <div className='overlay'></div>
            <form id='pliable_form' onBlur={(event) => modalTabTrap(event)} onSubmit={(e : React.FormEvent) => {props.submitAction(e,formContent)}}>
                <button aria-label='Cancel' className='cancel' onClick={props.cancelAction}>X</button>
                <textarea value={formContent} onChange={handleContent} id='pliable_form' name='pliable_form' autoFocus={true} rows={5}></textarea>
                <button className='submit' type='submit'>Submit</button>
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

