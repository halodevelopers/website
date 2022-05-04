import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './css/project.module.css';
import Container from 'react-bootstrap/Container';
import Row from'react-bootstrap/Row';
import ProjectCard from './projectcard'
import clsx from "clsx";

const Project = () => {
    return(
        <Container>
            <Row>
                <div className="col-md-8">
                    <div className="text">
                        <strong>Explore projects developed by Halodevs </strong>
                        
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={clsx("text", styles.sponsor)}>
                    <small>Sponsored Projects</small>
                    </div>
                </div>
            </Row>
            
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            
        </Container>
    );
}

export default Project;