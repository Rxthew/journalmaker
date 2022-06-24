import React from 'react'

type baseProps = Readonly<{
    action() : void
}>

type baseState = Readonly<{
    content : string
}>

type formProps = baseProps & Readonly<{
      push(): void,
      cancel(): void,
      labelfor: string,
      requiredprop: string,
      itemid : string,
}>

class readElement extends React.Component{

}

class FormElement extends React.Component<formProps, baseState>{
    constructor(props:formProps){
        super(props)

        this.handleContent.bind(this)
        this.handlePush.bind(this)
        this.handleCancel.bind(this)

        this.state = {
            content: ''
        }
    }

    handleContent(){

    }

    handlePush(){

    }

    handleCancel(){

    }        

    render(){
        return (
            <div>
                <button></button>
                <form>
                    <label></label>
                    <input />
                    <button></button>
                </form>
            </div>
        )
    }


}


class Pliable extends React.Component {

}

export default Pliable