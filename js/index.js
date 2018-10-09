import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

import HomePageNav from '../js/components/home-page-nav';
import Footer from '../js/components/footer';


document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<HomePageNav />,
                                                  document.getElementById('reactHomePageNav'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Footer />,
                                                  document.getElementById('reactFooter'));} );
