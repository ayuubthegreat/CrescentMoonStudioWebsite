import Section from "../components/Section";
import titleGif from "../assets/cmsLogoAnimated.gif"
import kamJumpingUp from "../assets/kamJumpingUp.png"
import kamReadingABook from "../assets/kamReadingABook.png"
import ButtonBox from "../components/ButtonBox";
import GitspediaLogo from "../assets/gitspediaLogo.png";
import { BASE_DATA } from "../funcs/BASE_DATA";
import {HandCoins} from "lucide-react"; 
import './home.css';
export default function Home() {
    return (
        <>
        <title>Home | Crescent Moon Studio</title>
        <div className="home-page">
            <div className="home-title-section" style={{backgroundImage: "url(" + titleGif + ")", backgroundSize: "cover", backgroundPosition: "center"}}>
                <div className="home-title-section-header">
                   <h1>Welcome to {BASE_DATA.STUDIO_NAME}'s Website!</h1>
                <ButtonBox buttonTextArr={["Learn More", "Visit Gitspedia"]} linkArr={["/about", "https://www.gitspedia.org"]}/>
                </div>
                
            </div>
            <div className="home-text-section-parent ">
                <div className="home-text-section">
                    <h2>We Provide General IT Services</h2>
                    <p>Book a consultation with us to learn more about our services.</p>
                    <ButtonBox buttonTextArr={["Our Services", "Book Appointment"]} linkArr={["/services", "/book-appointment"]} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}/>
                </div>
            </div>
            <div className="home-split-section" style={{gridTemplateColumns: "0.5fr 1fr"}}>
                <img className="img" src={kamJumpingUp}/>
                <div className="home-split-section-text">
                    <h2>Come See Our Uniqueness</h2>
                    <p>We are the House of Variety. <br></br><strong>Want us to prove it? Come see our projects.</strong></p>
                    <ButtonBox buttonTextArr={["Our Projects"]} linkArr={["/finished-projects"]} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}></ButtonBox>
                </div>
            </div>
            <div className="home-split-section" style={{gridTemplateColumns: "1fr 0.7fr"}}>
                <div className="home-split-section-text">
                    <h2>Want to See When Your Favorite Project is Coming Out?</h2>
                    <p>No problem! <br></br>Just look at our schedule.</p>
                    <ButtonBox buttonTextArr={["Project Schedule"]} linkArr={["/projects-scheduled"]} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}></ButtonBox>
                </div> 
                <img className="img" src={kamReadingABook}/>
            </div>
            <div className="home-split-section " style={{gridTemplateColumns: "1fr 1fr"}}>
                <div className="home-split-section-text">
                    <h2>Do you want to enroll with us?</h2>
                    <ButtonBox buttonTextArr={["See Job Listings", "Submit Application"]} linkArr={["/job-listings", "/submit-job-application"]} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}/>
                </div>
                 <div className="home-split-section-text">
                    <h2>If not, that's okay too! Support our work through a donation.</h2>
                    <ButtonBox buttonTextArr={[(<><HandCoins /> Donate</>)]} linkArr={["/donate"]} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}/>
                </div>
            </div>
            <div className="home-text-section-parent">
                <div className="home-text-section">
                    <h2>Want To Read About All About Our Projects?</h2>
                    <p>Check out our website dedicated for information on our beloved projects!</p>
                    <img className="img gitspedia-logo" src={GitspediaLogo}/>
                    <ButtonBox buttonTextArr={["Visit Gitspedia"]} linkArr={["https://gitspedia.org"]}/>
                    
                </div>
            </div>
            
            
            
        </div>
        </>
    )
}