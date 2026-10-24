import Section from "../components/Section"
import './about.css'
import cmsLogo from "../assets/cmsLogo.png"

export const AboutPage = () => {
    return (
        <>
        <Section add_class="about-title-section">
            <div className="center about-title-card">
                <h1>About</h1>
                <img src={cmsLogo} width={100}/>
            </div>
        </Section>
        </>
    )
}