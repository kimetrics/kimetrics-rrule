import React from 'react';
import PropTypes from 'prop-types';
import RepeatMonthlyOn from './On';
import RepeatMonthlyOnThe from './OnThe';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const RepeatMonthly = ({
                           id,
                           monthly: {
                               mode,
                               interval,
                               on,
                               onThe,
                               options,
                           },
                           handleChange,
                       }) => {
    const isTheOnlyOneMode = option => options.modes === option;
    const isOptionAvailable = option => !options.modes || isTheOnlyOneMode(option);

    return (
        <Box>
            <FormField label='every'>
                <input
                    id={`${id}-interval`}
                    name="repeat.monthly.interval"
                    aria-label="Repeat monthly interval"
                    className="form-control"
                    value={interval}
                    onChange={numericalFieldHandler(handleChange)}
                />
                <span> month(s)</span>
            </FormField>

            {
                isOptionAvailable('on') && (
                    <RepeatMonthlyOn
                        id={`${id}-on`}
                        mode={mode}
                        on={on}
                        hasMoreModes={!isTheOnlyOneMode('on')}
                        handleChange={handleChange}
                    />
                )
            }
            {
                isOptionAvailable('on the') && (
                    <RepeatMonthlyOnThe
                        id={`${id}-onThe`}
                        mode={mode}
                        onThe={onThe}
                        hasMoreModes={!isTheOnlyOneMode('on the')}
                        handleChange={handleChange}
                    />
                )
            }
        </Box>
    );
};

RepeatMonthly.propTypes = {
    id: PropTypes.string.isRequired,
    monthly: PropTypes.shape({
        mode: PropTypes.oneOf(['on', 'on the']).isRequired,
        interval: PropTypes.number.isRequired,
        on: PropTypes.object.isRequired,
        onThe: PropTypes.object.isRequired,
        options: PropTypes.shape({
            modes: PropTypes.oneOf(['on', 'on the']),
        }).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default RepeatMonthly;
