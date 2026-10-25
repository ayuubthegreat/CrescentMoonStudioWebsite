import Section from "../components/Section"
import './about.css'
import cmsLogo from "../assets/cmsLogo.png"
import { BASE_DATA } from "../funcs/BASE_DATA"
import { Link } from "react-router-dom"

export const AboutPage = () => {
    const secTitles = ["Our Personality", "Our Values", "Our Pricing Strategy", "Our Product Variety", "Our Head"]
    const secDescs = [(<>
    <div className="split-section">
         <div>
            <img src={cmsLogo}/>
        </div>
        <div>
            <p>{BASE_DATA.STUDIO_NAME} is not just some average business.<br></br> 
        We are <i>focused and detail-orientated</i>, like most businesses, but above all qualities, we <i><strong>prioritize originality, our wonderful employees, and our customers,</strong></i> in an out-of-left-field way. <br></br><strong><i>Some might call us strange, but we call ourselves bold.</i></strong></p>
        </div>
    </div>
    </>), (<>
    <p>Our values are</p>
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
            <div>
                <Section add_class="about-content-title" title={<>We are <i>many</i> things...</>} description={<><p>But if we could describe our studio in one word, it would be: </p> <h2>unique.</h2> <p>But if you want to learn more about what makes {BASE_DATA.STUDIO_NAME} what it is, then please continue reading. <br></br> <i>Click on each of the headers below.</i><br></br>Or if you want to go into even more detail, <Link to={"https:\\www.gitspedia.org"}>check out the Gitspedia article about the studio.</Link></p></>}/>
                <Section add_class="about-content-parent">
                     {secTitles.map((val, i) => {
                    return (
                        <>
                        <div>
                            <div className="about-content-card-title" onClick={() => {onClick(val)}}>
                                <h2>{val}</h2>
                            </div>
                            <div id={val} className="about-content-card hidden">
                                {secDescs[i] ?? (<><p className="error-text">No description found.</p></>)} 
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