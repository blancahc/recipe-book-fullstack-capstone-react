import React from 'react';
import {shallow, mount, render} from 'enzyme';

import PublicRecipes from './public-recipes';

describe('<PublicRecipes />', () => {
    it('Renders without crashing', () => {
        shallow(<PublicRecipes />);
                });
    });
