import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './css/footer.module.css';
import clsx from 'clsx';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarkEmailUnreadSharpIcon from '@mui/icons-material/MarkEmailUnreadSharp';

class Footer extends Component {
  state = {}
  render() {
    return (
      <div className="d-flex flex-column">
        <div className={clsx("bg-white", styles.main)}>
          <div className={clsx("container-fluid py-5", styles.container)}>
            <div className="row py-4">
              <div className={clsx("col-lg-3 col-md-3 mb-4 mb-lg-0", styles.logo)}>
                <strong className={('font-italic text-muted halodevs')}>Halodevs</strong>

                {/* <ul className="list-inline mt-4">
                    <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fa fa-instagram"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fa fa-pinterest"></i></a></li>
                    <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fa fa-vimeo"></i></a></li>
                  </ul> */}
              </div>
              <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
                <strong className="text font-weight-bold mb-4 ">Contact</strong>
                <div className="text py-4">
                  <p>Halodevs Africa | Uganda</p>
                  <p>Mbarara, Uganda</p>
                  <p>1410 Mbarara University</p>
                  <p>UG 256 772 820 840</p>
                  <p>info@halodevs.tech</p>
                </div>

              </div>
              <div className="col-lg-4 col-md-4  mb-lg-0">
                <div className="text-end font-weight-bold mb-4">
                  <strong >Online and Social Channals</strong>
                </div>
                <div className={clsx("text-end", styles.social)}>
                  <a href="#" className="text-muted"><TwitterIcon className={styles.icon} /></a>
                  <a href="#" className="text-muted"><GitHubIcon className={styles.icon} /></a>
                  <a href="#" className="text-muted"><FacebookIcon className={styles.icon} /></a>
                  <a href="#" className="text-muted"><LinkedInIcon className={styles.icon} /></a>
                  <a href="#" className="text-muted"><MarkEmailUnreadSharpIcon className={styles.icon} /></a>

                </div>
                <div className="text-end py-2">
                  <p>Source code available under the MIT license. Content on this site, made by Open Knowledge Foundation, is licensed under a Creative Commons Attribution 4.0 International License. Refer to our attributions page for attributions of other work on the site.</p>
                </div>
              </div>

            </div>
          </div>
          <div className={clsx("container-fluid ", styles.container)}>
          <div className="row">
            <div className={("col-md-12", styles.nav)}>
              <div className={clsx("text-end", styles.nav)}>
              <strong><a href="" className="text">Compete of Use </a></strong>
              <strong><a href="" className="text">Learn  </a></strong>
              <strong><a href="" className="text">Communiy </a></strong>
              <strong><a href="" className="text">Projects  </a></strong>
              <strong><a href="" className="text">Jobs </a></strong>
              </div>
            </div>
            <div className="col-md-13 py-4">

              <div className={clsx("text-muted ", styles.terms)}>
                <a href="" className="text"><p>Terms of Use </p></a>
                <a href="" className="text"><p>Privacy Policy </p></a>
                <a href="" className="text"><p>Rules and Guidelines</p></a>
              </div>
            </div>
          </div>
          </div>
          <div className="bg-light py-4">
            <div className="container text-center">
              <p className="text-muted mb-0 py-2">© 2022 Halodevs All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;
