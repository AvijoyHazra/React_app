import "./Header.css";

type propsHeader={
    title:string;

}
export default function Header(props:propsHeader){
    return(
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary navheader" >
        <div className="container-fluid header">
          <a className="navbar-brand brandname" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Dashboard</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul> 
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <i className="fa-solid fa-bell fa-xl iconbell" style={{color: "#FFD43B",}}></i>
            <i className="fa-solid fa-user fa-xl iconuser"></i>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
            {/* <i className="fa-solid fa-bell fa-xl iconbell" style={{color: "#FFD43B",}}></i>
            <i className="fa-solid fa-user fa-xl iconuser"></i> */}
          </div>
        </div>
      </nav>



    );
}