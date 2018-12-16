import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const Repeat = ({
                    id,
                    repeat: {
                        frequency,
                        yearly,
                        monthly,
                        weekly,
                        daily,
                        hourly,
                        options,
                    },
                    handleChange,
                }) => {
    const isOptionAvailable = option => !options.frequency || options.frequency.indexOf(option) !== -1;
    const isOptionSelected = option => frequency === option;

    return (
        <div>
            <FormField label='Repetir:'>
                <Box pad={{horizontal: 'medium'}}>
                    <select
                        name="repeat.frequency"
                        id={`${id}-frequency`}
                        value={frequency}
                        onChange={handleChange}>
                        <option value="-">Seleccionar</option>
                        {isOptionAvailable('Yearly') && <option value="Yearly">Anual</option>}
                        {isOptionAvailable('Monthly') && <option value="Monthly">Mensual</option>}
                        {isOptionAvailable('Weekly') && <option value="Weekly">Semanal</option>}
                        {isOptionAvailable('Daily') && <option value="Daily">Diario</option>}
                        {isOptionAvailable('Hourly') && <option value="Hourly">Cada hora</option>}
                    </select>
                </Box>
            </FormField>
            {
                isOptionSelected('Yearly') &&
                <RepeatYearly
                    id={`${id}-yearly`}
                    yearly={yearly}
                    handleChange={handleChange}
                />
            }
            {
                isOptionSelected('Monthly') &&
                <RepeatMonthly
                    id={`${id}-monthly`}
                    monthly={monthly}
                    handleChange={handleChange}
                />
            }
            {
                isOptionSelected('Weekly') &&
                <RepeatWeekly
                    id={`${id}-weekly`}
                    weekly={weekly}
                    handleChange={handleChange}
                />
            }
            {
                isOptionSelected('Daily') &&
                <RepeatDaily
                    id={`${id}-daily`}
                    daily={daily}
                    handleChange={handleChange}
                />
            }
            {
                isOptionSelected('Hourly') &&
                <RepeatHourly
                    id={`${id}-hourly`}
                    hourly={hourly}
                    handleChange={handleChange}
                />
            }
        </div>
    );
};

Repeat.propTypes = {
    id: PropTypes.string.isRequired,
    repeat: PropTypes.shape({
        frequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
        yearly: PropTypes.object.isRequired,
        monthly: PropTypes.object.isRequired,
        weekly: PropTypes.object.isRequired,
        daily: PropTypes.object.isRequired,
        hourly: PropTypes.object.isRequired,
        options: PropTypes.shape({
            frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
            yearly: PropTypes.oneOf(['on', 'on the']),
            monthly: PropTypes.oneOf(['on', 'on the']),
        }).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default Repeat;
