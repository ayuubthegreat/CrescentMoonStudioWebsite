import Section from "../components/Section";
import kamConfused from "../assets/kamConfused.png"
import "./pageNotFound.css"


export default function PageNotFound() {
return (
    <>
    <title>Error-404 | Page Not Found | Crescent Moon Studio</title>
    <div className="page-not-found-content" style={{backgroundImage: `url(${kamConfused})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="page-not-found-text-content">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, we could not find your page. We are still developing this website. Your requested page might be added later.</p>  
        </div>
    </div>
    </>
)
}