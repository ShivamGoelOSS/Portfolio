import "./AboutSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare, faFigma } from '@fortawesome/free-brands-svg-icons';
import boy_portrait from "../../assets/boy-portrait.jpg";
function AboutSection(){
    function handleClick(){
        window.location.href="https://github.com/ShivamGoelOSS";
    }
    return <div id="About" className="aboutSection">
        <p className="about">ABOUT ME</p>
        <div className="about-side">
            <div className="about-left">
                <h3 className="intro-overview">I am a Professional UI/UX Designer and Web developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.</h3>
                <p className="intro-detail">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                <div className="contact">
                    <div>
                        <h3>Phone</h3>
                        <p>XXXXXXXXXX</p>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p>shivam@info.com</p>
                    </div>
                    <div>
                        <h3>Website</h3>
                        <p>www.portfolio.com</p>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <img src={boy_portrait} alt="user-portrait"/>
                <div className="user-portrait-overlay"></div>
                <div className="icon-background"></div>
                <div className="social-icons">
                    <span><FontAwesomeIcon icon={faFacebookSquare} /></span>
                    <span onClick={handleClick}><FontAwesomeIcon icon={faGithubSquare} /></span>
                    <span><FontAwesomeIcon icon={faLinkedin} /></span>
                    <span><FontAwesomeIcon icon={faTwitterSquare}/></span>
                    <span><FontAwesomeIcon icon={faFigma} /></span>
                </div>
            </div>
        </div>
    </div>
}
export default AboutSection;