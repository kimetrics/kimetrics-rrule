import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './StartOnDate';
import FormField from "grommet/components/FormField";
import Box from "grommet/components/Box";

const Start = ({
                   id,
                   start: {
                       onDate,
                   },
                   handleChange
               }) => (
    <FormField label='Inicio'>
        <Box direction='row' align='center' pad={{vertical: 'small', horizontal: 'medium'}}>
            <StartOnDate id={id} onDate={onDate} handleChange={handleChange}/>
        </Box>
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
