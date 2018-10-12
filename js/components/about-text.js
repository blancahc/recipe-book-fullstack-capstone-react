import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function AboutText (props) {
    return (
        <div className="textBox">
            <div id="appFeatures">
                <ul>
                    <li>~ Save your recipes ~</li>
                    <li>~ Easily search for your saved recipes ~</li>
                    <li>~ Share your recipes publicly (to appear in this page) ~</li>
                </ul>
            </div>
        </div>
    )
}
