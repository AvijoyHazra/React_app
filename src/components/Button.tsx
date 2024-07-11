import "./Button.css";
type propstype={
      btntxt:string
}

export default function Button(props:propstype){
    return(
            <div className="registerbtndiv">
                <button type="submit" className="btn btn-primary registerbtn">{props.btntxt}</button>
            </div>
        
    );
}