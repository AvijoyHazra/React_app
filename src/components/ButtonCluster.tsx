import Button from "./Button";
import "./ButtonCluster.css"
import ButtonR from "./ButtonR";
import {Link} from "react-router-dom";
export default function ButtonCluster() {
  return (
    <div className="btnclusterdiv1">
        <div className="divcluster0">
            <h3>Welcome to IVF Solution</h3>
        </div>
      <div className="divcluster1">
        <Link to="/login"><Button btntxt="LogIn"/></Link>
      </div>
      <div className="divcluster2">
        <Link to="/register"><ButtonR btntxt="Register" /></Link>
      </div>
    </div>
  );
}
