import { useNavigate } from "react-router-dom"
import ButtonBox from "./ButtonBox"
import "./components.css"
import Section from "./Section"
import cmsLogo from "../assets/cmsLogo.png"
import { useState } from "react"

export default function Navbar() {
    const nav = useNavigate();
    const [isEnabled, setIsEnabled] = useState(false);
    const navbarButtonsNames = ["About Us", "Products", "Schedule"]
    const navbarButtonsLinks = ["/about", "/projects", "/projects/schedule"]
    return (
        <>
        <nav className="navbar">
            <Section children={<>
                <img className="title-img" onClick={() => {nav('/')}} src={cmsLogo} width={200}></img>
                </>}></Section>
            <Section add_class="navbar-large-display" children={<>
                <ButtonBox buttonTextArr={navbarButtonsNames} linkArr={navbarButtonsLinks}></ButtonBox>
                </>}></Section>
            <div className="navbar-small-display">
                <button className="navbar-small-display-button" onClick={(e) => {
                    setIsEnabled(!isEnabled);
                }}>=</button>
                <div className="navbar-small-display-menu" style={{display: (isEnabled ? "block" : "none")}}>
                    <ButtonBox buttonTextArr={navbarButtonsNames} linkArr={navbarButtonsLinks} onClick={() => {setIsEnabled(false)}}></ButtonBox>
                </div>
            </div>
        </nav>
        </>
    )
}