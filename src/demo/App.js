import React, {Component} from 'react';
import KRRule from '../lib';

import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';

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
                <Form>
                    <KRRule
                        onEndChange={(end) => {
                        }}
                        onStartChange={(start) => {
                        }}
                        config={{
                            hideStart: false,
                            repeat: ['Monthly', 'Weekly', 'Daily'],
                            //mode: 'On date',
                            //monthly: 'on',
                            end: ['On date'],
                            weekStartsOnSunday: false,
                            hideError: true
                        }}
                        onChange={this.handleChange} value={this.state.rrule}
                    />

                    <br/>
                    <div className={'ReactRRuleGenerator'}>
                        RRule: <br/>
                        <textarea value={rrule} rows={4} style={{width: '100%'}} onChange={() => {}}/>
                    </div>
                </Form>
            </Box>
        );
    }
}

export default App;
