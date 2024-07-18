import Input from "./Input";
import Button from "./Button";
import "./Form.css";
import axios from "axios";

export default function RegisterForm(){
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
        
        <div className="UserFormDiv">
            <form className="UserForm" action="/register">
                <Input title="Email Id" inptype="email" inpplace="Enter Email Id"/>
                <Input title="Full Name" inptype="text" inpplace="Enter Full Name"/>
                <Input title="Phone Number" inptype="text" inpplace="Enter Phone Number"/>
                <Input title="Password" inptype="password" inpplace="Enter Password"/>
                <Input title="Confirm Password" inptype="password" inpplace="Re-enter Password"/>
                <Button btntxt="Register" btnclass="btn-success" btnclick={handle}/>
            </form>
        </div>
    );
}