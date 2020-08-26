import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import Member from './Member'
import { useRealmApp } from "../realm/RealmApp"

function Members(props) {
    /* const members = [
        {uid:"asd",name:"Guy",nickname:"Guy"},
        {uid:"abc",name:"Dangkamol",nickname:"Cheng"}] */
    const [members, setmembers] = useState([]) 
    const {user} = useRealmApp();
    useEffect(()=>{
        async function getMembers() {
            setmembers(await user.functions.membersList(props.cname))
        }getMembers()
    },[props.cname, user.functions])
    console.log(members)
    const memberlist = members.map((member) => <Member {...member} key={member.User_id}></Member> )
    
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

