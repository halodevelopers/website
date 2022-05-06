import React, { useState, useMemo, Fragment } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from 'react-select'
import countryList from 'react-select-country-list'

function ExperienceCheckBox() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,

    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup col>
            {/* Reward Section */}
            <h5 className='mt-2'>Experience</h5>
            <FormControlLabel
                style={{ fontSize: "15px" }}
                control={
                    <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                    // style={{width:"5px"}}
                    />
                }
                label="2-5 years"
            />
            <FormControlLabel
                style={{ fontSize: "15px" }}
                control={
                    <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                }
                label="Less than A year"
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
                label="1-2 years"
            />
            <FormControlLabel

                control={
                    <Checkbox
                        checked={state.checkedD}
                        onChange={handleChange}
                        name="checkedD"
                        color="primary"
                    />
                }
                label="More than 5 years"
            />
        </FormGroup>
    );
}

function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    return (
        <Fragment>
            <div>
                <h5>Location</h5>
                <Select options={options} value={value} onChange={changeHandler} />
            </div>
        </Fragment>
    )
}



function FilterSideBAr() {
    return (
        <Fragment>
            <ExperienceCheckBox />
            <CountrySelector />

        </Fragment>
    );
}

export default FilterSideBAr;