import {ReadElement, NameElement} from './baseComponents'
import React from 'react'
import {ReactComponent as Print} from '../journalicons/print.svg'


class HeaderElement extends React.Component {
    render(): React.ReactNode {
        return (
            <header>
                <button onClick={function():void{window.print()}}><Print/></button>
                <ReadElement currentValue='Jane Smith' element={NameElement} />
            </header>
        )
    }
}

export default HeaderElement