import React from 'react'
import Ta from './Ta'

export default function Member(props) {
    
    return (
        <div>
            {props.name} {props.nickname}
            <Ta uid = {props.uid} />
        </div>
    )
}
