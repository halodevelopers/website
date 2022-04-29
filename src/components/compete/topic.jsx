import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


// Reward checkboxes accessed in compete.jsx
export default function TopicCheckBox() {
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
            <h3 className='mt-2'>Topic</h3>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                    />
                }
                label="Agriculture"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Arts & Culture"
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
                label="Biology"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedD"
                        color="primary"
                    />
                }
                label="Computer Vision"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedE"
                        color="primary"
                    />
                }
                label="Conservation"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedF"
                        color="primary"
                    />
                }
                label="Construction"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedG"
                        color="primary"
                    />
                }
                label="Cryptocurrency"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedH"
                        color="primary"
                    />
                }
                label="Customer service"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedI"
                        color="primary"
                    />
                }
                label="Energy"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedJ"
                        color="primary"
                    />
                }
                label="Financial Services"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedK"
                        color="primary"
                    />
                }
                label="Government"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedL"
                        color="primary"
                    />
                }
                label="Health"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedM"
                        color="primary"
                    />
                }
                label="Insurance"
            />
                        <FormControlLabel
                control={
                    <Checkbox
                        checked={state.checkedC}
                        onChange={handleChange}
                        name="checkedN"
                        color="primary"
                    />
                }
                label="Logistics"
            />
        </FormGroup>
    );
}
