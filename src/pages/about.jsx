import Section from "../components/Section"
import './about.css'
import cmsLogo from "../assets/cmsLogo.png"

export const AboutPage = () => {
    const secTitles = ["Our Personality"]
    const secDescs = [(<>
    <p>Our personality is</p>
    </>)]
    const onClick = (id) => {
        const appropriateElement = document.getElementById(id);
        if (appropriateElement != null) {
            appropriateElement.classList.toggle("hidden");
        }
    }
    return (
        <>
             <div className="center about-title-card">
                <h1>About</h1>
                <img src={cmsLogo} width={100}/>
            </div>
            <div className="center">
                <Section add_class="about-content-title" title={<>We are <i>many</i> things...</>} description={<><p>But if we could describe our studio in one word, it would be: </p> <h2>unique.</h2></>}/>
                <Section add_class="about-content-parent">
                     {secTitles.map((val, i) => {
                    return (
                        <>
                        <div>
                            <h2 onClick={onClick(secTitles[i])}>{val}</h2>
                            <div id={secTitles[i]} className="about-content-card hidden">
                                {secDescs[i]}
                            </div>
                        </div>
                        </>
                    )
                })}
                </Section>
               
            </div>
           
            
        </>
    )
}