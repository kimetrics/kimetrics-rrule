import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import {MONTHS} from '../../../constants/index';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const RepeatYearlyOn = ({
                            id,
                            mode,
                            on,
                            hasMoreModes,
                            handleChange,
                        }) => {
    const daysInMonth = moment(on.month, 'MMM').daysInMonth();
    const isActive = mode === 'on';

    return (
        <Box className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
            <FormField label='Year'>
                {hasMoreModes && (
                    <input
                        id={id}
                        type="radio"
                        name="repeat.yearly.mode"
                        aria-label="Repeat yearly on"
                        value="on"
                        checked={isActive}
                        onChange={handleChange}
                    />
                )}

                <span>on</span>
            </FormField>

            <FormField className="col-sm-2">
                <select
                    id={`${id}-month`}
                    name="repeat.yearly.on.month"
                    aria-label="Repeat yearly on month"
                    className="form-control"
                    value={on.month}
                    disabled={!isActive}
                    onChange={handleChange}
                >
                    {MONTHS.map(month => <option key={month} value={month}>{month}</option>)}
                </select>
            </FormField>

            <FormField className="col-sm-2">
                <select
                    id={`${id}-day`}
                    name="repeat.yearly.on.day"
                    aria-label="Repeat yearly on a day"
                    className="form-control"
                    value={on.day}
                    disabled={!isActive}
                    onChange={numericalFieldHandler(handleChange)}
                >
                    {[...new Array(daysInMonth)].map((day, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
            </FormField>
        </Box>
    );
};
RepeatYearlyOn.propTypes = {
    id: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    on: PropTypes.shape({
        month: PropTypes.oneOf(MONTHS).isRequired,
        day: PropTypes.number.isRequired,
    }).isRequired,
    hasMoreModes: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOn;
