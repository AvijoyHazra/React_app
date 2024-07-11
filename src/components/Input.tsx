type propstype ={
    title:string;
    inptype:string
}
export default function Input(props:propstype){
    return (
        <div className="mb-3">
            <label className="form-label">{props.title}</label>
            <input type={props.inptype} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
    );
}