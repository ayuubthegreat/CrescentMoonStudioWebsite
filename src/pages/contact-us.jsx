import { PhoneCallIcon } from "lucide-react"
import GridSection from "../components/GridSection"
import Section from "../components/Section"
import { BASE_DATA } from "../funcs/BASE_DATA"
import ButtonBox from "../components/ButtonBox"
import kamCalling from "../assets/kamCalling.png"
import kamTypingOnAComputer from "../assets/kamTypingOnComputer.png"
import { useEffect } from "react"

export const ContactUsPage = () => {
    return (
        <>
        <Section title="Contact Information" description="You want to contact us? Great! Here's our information: ">
                        <Section background_img_style={`url(${kamCalling})`} title="Phone Number" description={<><p><i>Note: Office hours are Mon-Fri, 8 AM-6PM CDT (Minnesota Time). You may call at any time, although it is not guaranteed you will be responded to after-hours.</i></p><a href={`tel:+17633932782`}><PhoneCallIcon></PhoneCallIcon> Call {BASE_DATA.STUDIO_NAME}</a></>}></Section>
                    
                
                <Section background_img_style={`url(${kamTypingOnAComputer})`} title="E-mail" description={<><p><i>Note: Every e-mail will be responded to between 1-3 business days depending on how busy we are.</i></p><a href="mailto:yusufayuub01@gmail.com">
  Email us
</a></>}></Section>
                    
            <Section title="We always appreciate when our customers contact us" description={<><p>Every e-mail and call is responded to and given attention, and our no-AI policy ensures that a human will be on the other line.</p><ButtonBox linkArr={["/no-ai-policy", "/about"]} buttonTextArr={["No AI Policy", "About Us"]}/></>}/>
        </Section>
        </>
    )
}