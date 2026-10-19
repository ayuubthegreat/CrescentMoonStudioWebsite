import { BASE_DATA } from "../funcs/BASE_DATA";
import ButtonBox from "./ButtonBox";


export default function Footer() {
    return (
        <>
        <nav className="footer">
            <div className="split-section">
                <ButtonBox buttonTextArr={["Terms of Service (readable!)"]} linkArr={["/terms"]}/>
            </div>
            <p>&copy; 2026 {BASE_DATA.STUDIO_NAME}. All rights reserved.</p>
        </nav>
        </>
    )
}