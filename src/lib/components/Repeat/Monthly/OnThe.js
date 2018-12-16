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
        <FormField label='Sobre el:'>
            <Box direction='row' align='center'>
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
                <select
                    id={`${id} - which`}
                    name="repeat.monthly.onThe.which"
                    aria-label="Repeat monthly on the which"
                    className={`${!isActive && 'opacity-50'}`}
                    value={onThe.which}
                    disabled={!isActive}
                    onChange={handleChange}>
                    <option value="First">Primero</option>
                    <option value="Second">Segundo</option>
                    <option value="Third">Tercero</option>
                    <option value="Fourth">Cuarto</option>
                    <option value="Last">Último</option>
                </select>
                <select
                    id={`${id} - day`}
                    name="repeat.monthly.onThe.day"
                    aria-label="Repeat monthly on the day"
                    className={`${!isActive && 'opacity-50'}`}
                    value={onThe.day}
                    disabled={!isActive}
                    onChange={handleChange}>
                    {
                        DAYS.map(day => <option key={day} value={day}>{day}</option>)
                    }
                </select>
            </Box>
        </FormField>
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
