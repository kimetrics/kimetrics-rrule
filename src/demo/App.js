import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import TextareaAutosize from 'react-autosize-textarea';

import ReactRRuleGenerator from '../lib';
import './index.css';

class App extends Component {
    state = {
        rrule: 'FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1',
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
                <div className="app-desc">
                    Recurrence rules generator form built with React
                </div>

                <div className="app container">
                    <h5><strong>{'<RRuleGenerator />'}</strong></h5>
                    <ReactRRuleGenerator
                        onChange={this.handleChange}
                        value={this.state.rrule}
                    />
                </div>

                <div className="container mb-4">
                    <h5><strong>Example handling</strong></h5>
                    <div className="px-3 pt-3 border rounded">
                        <div className="form-group row d-flex align-items-sm-center">
                            <div className="col-sm-2 text-sm-right">
                                <span className="col-form-label">RRule</span>
                            </div>

                            <div className="col-sm-8">
                                <TextareaAutosize
                                    className={`form-control rrule ${isCopied ? 'rrule-copied' : 'rrule-not-copied'}`}
                                    value={rrule}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
