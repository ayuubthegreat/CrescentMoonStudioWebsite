import ButtonBox from "./ButtonBox";


export default function Footer() {
    return (
        <>
        <nav className="footer">
            <div className="split-section">
                <ButtonBox buttonTextArr={["Terms of Service (readable!)"]} linkArr={["/terms"]}/>
            </div>
            <p>&copy; 2026 Crescent Moon Studio. All rights reserved.</p>
        </nav>
        </>
    )
}