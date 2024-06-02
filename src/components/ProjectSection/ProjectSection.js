import "./ProjectSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareParking, faChessBoard, faDatabase, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { faSquareTwitter} from '@fortawesome/free-brands-svg-icons';
import { faImage, faCircleQuestion , faCalendarDays} from '@fortawesome/free-regular-svg-icons';
function ProjectSection(){
    return <div id="Projects" className="ProjectSection">
        <p className="Projects-header">PROJECTS</p>
        <div className="Projects-main">
            <div className="row above">
                <div className="Project">
                    <span className="Project-icon"><FontAwesomeIcon icon={faImage} /></span>
                    <p className="Project-name">Image Editor</p>
                </div>
                <div className="Project">
                    <span className="Project-icon"><FontAwesomeIcon icon={faCircleQuestion} /></span>
                    <p className="Project-name">Quiz App</p>
                </div>
                <div className="Project">
                    <span className="Project-icon"><FontAwesomeIcon icon={faCalendarDays} /></span>
                    <p className="Project-name">Event Management System</p>
                </div>
                <div className="Project end">
                    <span className="Project-icon"><FontAwesomeIcon icon={faSquareParking} /></span>
                    <p className="Project-name">Parking Lot Management System</p>
                </div>
            </div>
            <div className="row">
                <div className="Project">
                    <span className="Project-icon"><FontAwesomeIcon icon={faChessBoard} /></span>
                    <p className="Project-name">Tic Tac Toe</p>
                </div>
                <div className="Project">
                    <span className="Project-icon"><FontAwesomeIcon icon={faSquareTwitter} /></span>
                    <p className="Project-name">Scaler Social</p>
                </div>
                <div className="Project">
                    <span className="Project-icon"><FontAwesomeIcon icon={faCartShopping} /></span>
                    <p className="Project-name">Cart Service</p>
                </div>
                <div className="Project end">
                    <span className="Project-icon"><FontAwesomeIcon icon={faDatabase} /></span>
                    <p className="Project-name">Data Scraper</p>
                </div>
            </div>
        </div>
    </div>
}
export default ProjectSection;