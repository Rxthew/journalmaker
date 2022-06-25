import React from 'react'
import ReadElement from './baseComponents'

type entryProps = {del() : void}

class journalEntry extends React.Component<entryProps>{
    render(): React.ReactNode {
        return(
            <div>
                <dl>
                    <dt>
                    <ReadElement currentValue='' textCols={20} textRows={2}/>
                    </dt>
                    <dt>
                    <ReadElement currentValue='Date:' textCols={20} textRows={2}/>
                    </dt>
                    <dd>
                    <ReadElement currentValue=''textCols={20} textRows={20}/>
                    </dd>
                </dl>
                <button onClick={this.props.del}>Delete</button>
            </div>
        )
    }
}

export default journalEntry