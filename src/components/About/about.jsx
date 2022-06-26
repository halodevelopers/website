import React from 'react';
import NavBar from '../Common/navigation';

function About() {
    return ( 
        <div>
            <NavBar/>
            <div className="container">
                <div>
                    <h1>What is Halodev</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, reiciendis, rerum inventore, tenetur quam nisi ipsum omnis maxime architecto veritatis esse quo minima molestias! Accusamus tempore temporibus non exercitationem iusto?</p>
                </div>
                <div>
                    <h1>Who are Halodev</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, reiciendis, rerum inventore, tenetur quam nisi ipsum omnis maxime architecto veritatis esse quo minima molestias! Accusamus tempore temporibus non exercitationem iusto?</p>
                </div>
            </div>
        </div>
     );
}

export default About;