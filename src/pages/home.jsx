import Section from "../components/Section";
import titleGif from "../assets/cms_logo_animation_for_gits10-17-2026_23-15-03.gif"
import kamJumpingUp from "../assets/kamJumpingUp.png"
import kamReadingABook from "../assets/kamReadingABook.png"
import ButtonBox from "../components/ButtonBox";
import GridSection from "../components/GridSection";
export default function Home() {
    return (
        <>
        <div className="page home-page">
            <Section background_img_src={titleGif} height={400} add_class={"title-section center"}>
                <div className="section-header">
                    <h1>Welcome to Crescent Moon Studio's Website!</h1>
                    <ButtonBox buttonTextArr={["Learn More"]} linkArr={["/about"]}/>
                </div>
            </Section>
            <Section add_class={"split-section full"} height={500}>
                <Section>
                     <img className="img" src={kamJumpingUp}/>
                </Section>
                      <Section height={500} title="Come See Our Uniqueness" description={<><p>We are the House of Variety. <br></br><strong>Want us to prove it? Come see our projects.</strong></p>
                <ButtonBox buttonTextArr={["Our Projects"]} linkArr={["/projects"]}></ButtonBox>
                </>}></Section>
            </Section>
            <Section add_class={"split-section full"} height={600}>
                <Section height={600} title="Come See Our Uniqueness" description={<><p>We are the House of Variety. <br></br><strong>Want us to prove it? Come see our projects.</strong></p>
                <ButtonBox buttonTextArr={["Project Schedule"]} linkArr={["/projects/schedule"]}></ButtonBox>
                <p style={{fontSize: 14}}>* Times might not be fully accurate.</p>
                </>}></Section>
                <Section>
                    <img className="img" src={kamReadingABook} />
                </Section>
            </Section>
            
            
        </div>
        </>
    )
}