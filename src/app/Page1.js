import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import { Link } from 'react-router';

const messages = defineMessages({
    Message1: {
        id: 'Page1.message1',
        defaultMessage: 'default message.., { name } !',
    }
});

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            date1: new Date(),
            num: 0,
            num1: 0,
            name: "react-intl !",
            localeMsg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static propTypes = {
        intl: intlShape.isRequired,
    };
    
    handleChange(event) {
        this.setState({ date: event.target.value });
    }
    handleChange1(event) {
        this.setState({ num: event.target.value });
    }
    componentWillMount(){
        const { formatMessage, formatDate, formatNumber } = this.props.intl;        
        var localeMsg1 = formatMessage(messages.Message1, { name: this.state.name });
        this.setState({ localeMsg: localeMsg1 });
        var localeDate = formatDate(this.state.date, { year: 'numeric',month: 'long',day: 'numeric'}); //, { year: 'numeric',month: 'long',day: 'numeric'}
        this.setState({ date1: localeDate });
        // var localeNum = formatNumber(this.state.num);
        // this.setState({ num1: localeNum });        
    }
    handleSubmit(event) {
        const { formatDate, formatNumber } = this.props.intl;        
        console.log("Invariant date :", this.state.date);
        console.log("Invariant num :", this.state.num);
        var localeDate = formatDate(this.state.date, { year: 'numeric',month: 'long',day: 'numeric'}); //, { year: 'numeric',month: 'long',day: 'numeric'}
        var localeNum = formatNumber(this.state.num);
        this.setState({ date1: localeDate });
        this.setState({ num1: localeNum });
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="col-xs-10 col-xs-offset-0">
                    <ul>
                        <p />
                        <h3>{this.state.localeMsg}</h3>
                        <h3>{this.state.date1.toString()}</h3>
                        <h3>{this.state.num1}</h3>
                        <hr />
                        <div className="col-xs-4">
                            <input type="date" className="form-control" value={this.state.date} onChange={this.handleChange} />
                            <input type="number" className="form-control" value={this.state.num} onChange={this.handleChange1} />
                            <button onClick={this.handleSubmit} type="submit" className="btn btn-default" id="send"> Post </button>
                        </div>
                    </ul>
                </div>
                <br />
            </div>
        );
    }
}

export default injectIntl(Page1);