import React from 'react'
import PropTypes from 'prop-types'
import Member from './Member'

function Members(props) {
    const members = [
        {uid:"asd",name:"Guy",nickname:"Guy"},
        {uid:"abc",name:"Dangkamol",nickname:"Cheng"}
    ]
    const memberlist = members.map((member) => <Member {...member} key={member.uid}></Member> )
        
    
    return (
        <div>
            {/* {onsole.log("m")} */}
            {memberlist}
        </div>
    )
}

Members.propTypes = {
    cname: PropTypes.string
}

export default Members

