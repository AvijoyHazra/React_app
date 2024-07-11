import Input from "./Input";
import Button from "./Button";
import "./Form.css";

export default function LoginForm(){
    return(
        <div className="UserFormDiv1">
            <form action="" className="UserForm">
                <Input title="Email Id" inptype="email"/>
                <Input title="Password" inptype="password" />
                <Button btntxt="Login"/>
            </form>
        </div>
    );
}