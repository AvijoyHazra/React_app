import Input from "./Input";
import ButtonR from "./ButtonR";
import "./Form.css";

export default function RegisterForm(){
    return(
        <div className="UserFormDiv">
            <form action="" className="UserForm">
                <Input title="Email Id" inptype="email"/>
                <Input title="Full Name" inptype="text" />
                <Input title="Phone Number" inptype="text" />
                <Input title="Password" inptype="password" />
                <Input title="Confirm Password" inptype="password" />
                <ButtonR btntxt="Register"/>
            </form>
        </div>
    );
}