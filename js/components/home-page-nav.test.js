import React from 'react';
import {shallow, mount, render} from 'enzyme';

import HomePageNav from './home-page-nav';

describe('<HomePageNav />', () => {
    it('Renders without crashing', () => {
        shallow(<HomePageNav />);
                });
    });
