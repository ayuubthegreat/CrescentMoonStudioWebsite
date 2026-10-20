import { useNavigate } from "react-router-dom"
import ButtonBox from "./ButtonBox"
import "./components.css"
import Section from "./Section"
import cmsLogo from "../assets/cmsLogo.png"
import { useState } from "react"

export default function Navbar() {
    const nav = useNavigate();
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <>
        <nav className="navbar">
            <Section children={<>
                <img className="title-img" onClick={() => {nav('/')}} src={cmsLogo} width={200}></img>
                </>}></Section>
            <Section add_class="navbar-large-display" children={<>
                <ButtonBox buttonTextArr={["About Us", "Projects", "Services"]} linkArr={["/about", "/projects", "/services"]}></ButtonBox>
                </>}></Section>
            <div className="navbar-small-display">
                <button className="" onClick={(e) => {
                    setIsEnabled(true);
                }}>=</button>
                <div className="navbar-small-display-menu" style={{display: (isEnabled ? "block" : "none")}}>
                    <ButtonBox buttonTextArr={["About Us", "Projects", "Services"]} linkArr={["/about", "/projects", "/services"]} onClick={() => {setIsEnabled(false)}}></ButtonBox>
                </div>
            </div>
        </nav>
        </>
    )
}