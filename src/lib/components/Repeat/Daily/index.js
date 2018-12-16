import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const RepeatDaily = ({
                         id,
                         daily: {
                             interval,
                         },
                         handleChange,
                     }) => (
    <Box>
        <FormField label='every'>
            <input
                id={`${id}-interval`}
                name="repeat.daily.interval"
                aria-label="Repeat daily interval"
                value={interval}
                onChange={numericalFieldHandler(handleChange)}
            />
            <span> day(s)</span>
        </FormField>
    </Box>
);
RepeatDaily.propTypes = {
    id: PropTypes.string.isRequired,
    daily: PropTypes.shape({
        interval: PropTypes.number.isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatDaily;
