/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    var a = resolveAfter2Seconds(20);
    var b = resolveAfter2Seconds(30);
    return x + await a + await b;
}

add1(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
});

// async function add2(x) {
//     var a = await resolveAfter2Seconds(20);
//     var b = await resolveAfter2Seconds(30);
//     return x + a + b;
// }
//
// add2(10).then(v => {
//     console.log(v);  // prints 60 after 4 seconds.
// });

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    resolveAfter2Seconds = (x) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, 2000);
        });
    }

    async add1 = (x) => {
        var a = resolveAfter2Seconds(20);
        var b = resolveAfter2Seconds(30);
        return x + await a + await b;
    }


    render() {
        console.log('start');
        let a = 10;



        return (
            <article>

                <Helmet>
                    <title>First Page</title>
                    <meta name="description" content="A React.js Boilerplate application homepage" />
                </Helmet>

                <div>
                    This Is HomePage
                </div>
            </article>
        );
    }
}

HomePage.propTypes = {
};

export function mapDispatchToProps(dispatch) {
    return {
        onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
        onSubmitForm: (evt) => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(loadRepos());
        },
    };
}

const mapStateToProps = createStructuredSelector({
    repos: makeSelectRepos(),
    username: makeSelectUsername(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
)(HomePage);