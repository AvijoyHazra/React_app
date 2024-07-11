import footer from "./doctorR.png";
import "./Footer.css"
export default function Footer(){
    return (
        <div className="footerdiv">
            <img src={footer} alt="footer" className="footerimg"/>
        </div>
    );
}