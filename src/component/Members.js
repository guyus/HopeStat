import React from 'react'
import PropTypes from 'prop-types'
import Member from './Member'

function Members(props) {
    const members = [
        {uid:"asd",name:"Guy",nickname:"Guy"},
        {uid:"abc",name:"Dangkamol",nickname:"Cheng"}
    ]
    const memberlist = members.map((member) => <Member key={member.uid} mname={member.name} {...member}></Member> )
        
    
    return (
        <div>
            {console.log("m")}
            {memberlist}
        </div>
    )
}

Members.propTypes = {
    cname: PropTypes.string
}

export default Members

