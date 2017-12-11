/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

class SecondPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <article>

              <Helmet>
                <title>Third Page</title>
                <meta name="description" content="A React.js Boilerplate application homepage" />
              </Helmet>

              <div>
                  This Third Page
              </div>
            </article>
        );
    }
}

export default SecondPage;
