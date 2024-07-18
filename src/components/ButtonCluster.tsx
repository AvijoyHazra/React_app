import Button from "./Button";
import "./ButtonCluster.css"
import {Link} from "react-router-dom";
import axios from "axios";

export default function ButtonCluster() {
//   const handle=()=>{
//     const url = 'http://192.168.0.108:8000/api/users/signup/';

//     axios.get(url)
//         .then(response => {
//             console.log('Data received:', response.data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//     });
// }
  return (
    <div className="btnclusterdiv1">
        <div className="divcluster0">
            <h3>Welcome to IVF Solution</h3>
        </div>
      <div className="divcluster1">
        <Link to="/login"><Button btntxt="LogIn" btnclass="btn-primary"/></Link>
      </div>
      <div className="divcluster2">
        <Link to="/register"><Button btntxt="Register" btnclass="btn-success"/></Link>
      </div>
    </div>
  );
}
