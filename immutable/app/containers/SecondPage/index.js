/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import Immutable from 'immutable';

class SecondPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    componentDidMount() {
        mocha.setup('bdd');
        const expect = chai.expect;

        function mutateValue(iterable, pos, value) {
            iterable[pos] = value;
        }

        function updateState(immutable, pos, value) {
            return immutable.set(pos, value);
        }

        describe("Immutable Test", () => {
            it('[Mutable(JAVA Script Array)]', () => {
                const state = ["todo1", "todo2"];
                const state2 = state;

                mutateValue(state2, 0, "newTodo");
                expect(state[0]).to.equal("newTodo");
            });

            it('[Immutable]', () => {
                const immutableState = Immutable.List(["todo1", "todo2"]);
                const immutableState2 = immutableState;

                console.log(immutableState);

                updateState(immutableState2, 0, "newTodo");
                expect(immutableState.get(0)).to.equal("todo1");
            })

        });

        mocha.run();
    }

    render() {
        return (
            <article>

                <Helmet>
                    <title>Second Page</title>
                    <meta name="description" content="A React.js Boilerplate application homepage" />
                </Helmet>

                <div id="mocha"></div>
            </article>
        );
    }
}

export default SecondPage;
