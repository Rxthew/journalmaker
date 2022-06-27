import {ReadElement, NameElement} from './baseComponents'
import React from 'react'


class HeaderElement extends React.Component {
    render(): React.ReactNode {
        return (
            <header>
                <ReadElement currentValue='Jane Smith' element={NameElement} textRows={10} textCols={10} />
            </header>
        )
    }
}

export default HeaderElement