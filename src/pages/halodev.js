import Home from '../components/Home/homepage';
import Footer from '../components/Common/footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Compete from "../components/compete/compete";
import CompeteDetail from '../components/compete/competeDetail/competeDetail';
import DashBoard from '../components/DashBoard/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from '../components/Community/community';
import Projects from '../components/projects/projects';
import ProjectDetail from '../components/projects/projectDetail';
import styles from './halodev.module.css';
import clsx from 'clsx';
import Learn from '../components/Learn/learn';
import Jobs from '../components/Jobs/jobs';
import JobDetail from '../components/Jobs/jobDetails/jobDetail';
import LearnDetail from '../components/Learn/learnDetails/LearnDetails';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Halodev() {
  return (
    <div className={clsx(styles.body)}>
      <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Compete />} path="/compete" />
          <Route element={<CompeteDetail />} path="/compete/detail" />
          <Route element={<Community />} path="/community" />
          <Route element={<DashBoard/>} path="/profile" />
          <Route element ={<Projects/>} path = "/projects" />
          <Route element ={<ProjectDetail/>} path = "/projects/detail" />
          <Route element ={<Learn/>} path = "/learn" />
          <Route element ={<Jobs/>} path = "/Jobs" />
          <Route element ={<JobDetail/>} path = "/Jobs/jobdetail" />
          <Route element ={<LearnDetail/>} path = "/learn/learndetail" />

          {/* <Home/> */}
        </Routes>
      </Router>
      <ToastContainer />
      <Footer />
    </div>
    </div>
  );
}

export default Halodev;
