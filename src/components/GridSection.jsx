import "./components.css"


export default function GridSection({maxWidth= 100, children}) {
    return (
        <div className="grid-section" style={{ alignItems: "center", gridTemplateColumns: `repeat(auto-fit, minmax(0, ${maxWidth}px))`}}>
            {children}
        </div>
    );
}