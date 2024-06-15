import "./ProjectSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareParking, faChessBoard, faDatabase, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faSquareTwitter} from '@fortawesome/free-brands-svg-icons';
import { faImage, faCircleQuestion , faCalendarDays} from '@fortawesome/free-regular-svg-icons';
function ProjectSection(){
    function handleClick1(){
        window.location.href="https://github.com/ShivamGoelOSS/ImageEditor";
    }
    function handleClick2(){
        window.location.href="https://github.com/ShivamGoelOSS/QuizTime";
    }
    function handleClick3(){
        window.location.href="https://github.com/ShivamGoelOSS/EventManagementSystem";
    }
    function handleClick4(){
        window.location.href="https://github.com/ShivamGoelOSS/ParkingLot";
    }
    function handleClick5(){
        window.location.href="https://github.com/ShivamGoelOSS/TicTacToe";
    }
    function handleClick6(){
        window.location.href="https://github.com/ShivamGoelOSS/ScalerSocial";
    }
    function handleClick7(){
        window.location.href="https://github.com/ShivamGoelOSS/CartService";
    }
    function handleClick8(){
        window.location.href="https://github.com/ShivamGoelOSS/ImageEditor";
    }
    return <div id="Projects" className="ProjectSection">
        <p className="Projects-header">PROJECTS</p>
        <div className="Projects-main">
            <div className="row above">
                <div className="Project" onClick={handleClick1}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faImage} /></span>
                    <p className="Project-name image">Image Editor</p>
                </div>
                {/* <div className="single-profile-overlay" onClick={handleClick1}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faImage} /></span>
                    <p className="Project-name image">Image Editor</p>
                </div> */}
                <div className="Project" onClick={handleClick2}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faCircleQuestion} /></span>
                    <p className="Project-name quiz">Quiz App</p>
                </div>
                <div className="Project" onClick={handleClick3}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
                    <p className="Project-name event">Event Management System</p>
                </div>
                <div className="Project end" onClick={handleClick4}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faSquareParking} /></span>
                    <p className="Project-name parking">Parking Lot Management System</p>
                </div>
            </div>
            <div className="row">
                <div className="Project" onClick={handleClick5}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faChessBoard} /></span>
                    <p className="Project-name">Tic Tac Toe</p>
                </div>
                <div className="Project" onClick={handleClick6}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faSquareTwitter} /></span>
                    <p className="Project-name">Scaler Social</p>
                </div>
                <div className="Project" onClick={handleClick7}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faCartShopping} /></span>
                    <p className="Project-name">Cart Service</p>
                </div>
                <div className="Project end" onClick={handleClick8}>
                    <span className="Project-icon"><FontAwesomeIcon icon={faDatabase} /></span>
                    <p className="Project-name">Data Scraper</p>
                </div>
            </div>
        </div>
    </div>
}
export default ProjectSection;