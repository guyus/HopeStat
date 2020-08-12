import React from 'react'
import TA from './TA'
export default function Member(props) {
    return (
        <div>
            {props.mname}
            <TA uid = {props.uid} />
        </div>
    )
}
