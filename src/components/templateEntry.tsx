import React, { MouseEventHandler } from 'react'
import {ReadElement, ParagraphElement, TitleElement} from './baseComponents'
import {ReactComponent as Delete} from '../journalicons/delete.svg'


type entryProps = {
    del:MouseEventHandler, 
    id : string,
    key: string

}

class JournalEntry extends React.Component<entryProps>{
    render(): React.ReactNode {
        return(
            <div>
                <dl>
                    <dt>
                    <ReadElement element={TitleElement} currentValue=''/>
                    </dt>
                    <dt>
                    <ReadElement element={ParagraphElement} currentValue='Date:'/>
                    </dt>
                    <dd>
                    <ReadElement element={ParagraphElement} currentValue=''/>
                    </dd>
                </dl>
                <button onClick={this.props.del} id={this.props.id}><Delete /></button>
            </div>
        )
    }
} 

export default JournalEntry