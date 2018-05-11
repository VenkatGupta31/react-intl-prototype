import React from "react";
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, DefaultRoute } from 'react-router';
import Page1 from "./Page1";
import Page2 from "./Page2";
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import de from 'react-intl/locale-data/de';
import es from 'react-intl/locale-data/es';
import localeData from './../../build/locales/data.json';

// feed locale data
addLocaleData([...en, ...fr, ...de, ...es]);

// set browser language
var language = navigator.language.toLowerCase().split(/[_-]+/)[0]; 

// || localStorage.getItem('locale');
// var language = localStorage.getItem('locale') || navigator.language.toLowerCase().split(/[_-]+/)[0];
var messages = localeData[language] || localeData.en;
// console.log("Load", language);
// console.log("Load", messages);
var status = false;
export default class App extends React.Component {
    handleSelect(event) {
        var lang = event.target.value;
        if (lang == 'Locale') {
            localStorage.clear();
        }
        else {
            localStorage.setItem('locale', lang);
        }
        console.log("..", localStorage.getItem('locale'));
    }
    componentWillMount(status) {
        language = localStorage.getItem('locale');
        messages = localeData[language]
        // console.log("WillMount", language);
        // console.log("willMount", messages);
        if (status = false) {
            localStorage.clear();
            status = true;
        }
    }

    render() {
        return (
            <div>
                {/* <select className="selectpicker" onChange={this.handleSelect}>
                    <option>Locale</option>
                    <option>en</option>
                    <option>de</option>
                    <option>fr</option>
                </select> */}
                <Page1 />
            </div>
            // <Router history={browserHistory}>
            //     <Route path="/" component={Page1} />
            //     <Route path="Page2" component={Page2} />
            // </Router>
        );
    }

}

render(
    <IntlProvider locale={language} messages={messages} >
        <App />
    </IntlProvider>,
    document.getElementById("app")
);

