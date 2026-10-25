import GridSection from "../components/GridSection";
import Section from "../components/Section";
import gitspediaLogo from "../assets/gitspediaLogo.png"
import kamJumpingUp from "../assets/kamJumpingUp.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function ServicesPage() {

     const {projects} = useSelector((state) => state.projects);
    const loadedProjects = projects ?? [];
   
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
        <GridSection maxWidth={300}>
            {loadedProjects.map((val, i) => {
                return (
                    <>
                    <Section background_img_style={`url(${val.relative_image_link})`} title={val.title} description={val.shortDesc}/>
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