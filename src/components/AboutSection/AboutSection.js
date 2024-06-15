import "./AboutSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare, faFigma } from '@fortawesome/free-brands-svg-icons';
import boy_portrait from "../../assets/shivam-portrait.jpeg";
function AboutSection(){
    function handleClick(){
        window.location.href="https://github.com/ShivamGoelOSS";
    }
    return <div id="About" className="aboutSection">
        <p className="about">ABOUT ME</p>
        <div className="about-side">
            <div className="about-left">
                <h3 className="intro-overview">Hello there! My name is Shivam Goel, and I'm currently a student at the esteemed Scaler School of Technology in Bangalore, pursuing my passion for becoming a full stack developer.</h3>
                <p className="intro-detail">Driven by a deep interest in both front-end and back-end development, I am actively seeking internship opportunities where I can apply my skills in real-world scenarios, further honing my abilities. My coursework has equipped me with a solid foundation in languages such as JavaScript, Python, and Java, alongside frameworks like React and Spring Boot.  I am eager to contribute to innovative projects and immerse myself in the dynamic environment of development.</p>
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
                        <p>devshivam.vercel.app</p>
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