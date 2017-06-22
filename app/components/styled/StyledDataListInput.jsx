import React from 'react'

import StyledInput from './StyledInput'
import generateRandomString from '../../helpers/randomString'

export default function dataListInput(props) {
    const {dataList, className, id = generateRandomString(8)} = props

    return (
        <div className = { className }>
            <StyledInput list = { id } />
            <datalist id = { id } >
                {
                    dataList.map((value, i) =>
                        <option value = { value } key = { i } />
                    )
                }
            </datalist>
        </div>
    )
}