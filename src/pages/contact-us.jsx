import GridSection from "../components/GridSection"
import Section from "../components/Section"


export const ContactUsPage = () => {
    return (
        <>
        <Section title="Contact Information" description="You want to contact us? Great! Here's our information: ">
            <GridSection maxWidth={300}>
                <Section title="Phone Number"></Section>
                <Section title="Phone Number"></Section>
                <Section title="Phone Number"></Section>
            </GridSection>
        </Section>
        </>
    )
}