import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
//import DateTime from 'react-datetime';
import DateTime from 'grommet/components/DateTime';

import 'moment/locale/en-gb';
import 'moment/locale/en-ca';

import {DATE_TIME_FORMAT} from '../../constants/index';

import Box from "grommet/components/Box";

const EndOnDate = ({
                       id,
                       onDate: {
                           date,
                           options,
                       }, handleChange
                   }) => {

    const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
    const calendarAttributes = {
        'aria-label': 'Datetime picker for end on date',
        value: date,
        dateFormat: DATE_TIME_FORMAT,
        locale,
        readOnly: true,
    };

    return (
        <Box>
            <DateTime
                id={`${id}-datetime`}
                name='end.onDate.date'
                format={DATE_TIME_FORMAT}
                value={date}
                onChange={(inputDate) => {
                    const editedEvent = {
                        target: {
                            value: moment(inputDate).format(DATE_TIME_FORMAT),
                            name: 'end.onDate.date',
                        },
                    };

                    handleChange(editedEvent);
                }}
            />
        </Box>
    );
};

EndOnDate.propTypes = {
    id: PropTypes.string.isRequired,
    onDate: PropTypes.shape({
        date: PropTypes.string.isRequired,
        options: PropTypes.shape({
            weekStartsOnSunday: PropTypes.bool,
            calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
        }).isRequired,
    }).isRequired,
    handleChange: PropTypes.func.isRequired,
};

export default EndOnDate;
