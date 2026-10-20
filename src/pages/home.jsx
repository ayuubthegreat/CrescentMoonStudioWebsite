import Section from "../components/Section";
import titleGif from "../assets/cms_logo_animation_for_gits10-17-2026_23-15-03.gif"
import kamJumpingUp from "../assets/kamJumpingUp.png"
import kamReadingABook from "../assets/kamReadingABook.png"
import ButtonBox from "../components/ButtonBox";
import GridSection from "../components/GridSection";
import { BASE_DATA } from "../funcs/BASE_DATA";
export default function Home() {
    return (
        <>
        <div className="page home-page">
            <Section background_img_src={titleGif} height={400} add_class={"title-section center"}>
                <div className="section-header">
                    <h1>Welcome to {BASE_DATA.STUDIO_NAME}'s Website!</h1>
                    <ButtonBox buttonTextArr={["Learn More"]} linkArr={["/about"]}/>
                </div>
            </Section>
            <Section add_class={"split-section right-split-section"} height={500}>
                <Section add_class="img-section">
                     <img className="img" src={kamJumpingUp}/>
                </Section>
                      <Section height={500} title="Come See Our Uniqueness" description={<><p>We are the House of Variety. <br></br><strong>Want us to prove it? Come see our projects.</strong></p>
                <ButtonBox buttonTextArr={["Our Projects"]} linkArr={["/projects"]}></ButtonBox>
                </>}></Section>
            </Section>
            <Section add_class={"split-section right-split-section"} height={600}>
                <Section height={600} title="Track When Our Projects Are Hot 'n Ready" description={<><p>Be a witness of the development process</p>
                <ButtonBox buttonTextArr={["Project Schedule"]} linkArr={["/projects/schedule"]}></ButtonBox>
                <p style={{color: "red", fontSize: 14}}>* Times might not be fully accurate.</p>
                </>}></Section>
                <Section add_class="img-section"> 
                    <img className="img" src={kamReadingABook} />
                </Section>
            </Section>
            <Section add_class={"center"} title="Or...Would You Like To Take It One Step Further?" description={<><p>Instead of simply witnessing from a far distance, you could be <i>with us</i> at the development table.</p><ButtonBox buttonTextArr={["Enroll", "Contact Us"]} linkArr={["/enroll", "/contact"]}/></>}>
                
            </Section>
            
            
        </div>
        </>
    )
}