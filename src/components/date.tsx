import React from 'react';

type dateState = Readonly<{
    date : string

}>

class Date extends React.Component<{},dateState>{
    constructor(props:{}){
        super(props)
        this.state = {date : ''}
    }

    render(){
        return (
            <div>
                <p>{this.state.date}</p>
            </div>
        )
        
    }
}

export default Date

