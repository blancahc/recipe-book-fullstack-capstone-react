import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function PublicRecipes (props) {
    return (
        <h2 className="displayRecipes">Recipes Shared by SavourSaved users</h2>
        <div id="js-display-public-recipes">
        </div>
    )
}
