import Input from "./Input";
import Button from "./Button";
import "./Form.css";
import axios from "axios";


export default function LoginForm(){ 
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
        <div className="UserFormDiv1" >
            <form className="UserForm" method="POST" action="/login">
            {/* <form action="">  */}
                <Input title="Email Id/Mobile Number" inptype="email" inpplace="Enter Email Id/Mobile Number"/>
                <Input title="Password" inptype="password" inpplace="Enter Password"/>
                <Button btntxt="Login" btnclass="btn-primary" btnclick={handle}/>
            </form>
        </div>
    );
}