import GridSection from "../components/GridSection";
import Section from "../components/Section";
import gitspediaLogo from "../assets/gitspediaLogo.png"
import kamJumpingUp from "../assets/kamJumpingUp.png"
import { Link } from "react-router-dom";


export function ServicesPage() {
    
     const cmsProjects = ["Gitspedia", "Muftipedia"]
    const cmsProjDescriptions = []
    const cmsProjImageLinks = [gitspediaLogo, kamJumpingUp]
    const cmsProjGitspediaLinks = ["https://www.gitspedia.org/articles/cmsbrqb8200006xvlrn9mqmmc"]
   
    const onClick = (id) => {
        for (let i = 0; i < cmsProjects.length; i++) {
            const element = document.getElementById(cmsProjects[i]);
                if (element !== null) {
                    const display_textbox = element.getElementsByClassName("display-textbox")[0];
                    const title_textbox = element.getElementsByClassName("title-textbox")[0];
                    if (cmsProjects[i] === id) {
                        display_textbox.classList.toggle("hidden");
                    title_textbox.classList.toggle("hidden");
                    } else {
                        display_textbox.classList.add("hidden");
                    title_textbox.classList.remove("hidden");
                    }
                    
                } else {
                    console.log(`Cannot find element with ID ${cmsProjects[i]}`);
                }
        }
    }
   

    return (
        <>
        <Section height={100} add_class="center" title="Click on project cards to reveal their descriptions."/>
        <GridSection>
            {cmsProjects.map((val, i) => {
                return (
                    <>
                     <Section height={200} onClick={onClick} id={val} add_class="cms-display-item-card" background_img_style={`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${cmsProjImageLinks[i] ?? gitspediaLogo})`} >
                <div className="title-textbox">
                    <h2>{val}</h2>
                </div>
                <div className="display-textbox hidden">
                    <p>{cmsProjDescriptions[i] ?? "No description found."}</p>
                    <a href={`${cmsProjGitspediaLinks[i] ?? "https://www.gitspedia.org"}`} rel="noopener noreferrer">Learn More (takes you to Gitspedia)</a>
                </div>
            </Section>
                    </>
                )
               
            })}
            
        </GridSection>
        </>
    )
}

export function ProjectsPage() {
    return (
        <>
        <GridSection>

        </GridSection>
        </>
    )
}