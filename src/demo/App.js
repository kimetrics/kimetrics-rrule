import React, {Component} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

import ReactRRuleGenerator from '../lib';
import './index.css';

class App extends Component {
    state = {
        rrule: 'RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=MO,TU,WE,TH;UNTIL=20181231T060000Z',
        isCopied: false,
    };

    handleChange = (newRRule) => {
        this.setState({rrule: newRRule, isCopied: false});
    };

    handleCopy = () => {
        this.setState({isCopied: true});
    };

    render() {
        const {
            rrule, isCopied
        } = this.state;

        return (
            <div>
                <div className="app">
                    <ReactRRuleGenerator
                        config={{
                            mode: 'On date',
                            repeat: ['Monthly', 'Weekly', 'Daily'],
                            yearly: 'on the',
                            monthly: 'on',
                            end: [ 'On date'],
                            weekStartsOnSunday: true,
                            hideError: true
                        }}
                        onChange={this.handleChange} value={this.state.rrule}/>
                    <br/>
                    <div>RRule:</div>
                    <br/>
                    <TextareaAutosize value={rrule}/>
                </div>
            </div>
        );
    }
}

export default App;
