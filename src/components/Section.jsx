import "./components.css"


export default function Section({ title, description, children, add_class, height, onClick = (() => {}) }) {
  return (
    <section onClick={onClick} className={`section ${add_class ? add_class : ""}`} style={{ height: height ? height : "auto" }}>
       <section className="section-header">
         <h2>{title}</h2>
         <h4>{description}</h4>
       </section>
      {children}
    </section>
  )
}