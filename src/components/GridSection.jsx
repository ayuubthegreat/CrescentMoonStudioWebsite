import "./components.css"


export default function GridSection({children}) {
    return (
        <div className="grid-section" style={{display: "grid", gridTemplateColumns: `repeat(2, minmax(0, 1fr))`}}>
            {children}
        </div>
    );
}