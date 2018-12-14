import React from 'react';
import PropTypes from 'prop-types';

import {DAYS} from '../../../constants/index';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';


const RepeatMonthlyOnThe = ({
                                id,
                                mode,
                                onThe,
                                hasMoreModes,
                                handleChange,
                            }) => {
    const isActive = mode === 'on the';

    return (
        <Box className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`}>
            <FormField>
                {hasMoreModes && (
                    <input
                        id={id}
                        type="radio"
                        name="repeat.monthly.mode"
                        aria-label="Repeat monthly on the"
                        value="on the"
                        checked={isActive}
                        onChange={handleChange}
                    />
                )}
                <span>on the</span>
            </FormField>

            <FormField>
                <select
                    id={`${id}-which`}
                    name="repeat.monthly.onThe.which"
                    aria-label="Repeat monthly on the which"
                    className="form-control"
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

            <FormField>
                <select
                    id={`${id}-day`}
                    name="repeat.monthly.onThe.day"
                    aria-label="Repeat monthly on the day"
                    className="form-control"
                    value={onThe.day}
                    disabled={!isActive}
                    onChange={handleChange}
                >
                    {DAYS.map(day => <option key={day} value={day}>{day}</option>)}
                </select>
            </FormField>
        </Box>
    );
};
RepeatMonthlyOnThe.propTypes = {
    id: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    onThe: PropTypes.shape({
        which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
        day: PropTypes.oneOf(DAYS).isRequired,
    }).isRequired,
    hasMoreModes: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthlyOnThe;
