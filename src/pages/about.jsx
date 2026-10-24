import Section from "../components/Section"
import './about.css'
import cmsLogo from "../assets/cmsLogo.png"

export const AboutPage = () => {
    return (
        <>
             <div className="center about-title-card">
                <h1>About</h1>
                <img src={cmsLogo} width={100}/>
            </div>
            <div className="center">
                <Section add_class="about-content" title={<>We are <i>many</i> things...</>} description={<><p>But if we could describe our studio in one word, it would be: </p> <h2>unique.</h2></>}/>
            </div>
           
            
        </>
    )
}