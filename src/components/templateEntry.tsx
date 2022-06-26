import React from 'react'
import {ReadElement, ParagraphElement, TitleElement} from './baseComponents'

type entryProps = {del() : void}

class JournalEntry extends React.Component<entryProps>{
    render(): React.ReactNode {
        return(
            <div>
                <dl>
                    <dt>
                    <ReadElement element={TitleElement} currentValue='' textCols={20} textRows={2}/>
                    </dt>
                    <dt>
                    <ReadElement element={ParagraphElement} currentValue='Date:' textCols={20} textRows={2}/>
                    </dt>
                    <dd>
                    <ReadElement element={ParagraphElement} currentValue=''textCols={20} textRows={20}/>
                    </dd>
                </dl>
                <button onClick={this.props.del}>Delete</button>
            </div>
        )
    }
}

export default JournalEntry