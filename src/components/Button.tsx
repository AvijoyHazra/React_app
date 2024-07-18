import "./Button.css";
import axios from "axios";
import React from 'react';
type propstype={
      btntxt:string;
      btnclass:string;
      btnclick?:()=>void
}

export default function Button(props:propstype){
    let s:string=`btn ${props.btnclass} registerbtn`;
    // eslint-disable-next-line
    const handle=()=>{
        const url = 'http://192.168.0.102:8000/api/users/signup/';

        axios.get(url)
            .then(response => {
                console.log('Data received:', response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
        });
    }
    return(
            <div className="registerbtndiv">
                <button type="submit" className={s} onClick={props.btnclick}>{props.btntxt}</button>
                {/* <button type="submit"  onClick={props.btnclick}>{props.btntxt}</button> */}
            </div>
        
    );
}