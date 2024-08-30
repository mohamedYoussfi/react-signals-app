import {Link} from "react-router-dom";
import {useState} from "react";

export default function NavBar(){
    const [currentRoute, setCurrentRoute] = useState("");
    return (
        <nav className="p-3">
            <ul className="nav nav-pills">
                <li>
                    <Link
                    onClick={()=>setCurrentRoute("/home")}
                        className={currentRoute=="/home"
                            ?"btn btn-primary p-2 m-1":
                            "btn btn-outline-primary p-2 m-1"
                    }
                          to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link
                        onClick={()=>setCurrentRoute("/products")}
                        className={currentRoute=="/products"
                            ?"btn btn-primary p-2 m-1":
                            "btn btn-outline-primary p-2 m-1"}
                        to={"/products"}>Products</Link>
                </li>
            </ul>
        </nav>
    );
}