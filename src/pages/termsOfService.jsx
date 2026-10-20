import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function TermsOfService()  {
    return (
        <>
        <Section add_class="terms-of-service-page center">
            <Section add_class="terms-of-service-header" title="Download the terms of service here."></Section>
            <Section add_class="terms-of-service-content">
                <p style={{fontWeight: "bold"}}>Revised October 19th, 2026</p>
                <h1>(Readable) Terms of Service</h1>
                <h3>Must be signed when using any service of Crescent Moon Studio</h3>
                <div className="body-content">
                    <ol>
                    <li><strong>People eligible to use Crescent Moon Studio's services must pass the following criteria:</strong>
                    <ul>
                        {/* <li>You must not be a <Link to={"/zionist-def"}>Zionist.</Link> CONSEQUENCE ERROR: ERROR CODE ZIONIST <br></br></li> */}
                        <li>You must be <Link to={"/age-limit"}>old enough to access the service.</Link> CONSEQUENCE ERROR: ERROR CODE TOO-YOUNG</li>
                        <li> <Link to={"/license-codes"}>You must have the proper license to use the service.</Link> CONSEQUUENCE ERROR: ERROR CODE NO-LICENSE</li>
                    </ul>
                    </li>
                    <li><strong>What Happens When You Agree To The Terms</strong>
                    <ul>
                        <li>Your agreement to the Terms will be stored in a database, along with the date of which you agreed to the Terms.</li>
                        <li>You will be required to adhere to the Terms from then on. <i>If you disqualify from eligibility, 
                            please do not agree to the Terms beforehand. </i>
                            There are plenty of other websites and services that you can use instead of this one if you do not qualify.</li>
                    </ul>
                    </li>
                </ol>
                </div>
                <p>&copy; 2026 Crescent Moon Studio. All rights reserved.</p>
            </Section>
        </Section>
        
        </>
    )
}