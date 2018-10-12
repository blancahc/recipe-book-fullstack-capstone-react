import React from 'react';
import {shallow, mount, render} from 'enzyme';

import AboutText from './about-text';

describe('<AboutText />', () => {
    it('Renders without crashing', () => {
        shallow(<AboutText />);
                });
    });
