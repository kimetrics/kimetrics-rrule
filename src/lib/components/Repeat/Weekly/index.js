import React from 'react';
import PropTypes from 'prop-types';
import {toPairs} from 'lodash';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

import CheckBox from 'grommet/components/CheckBox';
import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const RepeatWeekly = ({
                          id,
                          weekly: {
                              interval,
                              days,
                              options,
                          },
                          handleChange,
                      }) => {
    let daysArray = toPairs(days);

    if (options.weekStartsOnSunday) {
        daysArray = daysArray.slice(-1).concat(daysArray.slice(0, -1));
    }

    return (
        <FormField label="Cada:">
            <Box flex={true} align='center' direction='row' pad={{vertical: 'small', horizontal: 'medium'}}>
                <input
                    id={`${id}-interval`}
                    name="repeat.weekly.interval"
                    aria-label="Repeat weekly interval"
                    value={interval}
                    onChange={numericalFieldHandler(handleChange)}/>
                <span> Semana(s)</span>
            </Box>
            <Box flex={true} direction='row' wrap={true} pad={{vertical: 'small', horizontal: 'medium'}}>
                {
                    daysArray.map(([dayName, isDayActive]) => (
                        <div key={`${id}-${dayName}`} style={{marginBottom: 5}}>
                            <CheckBox
                                label={`${dayName.slice(0, 1).toUpperCase()}${dayName.slice(1)}`}
                                toggle={true}
                                id={`${id}-${dayName}`}
                                name={`repeat.weekly.days[${dayName}]`}
                                checked={isDayActive}
                                onChange={(event) => {
                                    const editedEvent = {
                                        ...event,
                                        target: {
                                            ...event.target,
                                            value: !isDayActive,
                                            name: event.target.name,
                                        },
                                    };

                                    handleChange(editedEvent);
                                }}
                            />
                        </div>
                    ))
                }
            </Box>
        </FormField>
    );
};

RepeatWeekly.propTypes = {
    id: PropTypes.string.isRequired,
    weekly: PropTypes.shape({
        interval: PropTypes.number.isRequired,
        days: PropTypes.shape({
            mon: PropTypes.bool.isRequired,
            tue: PropTypes.bool.isRequired,
            wed: PropTypes.bool.isRequired,
            thu: PropTypes.bool.isRequired,
            fri: PropTypes.bool.isRequired,
            sat: PropTypes.bool.isRequired,
            sun: PropTypes.bool.isRequired,
        }).isRequired,
        options: PropTypes.shape({
            weekStartsOnSunday: PropTypes.bool,
        }).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatWeekly;
