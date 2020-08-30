import React from 'react'
import Ta from './Ta'

export default function Member(props) {
    
    return (
        <div>
            {props.Name} {props.Surname} ({props.Nick_Name})
            <Ta member_id = {props.User_id} />
        </div>
    )
}
