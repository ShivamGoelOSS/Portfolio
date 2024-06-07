import "./WelcomeSection.css";
import welcomeBanner from "../../assets/user-background.jpg"
function welcomeSection(){
    return <div id="Home" className="welcomeSection">
        <div className="welcome-banner"></div>
        <div className="welcome-overlay"></div>
        <div className="welcome-greet">
            <p>HI<span id="comma"> ,</span> I AM</p>
            <p>SHIVAM</p>
            <p>GOEL<span id="dot"> .</span></p>
        </div>
        <p id="welcome-role">UI/UX DESIGNER AND WEB DEVELOPER</p>
        <button id="btn-resume">Download Resume</button>
    </div>
}
export default welcomeSection;