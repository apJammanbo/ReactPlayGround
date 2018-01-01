import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                This is React Play Ground
                <NavBar>
                    <HeaderLink to="/">
                        Home
                    </HeaderLink>
                    <HeaderLink to="/second">
                        Second Page
                    </HeaderLink>
                    <HeaderLink to="/third">
                        Third Page
                    </HeaderLink>
                </NavBar>
            </div>
        );
    }
}

export default Header;
