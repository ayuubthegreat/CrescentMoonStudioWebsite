import GridSection from "../components/GridSection";
import Section from "../components/Section";
import gitspediaLogo from "../assets/gitspediaLogo.png"
import kamJumpingUp from "../assets/kamJumpingUp.png"
import { data, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./services.css"


export function ServicesPage() {

     const {projects} = useSelector((state) => state.projects);
    const loadedProjects = projects ?? [];
    const getStageOfProduction = (percentage = -1)  => {
        if (percentage < 0) return ["white", "Planning Phase"]
        if (percentage >= 0 && percentage < 25) return ["yellow", "Pre-production"];
        if (percentage >= 25 && percentage < 50) return ["green", "In Development"];
        if (percentage >= 50 && percentage < 75) return ["blue", "In Late Development"];
        if (percentage >= 75 && percentage < 100) return ["purple", "Post-production"];
        if (percentage === 100) return ["coral", "Has Released!"];
        return ["red", "Unknown"]
    }
   
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
            {loadedProjects.length > 0 && ([...loadedProjects].sort((a, b) => new Date(a.release_date) - new Date(b.release_date)).map((val) => {
                const productionPhase = getStageOfProduction(Math.min(Math.max(val.percentage, -2), 100));
                const beganProduction = val.percentage >= 0;
                const releaseDate = new Date(val.release_date);
                return (
                    <>
                    <Section background_img_style={`url(${val.relative_image_link})`}>
                        <div className="project-card">
                          <p className="project-card-percentage" style={{backgroundColor: `${productionPhase[0]}`}}>{productionPhase[1]} | {beganProduction ? Math.min(val.percentage, 100) + "%" : "Not Began Yet"}</p>
                          <div className="project-card-tags-parent">
                                {val.tags.split(',').map((tag) => {
                            return (
                                <>
                                <p className="project-card-tag">{tag[0].toUpperCase() + tag.substring(1)}</p>
                                </>
                            )
                          })}
                          </div>
                          
                        <h1>{val.title}</h1>
                        <h3>Release date: {releaseDate.toLocaleDateString(undefined, {year: "numeric", month: "long", day: "numeric"})}</h3>  
                        <Link to={val.gitspedia_href}>Go to Article</Link>
                        </div>
                    </Section>
                    </>
                )
            }))}
            
        </GridSection>
        {loadedProjects.length === 0 && (<>
            <p className="center">No projects are currently available here. Check back later!</p>
            </>)}
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