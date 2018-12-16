import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const RepeatHourly = ({
                          id,
                          hourly: {
                              interval,
                          },
                          handleChange,
                      }) => (
    <Box>
        <FormField label='every'>
            <input
                id={`${id}-interval`}
                name="repeat.hourly.interval"
                aria-label="Repeat hourly interval"
                value={interval}
                onChange={numericalFieldHandler(handleChange)}
            />
            <span> day(s)</span>
        </FormField>
    </Box>
);
RepeatHourly.propTypes = {
    id: PropTypes.string.isRequired,
    hourly: PropTypes.shape({
        interval: PropTypes.number.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatHourly;
