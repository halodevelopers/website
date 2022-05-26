import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import './css/project.css';



class ProjectCarousel extends Component {
    state = {}
    render() {
        return (
  
        <section id="projects-carousel" className="">
          <div className="carousel slick-initialized slick-slider slick-dotted"><button className="slick-prev slick-arrow" aria-label="Previous" type="button" style={{display: 'block'}}>Previous</button>
            <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: '36882px', transform: 'translate3d(-5464px, 0px, 0px)'}}><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={-1} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-14.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Driving data education through custom competitions
                        </h4>
                        <h6>
                          Partners: Microsoft
                        </h6>
                        <p className="lead">
                        </p><p>Developed online, white-label data science competitions for students to synthesize their learnings and test their skills on applied challenges. Each capstone features a real-world dataset that focuses on an important issue in the social sector.</p>
                        <p className="subdued">Approaches include: Private data challenge, regression analysis, predictive modeling, data science education</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={0} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/chimp-tile-image.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Automating wildlife identification for research and conservation
                        </h4>
                        <h6>
                          Partners: Max Planck Institute for Evolutionary Anthropology, Arcus Foundation
                        </h6>
                        <p className="lead">
                        </p><p>Detected wildlife in video footage—automatically and at scale—by running a global algorithm development challenge and building an open source application with the winning solution (Project Zamba).</p>
                        <p className="subdued">Approaches include: Deep learning, computer vision, transfer learning, data science competition, crowdsourced data annotations, open source software</p>
                        <p><a href="https://zamba.drivendata.org/" className="button" rel="external" tabIndex={-1}>Project Zamba</a> <a href="/blog/camera-trap-wildlife-winners/" className="button" rel="external" tabIndex={-1}>blog</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={1} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/background-5.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Analyzing satellite images to serve smallholder farmers
                        </h4>
                        <h6>
                          Partners: FarmDrive, The Impact Lab, The World Bank
                        </h6>
                        <p className="lead">
                        </p><p>Inferred information about what farmers are growing using daily satellite images, at a fraction of the ongoing cost of collecting this information in person, to promote financial inclusion through services like input loans or crop insurance.</p>
                        <p className="subdued">Approaches include: Deep learning, computer vision, transfer learning, public playbook</p>
                        {/* <a href="/blog/targeting-higher-education-development-outreach.html" class="button">Blog</a> */}
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={2} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/background-10.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Illuminating mobile money experiences in Tanzania
                        </h4>
                        <h6>
                          Partners: IDEO.org
                        </h6>
                        <p className="lead">
                        </p><p>Analyzed millions of mobile money records to uncover patterns in behavior, and then combined these insights with human-centered design to shape new approaches to delivering mobile money to low-income populations in Tanzania.</p>
                        <p className="subdued">Approaches include: Human-centered design + data science, exploratory analysis, interactive visualization, rapid prototyping </p>
                        <p><a href="/case-studies/promoting-digital-financial-services-in-tanzania/" className="button" rel="external" tabIndex={-1}>case study</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-current slick-active" style={{height: '600px', width: '1366px'}} data-slick-index={3} aria-hidden="false" tabIndex={0} role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/background-6.png")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Predicting public health risks from restaurant reviews
                        </h4>
                        <h6>
                          Partners: Yelp, Harvard University, City of Boston
                        </h6>
                        <p className="lead">
                        </p><p>Flagged public health risks at restaurants by combining Yelp reviews with open city data on past inspections. An algorithmic approach discovers 25% more violations with the same number of inspections.</p>
                        <p className="subdued">Approaches include: Machine learning challenge, natural language processing (NLP), open data, alternative data sources</p>
                        <p><a href="/case-studies/using-yelp-reviews-to-flag-restaurant-health-risks/" className="button" rel="external" tabIndex={0}>case study</a> <a href="/blog/keeping-it-fresh-results/" className="button" rel="external" tabIndex={0}>blog</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={4} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide04" aria-describedby="slick-slide-control04">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/background-2.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Mapping fair trade products from source to shelf
                        </h4>
                        <h6>
                          Partners: Fair Trade USA
                        </h6>
                        <p className="lead">
                        </p><p>Visualized the flow of fair trade coffee products from the farms where they are grown to the stores where they are sold, connecting the nodes in supply chain transactions and increasing transparency for customers and auditors.</p>
                        <p className="subdued">Approaches include: Interactive dashboarding, GIS analysis, Tableau</p>
                        <p><a href="/case-studies/mapping-agricultural-supply-chains-from-source-to-shelf/" className="button" rel="external" tabIndex={-1}>case study</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={5} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide05" aria-describedby="slick-slide-control05">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/student-union-image.png")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Matching students with schools where they are likely to succeed
                        </h4>
                        <h6>
                          Partners: Data science company foundation
                        </h6>
                        <p className="lead">
                        </p><p>Used machine learning to match students with higher education programs where they are more likely to get in <em>and</em> graduate based on their unique profile. Focused on serving students from backgrounds traditionally less likely to attend college or apply for more competitive programs.</p>
                        <p className="subdued">Approaches include: Recommender systems, predictive modeling, software engineering</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={6} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide06" aria-describedby="slick-slide-control06">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/payg-project-payment-diagram.png")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Developing performance indicators and repayment models in off-grid solar
                        </h4>
                        <h6>
                          Partners: The World Bank, Angaza, GOGLA, Lighting Global
                        </h6>
                        <p className="lead">
                        </p><p>Analyzed repayment behaviors across dozens of pay-as-you-go (PAYG) solar energy companies serving off-grid populations throughout Africa; developed key performance indicators (KPIs) to facilitate standardized measurement and reporting for PAYG portfolios.</p>
                        <p className="subdued">Approaches include: Predictive modeling, exploratory analytics, open source software, key performance indicators (KPIs), public-private partnerships</p>
                        <p><a href="/case-studies/advancing-data-reporting-and-analytics-in-off-grid-solar/" className="button" rel="external" tabIndex={-1}>case study</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={7} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide07" aria-describedby="slick-slide-control07">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/background-11.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Modeling patient pathways through hospitals
                        </h4>
                        <h6>
                          Partners: Haystack Informatics
                        </h6>
                        <p className="lead">
                        </p><p>Mapped out the probabilistic patient journeys through hospitals based on tens of thousands of patient experiences, giving hospitals a better view into the timing of the activities in their departments and how they relate to operational efficiency.</p>
                        <p className="subdued">Approaches include: Predictive modeling, activity-based costing, Spark, production web application</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={8} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide08" aria-describedby="slick-slide-control08">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/cabi-message.png")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Surfacing signals from chat messages with plant doctors
                        </h4>
                        <h6>
                          Partners: CABI Plantwise
                        </h6>
                        <p className="lead">
                        </p><p>Automated recognition of agricultural entities (such as crops, pests, diseases, and chemicals) in WhatsApp and Telegram messages among plant doctors, enabling new ways to surface emerging trends and improve science-based guidance for smallholder farmers.</p>
                        <p className="subdued">Approaches include: Natural language processing (NLP), named-entity recognition (NER), fuzzy matching, human-in-the-loop data annotation</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={9} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide09" aria-describedby="slick-slide-control09">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/education.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Smart auto-tagging of K-12 school spending
                        </h4>
                        <h6>
                          Partners: Education Resource Strategies
                        </h6>
                        <p className="lead">
                        </p><p>Built algorithms that put apples-to-apples labels on school budget line items so that districts understand how their spending stacks up and where they can improve, saving months of manual processing each year.</p>
                        <p className="subdued">Approaches include: Natural language processing (NLP), machine learning challenge, Excel tooling, ranked prioritization for manual follow-up</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={10} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide010" aria-describedby="slick-slide-control010">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/reroute-application-screen.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Building data tools to fight human trafficking in Nepal
                        </h4>
                        <h6>
                          Partners: Love Justice
                        </h6>
                        <p className="lead">
                        </p><p>Aided anti-trafficking efforts at border crossings and airports by combining data across locations and surfacing insights that give interviewers greater intelligence about the right questions to ask and how to direct them.</p>
                        <p className="subdued">Approaches include: Data entry user experience design, data repository, GIS analysis, dynamic dashboard</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={11} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide011" aria-describedby="slick-slide-control011">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/background-7.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Putting AI into the hands of lung cancer clinicians
                        </h4>
                        <h6>
                          Partners: GO2 Foundation for Lung Cancer
                        </h6>
                        <p className="lead">
                        </p><p>Translated advances in machine learning research to practical software for clinical settings, building an open source application through a new kind of data challenge.</p>
                        <p className="subdued">Approaches include: Data challenge, deep learning, open source software, computer vision, predictive modeling, computer-aided diagnosis</p>
                        <p><a href="https://concepttoclinic.drivendata.org/" rel="external" className="button" tabIndex={-1}>challenge home</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide" style={{height: '600px', width: '1366px'}} data-slick-index={12} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide012" aria-describedby="slick-slide-control012">
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image lazy-loaded" style={{backgroundImage: 'url("https://www.drivendata.co/images/background-14.jpg")'}} />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Driving data education through custom competitions
                        </h4>
                        <h6>
                          Partners: Microsoft
                        </h6>
                        <p className="lead">
                        </p><p>Developed online, white-label data science competitions for students to synthesize their learnings and test their skills on applied challenges. Each capstone features a real-world dataset that focuses on an important issue in the social sector.</p>
                        <p className="subdued">Approaches include: Private data challenge, regression analysis, predictive modeling, data science education</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={13} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/chimp-tile-image.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Automating wildlife identification for research and conservation
                        </h4>
                        <h6>
                          Partners: Max Planck Institute for Evolutionary Anthropology, Arcus Foundation
                        </h6>
                        <p className="lead">
                        </p><p>Detected wildlife in video footage—automatically and at scale—by running a global algorithm development challenge and building an open source application with the winning solution (Project Zamba).</p>
                        <p className="subdued">Approaches include: Deep learning, computer vision, transfer learning, data science competition, crowdsourced data annotations, open source software</p>
                        <p><a href="https://zamba.drivendata.org/" className="button" rel="external" tabIndex={-1}>Project Zamba</a> <a href="/blog/camera-trap-wildlife-winners/" className="button" rel="external" tabIndex={-1}>blog</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={14} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-5.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Analyzing satellite images to serve smallholder farmers
                        </h4>
                        <h6>
                          Partners: FarmDrive, The Impact Lab, The World Bank
                        </h6>
                        <p className="lead">
                        </p><p>Inferred information about what farmers are growing using daily satellite images, at a fraction of the ongoing cost of collecting this information in person, to promote financial inclusion through services like input loans or crop insurance.</p>
                        <p className="subdued">Approaches include: Deep learning, computer vision, transfer learning, public playbook</p>
                        {/* <a href="/blog/targeting-higher-education-development-outreach.html" class="button">Blog</a> */}
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={15} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-10.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Illuminating mobile money experiences in Tanzania
                        </h4>
                        <h6>
                          Partners: IDEO.org
                        </h6>
                        <p className="lead">
                        </p><p>Analyzed millions of mobile money records to uncover patterns in behavior, and then combined these insights with human-centered design to shape new approaches to delivering mobile money to low-income populations in Tanzania.</p>
                        <p className="subdued">Approaches include: Human-centered design + data science, exploratory analysis, interactive visualization, rapid prototyping </p>
                        <p><a href="/case-studies/promoting-digital-financial-services-in-tanzania/" className="button" rel="external" tabIndex={-1}>case study</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={16} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-6.png" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Predicting public health risks from restaurant reviews
                        </h4>
                        <h6>
                          Partners: Yelp, Harvard University, City of Boston
                        </h6>
                        <p className="lead">
                        </p><p>Flagged public health risks at restaurants by combining Yelp reviews with open city data on past inspections. An algorithmic approach discovers 25% more violations with the same number of inspections.</p>
                        <p className="subdued">Approaches include: Machine learning challenge, natural language processing (NLP), open data, alternative data sources</p>
                        <p><a href="/case-studies/using-yelp-reviews-to-flag-restaurant-health-risks/" className="button" rel="external" tabIndex={-1}>case study</a> <a href="/blog/keeping-it-fresh-results/" className="button" rel="external" tabIndex={-1}>blog</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={17} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-2.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Mapping fair trade products from source to shelf
                        </h4>
                        <h6>
                          Partners: Fair Trade USA
                        </h6>
                        <p className="lead">
                        </p><p>Visualized the flow of fair trade coffee products from the farms where they are grown to the stores where they are sold, connecting the nodes in supply chain transactions and increasing transparency for customers and auditors.</p>
                        <p className="subdued">Approaches include: Interactive dashboarding, GIS analysis, Tableau</p>
                        <p><a href="/case-studies/mapping-agricultural-supply-chains-from-source-to-shelf/" className="button" rel="external" tabIndex={-1}>case study</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={18} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/student-union-image.png" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Matching students with schools where they are likely to succeed
                        </h4>
                        <h6>
                          Partners: Data science company foundation
                        </h6>
                        <p className="lead">
                        </p><p>Used machine learning to match students with higher education programs where they are more likely to get in <em>and</em> graduate based on their unique profile. Focused on serving students from backgrounds traditionally less likely to attend college or apply for more competitive programs.</p>
                        <p className="subdued">Approaches include: Recommender systems, predictive modeling, software engineering</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={19} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/payg-project-payment-diagram.png" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Developing performance indicators and repayment models in off-grid solar
                        </h4>
                        <h6>
                          Partners: The World Bank, Angaza, GOGLA, Lighting Global
                        </h6>
                        <p className="lead">
                        </p><p>Analyzed repayment behaviors across dozens of pay-as-you-go (PAYG) solar energy companies serving off-grid populations throughout Africa; developed key performance indicators (KPIs) to facilitate standardized measurement and reporting for PAYG portfolios.</p>
                        <p className="subdued">Approaches include: Predictive modeling, exploratory analytics, open source software, key performance indicators (KPIs), public-private partnerships</p>
                        <p><a href="/case-studies/advancing-data-reporting-and-analytics-in-off-grid-solar/" className="button" rel="external" tabIndex={-1}>case study</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={20} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-11.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Modeling patient pathways through hospitals
                        </h4>
                        <h6>
                          Partners: Haystack Informatics
                        </h6>
                        <p className="lead">
                        </p><p>Mapped out the probabilistic patient journeys through hospitals based on tens of thousands of patient experiences, giving hospitals a better view into the timing of the activities in their departments and how they relate to operational efficiency.</p>
                        <p className="subdued">Approaches include: Predictive modeling, activity-based costing, Spark, production web application</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={21} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/cabi-message.png" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Surfacing signals from chat messages with plant doctors
                        </h4>
                        <h6>
                          Partners: CABI Plantwise
                        </h6>
                        <p className="lead">
                        </p><p>Automated recognition of agricultural entities (such as crops, pests, diseases, and chemicals) in WhatsApp and Telegram messages among plant doctors, enabling new ways to surface emerging trends and improve science-based guidance for smallholder farmers.</p>
                        <p className="subdued">Approaches include: Natural language processing (NLP), named-entity recognition (NER), fuzzy matching, human-in-the-loop data annotation</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={22} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/education.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Smart auto-tagging of K-12 school spending
                        </h4>
                        <h6>
                          Partners: Education Resource Strategies
                        </h6>
                        <p className="lead">
                        </p><p>Built algorithms that put apples-to-apples labels on school budget line items so that districts understand how their spending stacks up and where they can improve, saving months of manual processing each year.</p>
                        <p className="subdued">Approaches include: Natural language processing (NLP), machine learning challenge, Excel tooling, ranked prioritization for manual follow-up</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={23} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/reroute-application-screen.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Building data tools to fight human trafficking in Nepal
                        </h4>
                        <h6>
                          Partners: Love Justice
                        </h6>
                        <p className="lead">
                        </p><p>Aided anti-trafficking efforts at border crossings and airports by combining data across locations and surfacing insights that give interviewers greater intelligence about the right questions to ask and how to direct them.</p>
                        <p className="subdued">Approaches include: Data entry user experience design, data repository, GIS analysis, dynamic dashboard</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={24} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-7.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Putting AI into the hands of lung cancer clinicians
                        </h4>
                        <h6>
                          Partners: GO2 Foundation for Lung Cancer
                        </h6>
                        <p className="lead">
                        </p><p>Translated advances in machine learning research to practical software for clinical settings, building an open source application through a new kind of data challenge.</p>
                        <p className="subdued">Approaches include: Data challenge, deep learning, open source software, computer vision, predictive modeling, computer-aided diagnosis</p>
                        <p><a href="https://concepttoclinic.drivendata.org/" rel="external" className="button" tabIndex={-1}>challenge home</a></p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div><div className="slide slick-slide slick-cloned" style={{height: '600px', width: '1366px'}} data-slick-index={25} aria-hidden="true" tabIndex={-1}>
                  <div className="row expanded align-left align-stretch project-item collapse" style={{height: '100%'}}>
                    <div className="column small-12 medium-5 cover carousel-image" data-bg="https://www.drivendata.co/images/background-14.jpg" />
                    <div className="column small-12 medium-7 large-6 align-self-middle">
                      <div className="padding padding-tall">
                        <h4>
                          Driving data education through custom competitions
                        </h4>
                        <h6>
                          Partners: Microsoft
                        </h6>
                        <p className="lead">
                        </p><p>Developed online, white-label data science competitions for students to synthesize their learnings and test their skills on applied challenges. Each capstone features a real-world dataset that focuses on an important issue in the social sector.</p>
                        <p className="subdued">Approaches include: Private data challenge, regression analysis, predictive modeling, data science education</p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div></div></div>
            <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{display: 'block'}}>Next</button><ul className="slick-dots" style={{display: 'block'}} role="tablist"><li className role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 13" tabIndex={-1}>1</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 13" tabIndex={-1}>2</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 13" tabIndex={-1}>3</button></li><li role="presentation" className="slick-active"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 13" tabIndex={0} aria-selected="true">4</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 13" tabIndex={-1}>5</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control05" aria-controls="slick-slide05" aria-label="6 of 13" tabIndex={-1}>6</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control06" aria-controls="slick-slide06" aria-label="7 of 13" tabIndex={-1}>7</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control07" aria-controls="slick-slide07" aria-label="8 of 13" tabIndex={-1}>8</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control08" aria-controls="slick-slide08" aria-label="9 of 13" tabIndex={-1}>9</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control09" aria-controls="slick-slide09" aria-label="10 of 13" tabIndex={-1}>10</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control010" aria-controls="slick-slide010" aria-label="11 of 13" tabIndex={-1}>11</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control011" aria-controls="slick-slide011" aria-label="12 of 13" tabIndex={-1}>12</button></li><li role="presentation" className><button type="button" role="tab" id="slick-slide-control012" aria-controls="slick-slide012" aria-label="13 of 13" tabIndex={-1}>13</button></li></ul></div>
          <div className="carousel-button">
            <a href="/projects.html" className="button link" target="_blank">All Projects →</a>
          </div>
        </section>
       );
    }
}

export default ProjectCarousel;
