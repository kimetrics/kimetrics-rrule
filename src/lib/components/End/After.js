import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';

// error={errors.name}

import Box from 'grommet/components/Box';
import FormField from 'grommet/components/FormField';

const EndAfter = ({id, after, handleChange}) => (
    <FormField label='After'>
        <input
            id={id}
            name="end.after"
            aria-label="End after"
            className="form-control"
            value={after}
            onChange={numericalFieldHandler(handleChange)}
        />
        <div> executions.</div>
    </FormField>
);

EndAfter.propTypes = {
    id: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default EndAfter;
