import Image from "next/image";
import logo from "../../icons/logo_transparent.png"
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Image
                    src={logo}
                    alt="logo"/>
            </div>
            <div className="navbar">
                <Navbar/>
            </div>
        </div>
    )
}