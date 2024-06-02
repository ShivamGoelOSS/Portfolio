import "./EducationSection.css";
function EducationSection(){
    return <div id="Education" className="EducationSection">
        <p className="Education-header">EDUCATION</p>
        <div className="Education-main">
            <div className="courses">
                <div className="course">
                    <div className="course-text">
                        <div className="course-year">
                            2023 - 2026
                        </div>
                        <div className="course-name">
                            Bachelor of Computer Science
                        </div>
                    </div>
                    <div className="course-border">
                        <div className="course-dot"></div>
                        <div className="course-line"></div>
                    </div>
                </div>
                <div className="course">
                    <div className="course-text">
                        <div className="course-year">
                            2026 - 2027
                        </div>
                        <div className="course-name">
                            Master of Computer Science
                        </div>
                    </div>
                    <div className="course-border">
                        <div className="course-dot"></div>
                        <div className="course-line"></div>
                    </div>
                </div>
                <div className="course">
                    <div className="course-text">
                        <div className="course-year">
                            2023 - 2027
                        </div>
                        <div className="course-name">
                            CS Undergraduate Program
                        </div>
                    </div>
                    <div className="course-border">
                        <div className="course-dot"></div>
                        <div className="course-line end"></div>
                    </div>
                </div>
            </div>
            <div className="courses-detail">
                <div className="course-detail">
                    <p className="university-name">
                        Birla Institute of Technology & Science
                    </p>
                    <p className="university-location">
                        Pilani, Rajasthan, India
                    </p>
                    <p className="university-detail">
                        BITS Pilani, is one of India's premier technical and science universities. Established in 1964, BITS Pilani has consistently ranked among the top engineering institutions in India.
                    </p>
                </div>
                <div className="course-detail">
                    <p className="university-name">
                        Birla Institute of Technology & Science
                    </p>
                    <p className="university-location">
                        Pilani, Rajasthan, India
                    </p>
                    <p className="university-detail">
                    BITS Pilani, is one of India's premier technical and science universities. Established in 1964, BITS Pilani has consistently ranked among the top engineering institutions in India.
                    </p>
                </div>
                <div className="course-detail">
                    <p className="university-name">
                        Scaler School of Technology
                    </p>
                    <p className="university-location">
                        Bengaluru, Karnataka, India
                    </p>
                    <p className="university-detail">
                        Scaler School of Technology is a leading institution dedicated to providing world-class education and training in the field of computer science and technology.
                    </p>
                </div>
            </div>
        </div>
    </div>
}
export default EducationSection;