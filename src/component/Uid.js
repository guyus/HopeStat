import React,{useContext,useEffect} from 'react';
import {StateContext} from '../contexts';

const Uid = () => {
    const {state,dispatch} = useContext(StateContext)
    const {user} = state

    useEffect(
        ()=>{
            function login() {
                //dispatch({type:'REGISTER',uid:'988'})
                console.log('user')
            }
            login()
        }
    ,[]);
    return (
        <div>
            {null}
        </div>
    );
}

export default Uid;
