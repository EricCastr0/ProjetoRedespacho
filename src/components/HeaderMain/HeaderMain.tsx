//import {Link} from "react-router-dom"
import "./headerMain.css"
import logo from "../../img/logo.png"

function HeaderMain() {
    return (
        <header>
            {/* <div className="container">  */}
                <div className="logo">
                    <img src={logo} alt="logosle"/>
                </div>
            {/* </div> */}
        </header>

    )

}

export default HeaderMain