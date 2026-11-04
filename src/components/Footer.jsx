import { BASE_DATA } from "../funcs/BASE_DATA";
import ButtonBox from "./ButtonBox";
import aiLessLogo from "../assets/ambiventrousLogov110-24-2026_10-06-39.gif"
import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
    return (
        <>
        <nav className="footer">
            <div className="footer-content">
                <div className="footer-no-ai-section">
                    <img src={aiLessLogo} width={150}/>
                    <p>{BASE_DATA.STUDIO_NAME} has a <i>general</i> no-AI policy. <br></br> <Link className="simple-decoration" to={'/no-ai'} onClick={() => {window.scrollTo({top: 0})}}>See exceptions.</Link></p>
                </div>
                <ButtonBox buttonTextArr={["Terms of Service (readable!)"]} linkArr={["/terms"]} onClick={() => {window.scrollTo({top: 0})}}/>
            </div>
            <p>&copy; 2026 {BASE_DATA.STUDIO_NAME}. All rights reserved.</p>
        </nav>
        </>
    )
}