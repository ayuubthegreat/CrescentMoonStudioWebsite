import GridSection from "../components/GridSection";
import Section from "../components/Section";
import kamJumpingUp from "../assets/kamJumpingUp.png"
import kamReadingABook from "../assets/kamReadingABook.png"


export function ServicesPage() {
    const onClick = (id) => {
                const element = document.getElementById(id);
                if (element !== null) {
                    const display_textbox = element.getElementsByClassName("display-textbox")[0];
                    const title_textbox = element.getElementsByClassName("title-textbox")[0];
                    display_textbox.classList.toggle("hidden");
                    title_textbox.classList.toggle("hidden");
                } else {
                    console.log(`Cannot find element with ID ${id}`);
                }
            }
    return (
        <>
        <GridSection>
            <Section onClick={onClick} id="gitspedia" add_class="cms-display-item-card" background_img_style={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background_img_src})`} >
                <div className="title-textbox">
                    <h2>Gitspedia</h2>
                </div>
                <div className="display-textbox hidden">
                    <p>A</p>
                </div>
            </Section>
        </GridSection>
        </>
    )
}

export function ProjectsPage() {
    return (
        <>
        <GridSection>

        </GridSection>
        </>
    )
}