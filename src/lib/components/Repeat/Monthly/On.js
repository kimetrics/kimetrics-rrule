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
        <Box className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
            <FormField className="col-sm-1 offset-sm-2">
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
                <div> on day </div>
            </FormField>

            <FormField>
                <select
                    id={`${id}-day`}
                    name="repeat.monthly.on.day"
                    aria-label="Repeat monthly on a day"
                    className="form-control"
                    value={on.day}
                    disabled={!isActive}
                    onChange={numericalFieldHandler(handleChange)}
                >
                    {[...new Array(31)].map((day, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                </select>
            </FormField>
        </Box>
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
