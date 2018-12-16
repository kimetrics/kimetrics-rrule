import React from 'react';
import PropTypes from 'prop-types';
import {MONTHS, DAYS} from '../../../constants/index';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const RepeatYearlyOnThe = ({
                               id,
                               mode,
                               onThe,
                               hasMoreModes,
                               handleChange,
                           }) => {
    const isActive = mode === 'on the';

    return (
        <Box className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
            <FormField className="col-sm-1 offset-sm-2">
                {hasMoreModes && (
                    <input
                        id={id}
                        type="radio"
                        aria-label="Repeat yearly on the"
                        name="repeat.yearly.mode"
                        checked={isActive}
                        value="on the"
                        onChange={handleChange}
                    />
                )}
                <div>on the</div>
            </FormField>


            <FormField className="col-sm-2">
                <select
                    id={`${id}-which`}
                    name="repeat.yearly.onThe.which"
                    aria-label="Repeat yearly on the which"
                    value={onThe.which}
                    disabled={!isActive}
                    onChange={handleChange}
                >
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                    <option value="Fourth">Fourth</option>
                    <option value="Last">Last</option>
                </select>
            </FormField>

            <FormField className="col-sm-3">
                <select
                    id={`${id}-day`}
                    name="repeat.yearly.onThe.day"
                    aria-label="Repeat yearly on the day"
                    value={onThe.day}
                    disabled={!isActive}
                    onChange={handleChange}
                >
                    {DAYS.map(day => <option key={day} value={day}>{day}</option>)}
                </select>
            </FormField>

            <div className="col-sm-1">
                of
            </div>

            <FormField className="col-sm-2">
                <select
                    id={`${id}-month`}
                    name="repeat.yearly.onThe.month"
                    aria-label="Repeat yearly on the month"
                    value={onThe.month}
                    disabled={!isActive}
                    onChange={handleChange}
                >
                    {MONTHS.map(month => <option key={month} value={month}>{month}</option>)}
                </select>
            </FormField>

        </Box>
    );
};
RepeatYearlyOnThe.propTypes = {
    id: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    onThe: PropTypes.shape({
        which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
        month: PropTypes.oneOf(MONTHS).isRequired,
        day: PropTypes.oneOf(DAYS).isRequired,
    }).isRequired,
    hasMoreModes: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatYearlyOnThe;
