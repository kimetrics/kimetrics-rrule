import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const RepeatMonthlyOn = ({
                             id,
                             mode,
                             on,
                             hasMoreModes,
                             handleChange,
                         }) => {
    const isActive = mode === 'on';

    return (
        <FormField label='En el día:'>
            <Box direction='row' align='center'>
                {hasMoreModes && (
                    <input
                        id={id}
                        type="radio"
                        name="repeat.monthly.mode"
                        aria-label="Repeat monthly on"
                        value="on"
                        checked={isActive}
                        onChange={handleChange}
                    />
                )}
                <select
                    id={`${id}-day`}
                    name="repeat.monthly.on.day"
                    aria-label="Repeat monthly on a day"
                    className={`${!isActive && 'opacity-50'}`}
                    value={on.day}
                    disabled={!isActive}
                    onChange={numericalFieldHandler(handleChange)}>
                    {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                </select>
            </Box>
        </FormField>
    );
};

RepeatMonthlyOn.propTypes = {
    id: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    on: PropTypes.shape({
        day: PropTypes.number.isRequired,
    }).isRequired,
    hasMoreModes: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOn;
