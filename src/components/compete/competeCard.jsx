import React, { Component } from 'react';
import {Typography} from '@material-ui/core';
import SingleCard from './singleCard';


class CompteteCard extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <SingleCard/>
                <SingleCard/>
                <SingleCard/>
                <SingleCard/>
            </div>
        );
    }
}
 
export default CompteteCard;