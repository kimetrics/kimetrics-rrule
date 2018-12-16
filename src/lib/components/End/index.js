import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './EndOnDate';

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const End = ({
                 id,
                 end: {
                     mode,
                     after,
                     onDate,
                     options,
                 },
                 handleChange,
             }) => {

    const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
    const isOptionSelected = option => mode === option;

    return (
        <FormField label="Fin">
            <Box direction='row' justify='between' align='center' pad={{vertical:'small', horizontal:'medium'}}>
                <select
                    name="end.mode"
                    id={id}
                    value={mode}
                    onChange={handleChange}>
                    <option value="-">Seleccionar</option>
                    {isOptionAvailable('Never') && <option value="Never">Nunca</option>}
                    {isOptionAvailable('After') && <option value="After">Después de</option>}
                    {isOptionAvailable('On date') && <option value="On date">En la Fecha</option>}
                </select>
                {
                    isOptionSelected('After') &&
                    <EndAfter id={`${id}-after`} after={after} handleChange={handleChange}/>
                }
                {
                    (isOptionSelected('On date')) &&
                    <EndOnDate id={`${id}-onDate`} onDate={onDate} handleChange={handleChange}/>
                }
            </Box>
        </FormField>
    );
};

End.propTypes = {
    id: PropTypes.string.isRequired,
    end: PropTypes.shape({
        mode: PropTypes.string.isRequired,
        after: PropTypes.number.isRequired,
        onDate: PropTypes.object.isRequired,
        options: PropTypes.shape({
            modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
            weekStartsOnSunday: PropTypes.bool,
        }).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default End;
