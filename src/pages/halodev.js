import Home from '../components/Home/homepage';
import Footer from '../components/Common/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compete from "../components/compete/compete";
import CompeteDetail from '../components/compete/competeDetail/competeDetail';
import DashBoard from '../components/DashBoard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from '../components/Community/community';




function Halodev() {
  return (
    <div className="App">
      <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Compete />} path="/compete" />
          <Route element={<CompeteDetail />} path="/compete/detail" />
          <Route element={<Community />} path="/community" />
          <Route element={<DashBoard/>} path="/profile" />
          {/* <Home/> */}
        </Routes>
      </Router>
      <Footer />
    </div>
    </div>
  );
}

export default Halodev;
