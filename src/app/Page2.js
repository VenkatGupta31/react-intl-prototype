import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Griddle, { RowDefinition, ColumnDefinition } from 'griddle-react';
import { Link } from 'react-router';
var data = [
    {
        "str": "First Component",
        "en": "Hawaii",
        "de": "Ovolo",
    },
    {
        "str": "Second Component",
        "en": "Hawaii - {name}",
        "de": "Ovolo - {name}",
    }
    ,
    {
        "str": "Second Component",
        "en": "Hawaii - {name}",
        "de": "Ovolo - {name}",
    }
];

export default class Page2 extends React.Component {
    constructor() {
        super();
    }

    render() {
        const CustomColumn = ({ value }) => <input value={value} />
        return (
            <div className="container">
                <Griddle data={data} tableClassName="table" showFilter={false}
                    showSettings={false}>
                    <RowDefinition>
                        <ColumnDefinition id="str" title="String Token" width={500} />
                        <ColumnDefinition id="en" title="EN" width={500} customComponent={CustomColumn} />
                        <ColumnDefinition id="de" title="GE" width={500} customComponent={CustomColumn} />
                    </RowDefinition>
                </Griddle>
                <Link to="/">Goto Page1</Link>
            </div>
        );
    }
}