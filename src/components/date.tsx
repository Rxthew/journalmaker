import React, { ReactElement } from 'react';

type dateState = {
    date : string

}

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

