import { BASE_DATA } from "../funcs/BASE_DATA";
import ButtonBox from "./ButtonBox";
import aiLessLogo from "../assets/ambiventrousLogov110-24-2026_10-06-39.gif"
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
        <nav className="footer">
            <div className="split-section">
                <div>
                    <img src={aiLessLogo} width={150}/>
                    <p>Crescent Moon Studio has a <i>general</i> no-AI policy. <br></br> <Link to={'/no-ai-exceptions'}>See exceptions.</Link></p>
                </div>
                <ButtonBox buttonTextArr={["Terms of Service (readable!)"]} linkArr={["/terms"]}/>
            </div>
            <p>&copy; 2026 {BASE_DATA.STUDIO_NAME}. All rights reserved.</p>
        </nav>
        </>
    )
}