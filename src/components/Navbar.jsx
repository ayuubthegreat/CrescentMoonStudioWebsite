import { useNavigate } from "react-router-dom"
import ButtonBox from "./ButtonBox"
import "./components.css"
import Section from "./Section"
import cmsLogo from "../assets/cmsLogo.png"

export default function Navbar() {
    const nav = useNavigate();
    return (
        <>
        <nav className="navbar">
            <Section children={<>
                <img className="title-img" onClick={() => {nav('/')}} src={cmsLogo} width={200}></img>
                </>}></Section>
            <Section children={<>
                <ButtonBox buttonTextArr={["About Us", "Projects", "Services"]} linkArr={["/about", "/projects", "/services"]}></ButtonBox>
                </>}></Section>
        </nav>
        </>
    )
}