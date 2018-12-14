import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';
import FormField from "grommet/components/FormField";

const Start = ({
                   id,
                   start: {
                       onDate,
                   },
                   handleChange,
               }) => (
    <FormField label='Start'>
        <StartOnDate id={id} onDate={onDate} handleChange={handleChange}/>
    </FormField>
);

Start.propTypes = {
    id: PropTypes.string.isRequired,
    start: PropTypes.shape({
        onDate: PropTypes.object.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Start;
