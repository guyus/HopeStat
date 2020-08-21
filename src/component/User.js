import React,{useContext} from 'react';
import {StateContext} from '../contexts';
const User = () => {
    const {state,dispatch} = useContext(StateContext)
    const {user} = state

    React.useEffect(
        dispatch({type:'LOGIN'})
        ,[]);
    return (
        <div>
            {user}
        </div>
    );
}

export default User;
