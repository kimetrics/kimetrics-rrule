import React, {Component} from 'react';
import KRRule from '../lib';

import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';

class App extends Component {

    state = {
        rrule: 'RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,TU,WE,TH;UNTIL=20181231T060000Z'
    };

    handleChange = (newRRule) => {
        this.setState({rrule: newRRule});
    };

    render() {
        const {
            rrule
        } = this.state;

        return (
            <Box className="app" full={true} align='center' justify='center'
                 pad={{horizontal: 'small'}} style={{boxSizing: 'border-box'}}>
                <KRRule
                    config={{
                        hideStart: false,
                        repeat: ['Monthly', 'Weekly', 'Daily'],
                        //mode: 'On date',
                        //monthly: 'on',
                        end: ['On date'],
                        weekStartsOnSunday: true,
                        hideError: true
                    }}
                    onChange={this.handleChange} value={this.state.rrule}
                />

                <br/>
                <label data-label="RRule:">
                    RRule: <br/>
                    <textarea value={rrule} rows={4} style={{width: '100%'}} onChange={() => {}}/>
                </label>
            </Box>
        );
    }
}

export default App;
