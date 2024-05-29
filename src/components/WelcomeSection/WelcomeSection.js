import "./WelcomeSection.css";
import welcomeBanner from "../../assets/welcome-banner.jpg"
function welcomeSection(){
    return <div className="welcomeSection">
        <div className="welcome-banner"></div>
        <div class="welcome-overlay"></div>
        <div class="welcome-greet">
            <p>HI<span id="comma"> ,</span> I AM</p>
            <p>BROWNY</p>
            <p>STAR<span id="dot"> .</span></p>
        </div>
        <p id="welcome-role">UI/UX DESIGNER AND WEB DEVELOPER</p>
        <button id="btn-resume">Download Resume</button>
    </div>
}
export default welcomeSection;