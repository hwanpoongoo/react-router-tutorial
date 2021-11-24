import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./home";
import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

//v5
/*
function App() {
  return (
    <div>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
    </div>
  );
}
*/

//v6
/*
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
*/


function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
                 
        <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong"> gildong 프로필</Link>
        </li> 
        
         <li>
          <Link to="/profiles"> 프로필즈</Link>
        </li>

        <li>
          <Link to="/history"> history 예제</Link>
        </li>

      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route path="*" element={<div><p>페이지를 찾을수없습니다</p></div>} />
      </Routes>
    </div>
  );
}

export default App;
