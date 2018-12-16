import React, {Component} from 'react';
import ReactRRuleGenerator from '../lib';

import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
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
            <Box className="app" full={true} align='center' justify='center' pad={{horizontal:'small'}}>
                <ReactRRuleGenerator
                    config={{
                        mode: 'On date',
                        repeat: ['Monthly', 'Weekly', 'Daily'],
                        yearly: 'on the',
                        monthly: 'on',
                        end: ['On date'],
                        weekStartsOnSunday: true,
                        hideError: true
                    }}
                    onChange={this.handleChange} value={this.state.rrule}/>

                <br/>
                <Form>
                    <FormField label="RRule:">
                        <TextInput value={rrule} style={{width:'85%'}} size='large'/>
                    </FormField>
                </Form>
            </Box>
        );
    }
}

export default App;
