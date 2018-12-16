import React, {Fragment} from 'react';
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
        <Fragment>
            <FormField label="End">
                <Box direction='row' justify='between' align='center'>
                    <select
                        name="end.mode"
                        id={id}
                        className="form-control"
                        value={mode}
                        onChange={handleChange}>
                        <option value="-">Seleccionar</option>
                        {isOptionAvailable('Never') && <option value="Never">Never</option>}
                        {isOptionAvailable('After') && <option value="After">After</option>}
                        {isOptionAvailable('On date') && <option value="On date">On date</option>}
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

        </Fragment>
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
