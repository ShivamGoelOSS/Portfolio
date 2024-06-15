import './App.css';
import Navbar from './components/Navbar/Navbar';
import WelcomeSection from './components/WelcomeSection/WelcomeSection';
import Typing from './components/Typing';
import AboutSection from './components/AboutSection/AboutSection';
import EducationSection from './components/EducationSection/EducationSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
// import Tile from './components/Tile';
// import Banner from './components/Banner';
// import Progress from './components/Progress/Progress';
// import HomePage from;
// import AboutPage from;
// import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function App() {
  var p=0;
  return (
    <div className="App">
        <Navbar/>
        <WelcomeSection/>
        {/* <Typing
          text={[
            "Hello, welcome to the typing effect demo!",
            "Enjoy exploring this cool effect!",
            "This is an example of typing and deleting text.",
          ]}
          typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
        /> */}
        <AboutSection/>
        <EducationSection/>
        <ProjectSection/>
        <SkillsSection/>
        {/* <Tile header={"Class is going on"}
        subHeader={"Everyone is making a title"}
        img={"https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"}
        text={"Approved training partner under the scheme for market led investments under your service at all times."}
        link={"https://www.scaler.com/"}
        linkText={"scaler"}
        position={"img-right"}
        bgColor={"red"}
        />
        <Banner/>
        {setInterval(function (p){
          <Progress percentage={p}/>
        }, 100)}
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </Router> */}
    </div>
  );
}

export default App;
