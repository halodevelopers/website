import Home from '../components/Home/homepage';
import Footer from '../components/Common/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compete from "../components/compete/compete";
import styles from './halodev.module.css';
import CompeteDetail from '../components/compete/competeDetail/competeDetail';



function Halodev() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Compete />} path="/compete" />
          <Route element={<CompeteDetail />} path="/compete/detail" />
          {/* <Home/> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default Halodev;
