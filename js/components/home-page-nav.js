import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function HomePageNav (props) {
    return (
        <div className="navbar">
            <img className="logoImg" src="assets/images/logo.PNG" alt="savour saved logo image" />
            <h1>
                Create your virtual recipe book with
                <span className="appName">SavourSaved!</span>
            </h1>
        </div>
    )
}
