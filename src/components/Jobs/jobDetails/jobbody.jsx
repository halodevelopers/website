import React, { Fragment } from 'react';

function JobBody() {
    return (
        <Fragment>
            <div className="body">
                <div className="row container">
                    <div className="col ms-5">
                        <p style={{fontSize:"14px"}}>
                            Hulamin is an aluminium semi-fabricator business located in South Africa supplying
                            customers across Africa and the world with an extensive range of quality products.
                            Supported by a sales office in South Africa and a network of international agents,
                            we sell to leading manufacturers and distributors across many industries around the
                            world. The company supplies a significant proportion of the world's ultra-high-end
                            aluminium products. It is known for being a key supplier of worked aluminium components
                            for Tesla electric vehicles and aeronautical Wi-Fi components.
                            Hulamin is committed to the growth of the regional Southern African aluminium industry
                            through our rolled and extruded products business units. We aim to make a meaningful
                            contribution to sustainable development in Southern Africa. They are committed to
                            responsible business leadership and good governance, and to making a positive impact
                            on the economy, environment and communities in which they operate.
                        </p>
                        <div>
                            <h5 style={{fontSize:"16px"}}>Primary Objective</h5>
                            <p style={{fontSize:"14px"}}>
                                Reporting to the Senior Management team, this role focuses on leading Data
                                Specialist strategies by developing solutions to challenging business problems
                                and driving a data-driven culture within a fast-paced manufacturing organisation.
                                The ideal candidate should be able to demonstrate the ability to lead strategic
                                projects, translate data into problem-solving solutions, and drive profitability
                                and mitigate risks.

                                We are looking for someone for a Strategist, someone who takes ownership of model
                                developments and the ability to translate business requirements in a fast-moving
                                industrial setting and can communicate effectively across cross-functional teams
                                and multiple stakeholder groups. Because of the nature of the business, we are
                                looking for someone who can thrive in dynamic and fast-paced organisations.
                                No day is ever the same and devolvement of the projects requires someone who
                                can multi-task in a hybrid environment.
                            </p>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div>
                            <h5 style={{fontSize:"15px"}}>Company</h5>
                            <p style={{fontSize:"14px"}}>Hulamin</p>
                            <p style={{fontSize:"14px"}}>www.hulamin.com/</p>
                        </div>

                        <div className="emp_type mt-5">
                            <h5 style={{fontSize:"16px"}}>Employment Type</h5>
                            <p style={{fontSize:"14px"}}>Full Time</p>
                        </div>
                        <div className="experience mt-5">
                            <h5 style={{fontSize:"16px"}}>Experience</h5>
                            <p style={{fontSize:"14px"}}>2-5 years</p>
                        </div>
                        <div className="location mt-5">
                            <h5 style={{fontSize:"16px"}}>Location</h5>
                            <p style={{fontSize:"14px"}}>South Africa,  Pietermaritzburg </p>
                        </div>
                        <div className="apply mt-5">
                            <button className='btn btn-dark'>APPLY</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default JobBody;