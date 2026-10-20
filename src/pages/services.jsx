import GridSection from "../components/GridSection";
import Section from "../components/Section";

export function ServicesPage() {
    return (
        <>
        <GridSection>
            <Section onClick={(id) => {
                const element = document.getElementById(id);
                if (element !== null) {
                    const display_textbox = element.getElementsByClassName("display-textbox")[0]
                }
            }} add_class="cms-display-item-card">
                <h2>Gitspedia</h2>
                <div id="1" className="display-textbox hidden">
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