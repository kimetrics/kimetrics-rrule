import React from 'react';
import PropTypes from 'prop-types';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';

import FormField from 'grommet/components/FormField'
import Select from 'grommet/components/Select'

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

    const frecuencies = [];

    if (isOptionAvailable('Yearly')) {
        frecuencies.push({value: 'Yearly', text: 'Yearly'})
    }

    if (isOptionAvailable('Monthly')) {
        frecuencies.push({value: 'Monthly', text: 'Monthly'})
    }

    if (isOptionAvailable('Weekly')) {
        frecuencies.push({value: 'Weekly', text: 'Weekly'})
    }

    if (isOptionAvailable('Daily')) {
        frecuencies.push({value: 'Daily', text: 'Daily'})
    }

    if (isOptionAvailable('Hourly')) {
        frecuencies.push({value: 'Hourly', text: 'Hourly'})
    }

    /*
    {isOptionAvailable('Monthly') && <option value="Monthly">Monthly</option>}
    {isOptionAvailable('Weekly') && <option value="Weekly">Weekly</option>}
    {isOptionAvailable('Daily') && <option value="Daily">Daily</option>}
    {isOptionAvailable('Hourly') && <option value="Hourly">Hourly</option>}*/
    return (
        <div className="px-3">
            <FormField label='Repeat'>
                <Select
                    name="repeat.frequency"
                    id={`${id}-frequency`}
                    multiple={false}
                    inline={false}
                    value={frequency}
                    options={frecuencies}
                    onChange={handleChange}
                />
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
