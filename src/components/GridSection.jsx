import "./components.css"


export default function GridSection({maxWidth= 100, children}) {
    return (
        <div className="grid-section" style={{gridTemplateColumns: `repeat(5, minmax(0, ${maxWidth}px))`}}>
            {children}
        </div>
    );
}