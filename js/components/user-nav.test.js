import React from 'react';
import {shallow, mount, render} from 'enzyme';

import UserNav from './user-nav';

describe('<UserNav />', () => {
    it('Renders without crashing', () => {
        shallow(<UserNav />);
                });
    });
