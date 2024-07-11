import "./Button.css";
type propstype={
      btntxt:string
}

export default function ButtonR(props:propstype){
    return(
            <div className="registerbtndiv">
                <button type="submit" className="btn btn-success registerbtn">{props.btntxt}</button>
            </div>
        
    );
}