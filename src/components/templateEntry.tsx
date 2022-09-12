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
                    <ReadElement element={TitleElement} currentValue='Title of Entry'/>
                    </dt>
                    <dt>
                    <ReadElement element={ParagraphElement} currentValue='Date:'/>
                    </dt>
                    <dd>
                    <ReadElement element={ParagraphElement} currentValue='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                     Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '/>
                    </dd>
                </dl>
                <button onClick={this.props.del} id={this.props.id} aria-label='Delete entry'><Delete /></button>
            </div>
        )
    }
}



export default JournalEntry