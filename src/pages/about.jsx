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
    <div className="split-section">
        <div>
            <img></img>
        </div>
        <div>
            <p>At {BASE_DATA.STUDIO_NAME}, our values make up the core of not just our business model, 
                but also <i>our products and services.</i><br></br><strong>Our core values are three:</strong><ol><li><strong>Moral acceptance and inclusion</strong> <p>Acceptance and inclusion with moral boundaries.</p></li><li><strong>Weighing risks and reward</strong> <p>Our variety of different products reflect this mindset.</p></li><li><strong>Treating all employees fairly and with equity</strong> <p>Particularly, serving marginalized communities with their due respect.</p></li></ol>For more information about how our core values shape our company, look into <Link>our business model.</Link></p>
        </div>
    </div>
    </>), (
        <>
        <div>
            <p>We at {BASE_DATA.STUDIO_NAME} know about the difficulties and struggles that the economy is in right now, 
                and because of this our products and services are priced much lower compared to our competition. <br></br> Unfortunately, we can't just give everything away for free. That would be an insult to the craftmanship that goes into each and every product we make. However, we try and price products as low as possible while still making a profit. </p>
            <h3>Examples</h3>
            <p>Stay tuned for some examples---we're just getting started!</p>
        </div>
        </>
    )]
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