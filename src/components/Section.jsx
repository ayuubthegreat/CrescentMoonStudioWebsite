import "./components.css"


export default function Section({ title = "", description = "", children, add_class = "", id = "", height, onClick = ((id) => {}), background_img_src = "" }) {
  return (
    <section id={id} onClick={onClick(id)} className={`section ${add_class ? add_class : ""}`} style={{ height: height ? height : "inherit", backgroundImage: `url(${background_img_src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
       <section style={{display: (title === "" && description === "" ? "none" : "")}} className="section-header">
         <h2 className="titleHeader">{title}</h2>
         <h4 className="titleDesc">{description}</h4>
       </section>
      {children}
    </section>
  )
}