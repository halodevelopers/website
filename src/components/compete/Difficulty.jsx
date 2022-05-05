import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


// Reward checkboxes accessed in compete.jsx
export default function DifficultyCheckBox() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup col>
            {/* Reward Section */}
            <h5 className='mt-2'>Difficulty</h5>
            <FormControlLabel
            style={{fontSize:"15px"}}
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                        // style={{width:"5px"}}
                    />
                }
                label="Good For Beginners"
            />
            <FormControlLabel
            style={{fontSize:"15px"}}
                control={
                    <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Intermediate"
            />
            <FormControlLabel
            
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedC"
                        color="primary"
                    />
                }
                label="Advanced"
            />
        </FormGroup>
    );
}
