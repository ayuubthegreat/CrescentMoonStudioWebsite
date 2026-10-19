import Section from "../components/Section";
import kamConfused from "../assets/kamConfused.png"



export default function PageNotFound() {
return (
    <>
    <Section add_class={"split-section right-split-section" } height={600}>
        <Section>
               <img className="img" src={kamConfused}/>
        </Section>
          
         <Section title="Page not found." description="Sorry, we could not find your page. We are still developing this website. Your requested page might be added later."/>
    </Section>
    </>
)
}