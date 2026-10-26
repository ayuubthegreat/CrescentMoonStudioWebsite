import GridSection from "../components/GridSection";
import Section from "../components/Section";
import gitspediaLogo from "../assets/gitspediaLogo.png"
import kamJumpingUp from "../assets/kamJumpingUp.png"
import { data, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./products.css"
import { url } from "zod";
import { useState } from "react";


export function ScheduledProductsPage() {

     const {projects} = useSelector((state) => state.projects);
    const loadedProjects = projects ?? [];
    const getStageOfProduction = (percentage = -1)  => {
        if (percentage < 0) return ["white", "Planning Phase"]
        if (percentage >= 0 && percentage < 25) return ["orange", "Pre-production"];
        if (percentage >= 25 && percentage < 50) return ["lightgreen", "In Development"];
        if (percentage >= 50 && percentage < 75) return ["lightblue", "In Late Development"];
        if (percentage >= 75 && percentage < 100) return ["purple", "Post-production"];
        if (percentage === 100) return ["coral", "Has Released!"];
        return ["red", "Unknown"]
    }
    return (
        <>
        <div className="page-header">
            <h1>Scheduled Projects</h1>
            <p>This is where you can find our projects, hard at work at our studio.</p>
        </div>
        <GridSection maxWidth={300}>
            {loadedProjects.length > 0 && ([...loadedProjects].sort((a, b) => new Date(a.release_date) - new Date(b.release_date)).filter((val) => val.percentage < 100).map((val) => {
                const productionPhase = getStageOfProduction(Math.min(Math.max(val.percentage, -2), 100));
                const beganProduction = val.percentage >= 0;
                const releaseDate = new Date(val.release_date);
                const images = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const img = images[val.relative_image_link];
                return (
                    <>
                    <Section background_img_style={`url(${img})`}>
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
                        <h6>{val.shortDesc}</h6>
                        <h3>Planned release date: {releaseDate.toLocaleDateString(undefined, {year: "numeric", month: "long", day: "numeric"})}</h3>  
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

export function ProductsPage() {
   const {projects} = useSelector((state) => state.projects);
  
   const getTags = function(proj) {
    return proj.tags.split(',');
   }
   const [filteredTag, setFilteredTag] = useState(null);
   const finishedProjects = [...projects].filter((proj) => proj.percentage === 100 && (filteredTag !== null ? getTags(proj).includes(filteredTag) : true)); 
   const allTags = function() {
    const tags = [];
    for (let i = 0; i < finishedProjects.length; i++) {
        const projTags = getTags(finishedProjects[i]);
        for (let i = 0; i < projTags.length; i++) {
            if (!tags.includes(projTags[i])) {
                tags.push(projTags[i]);
            }
        }
    }
    return tags;
   }
    return (
        <>
         <div className="page-header">
            <h1>Products</h1>
            <p>This is where you can find the products that we have released, and where to find them.</p>
        </div>
        <div className="tag-container">
          {filteredTag === null ? (<>
            {allTags().map((val) => {
                return (
                    <>
                    <button onClick={() => {setFilteredTag(val);}} className="project-card-tag">{val}</button>
                    </>
                )
            })}
          </>) : (<>
            <p className="project-card-tag filtered">{filteredTag}</p>
            <button onClick={() => {setFilteredTag(null);}}>Clear Filter</button>
          </>)}
        
        </div>
        <GridSection maxWidth={300}>
            {finishedProjects.length > 0 && finishedProjects.map((val) => {
                const images = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const img = images[val.relative_image_link];
                return (
                    <>
                    <Section background_img_style={`url(${img})`} add_class="finished-project-card">
                        <p className="finished-project-card-version-text">Version {val.version_num}</p>
                        {val.version_percentage > 0 && (<>
                        <p>Next version (Version {val.version_num + 0.1}) in development: {val.version_percentage}% complete</p>
                        </>)}
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
                        <h3>{val.shortDesc}</h3>
                        <Link to={val.gitspedia_href}>Go to Article</Link>
                    </Section>
                    </>
                )
            })}
        </GridSection>
        {finishedProjects.length === 0 && (<>
        <p className="center">No projects have been finished....come back later!</p>
        </>)}
        </>
    )
}