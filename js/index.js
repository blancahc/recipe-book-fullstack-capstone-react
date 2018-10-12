import React from 'react';
import ReactDOM from 'react-dom';
const render = ReactDOM.render;
import {Provider} from 'react-redux';

import HomePageNav from '../js/components/home-page-nav';
import Footer from '../js/components/footer';
import AboutText from '../js/components/about-text';
import UserNav from '../js/components/user-nav';
import PublicRecipes from '../js/components/public-recipes';

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<HomePageNav />,
                                                  document.getElementById('reactHomePageNav'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<Footer />,
                                                  document.getElementById('reactFooter'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<AboutText />,
                                                  document.getElementById('reactAboutText'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<UserNav />,
                                                  document.getElementById('reactUserNav'));} );

document.addEventListener('DOMContentLoaded', () =>
                          {return ReactDOM.render(<PublicRecipes />,
                                                  document.getElementById('reactPublicRecipes'));} );
