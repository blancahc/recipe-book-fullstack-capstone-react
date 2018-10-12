import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function HomePageNav (props) {
    return (
        <nav className="navbar">
            <img className="logoImg" src="assets/images/logo.PNG" alt="savour recipe logo image" />
            <span className="nav-options">
                <ul>
                    <li><a id="js-nav-my-recipes" href="#">My Recipes</a></li>
                    <li><a id="js-nav-add-recipe" href="#">Add a Recipe</a></li>
                    <li><button className="signout-button" id='js-signout-button' type="button"> Sign Out</button></li>
                </ul>
            </span>
        </nav>
    )
}
