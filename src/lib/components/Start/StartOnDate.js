import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DateTime from 'grommet/components/DateTime';
import {DATE_TIME_FORMAT, DATE_TIME_FORMAT_READABLE} from '../../constants/index';

const StartOnDate = ({
                         id,
                         onDate: {
                             date,
                             options,
                         }, handleChange
                     }) => {
    const readable = moment(date, DATE_TIME_FORMAT).format(DATE_TIME_FORMAT_READABLE);
    return (
        <DateTime
            value={readable}
            name='start.onDate.date'
            format={DATE_TIME_FORMAT_READABLE}
            onChange={(inputDate) => {
                const editedEvent = {
                    target: {
                        value: moment(inputDate, DATE_TIME_FORMAT_READABLE).format(DATE_TIME_FORMAT),
                        name: 'start.onDate.date',
                    }
                };
                handleChange(editedEvent);
            }}
        />
    );
};

StartOnDate.propTypes = {
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

export default StartOnDate;
