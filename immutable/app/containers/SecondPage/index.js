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
        // mocha.setup('bdd');
        // const expect = chai.expect;
        //
        // function mutateValue(iterable, pos, value) {
        //     iterable[pos] = value;
        // }
        //
        // function updateState(immutable, pos, value) {
        //     return immutable.set(pos, value);
        // }
        //
        // describe("Immutable Test", () => {
        //     it('[Mutable(JAVA Script Array)]', () => {
        //         const state = ["todo1", "todo2"];
        //         const state2 = state;
        //
        //         mutateValue(state2, 0, "newTodo");
        //         expect(state[0]).to.equal("newTodo");
        //     });
        //
        //     it('[Immutable]', () => {
        //         const immutableState = Immutable.List(["todo1", "todo2"]);
        //         const immutableState2 = immutableState;
        //
        //         console.log(immutableState);
        //
        //         updateState(immutableState2, 0, "newTodo");
        //         expect(immutableState.get(0)).to.equal("todo1");
        //     })
        //
        // });
        //
        // mocha.run();
        this.Test();
    }

    doSomeThing(x) {
        x['spring'] = 'test';
    }

    Test() {


        const myText = "I'm immutable!";
        const sliceText = myText.slice(3, 13);

        // console.log(myText) // "I'm immutable!"
        // console.log(sliceText) // "immutable"
        //
        // let x = 3;
        // let y = x;
        // console.log(y === x) // true
        //
        // x = 5;
        //
        // console.log(y === x) // false
        // console.log(y) // 3
        // console.log(x) // 5
        //
        // const arr = [1, 2, 3, 4];
        // arr.push(5);
        // console.log(arr);





        const obj = {spring: "flowers", summer: "ocean"}
        doSomeThing(obj);
        console.log(obj);





        // )
        // let y = x;
        //
        // console.log(y === x);
        // x['spring'] = 'breeze';
        //
        // console.log(y === x);
        // console.log(y['spring']);
        //
        //
        // const arr1 = [1, 2, 3];
        // const arr2 = arr1.map(x => x + 1);
        // console.log(arr1);
        // console.log(arr2);
        //
        // let state = {
        //     name: "JaeEun",
        //     age: 24,
        // }
        //
        // state = Object.assign({}, state, {age: 25});
        //
        // console.log(state);
        //
        // let state = {
        //     name: "JaeEun",
        //     cars: [
        //         {brand: "BMW", color: "black"},
        //         {brand: "Benz", color: "yellow"}
        //     ]
        // }

        // 재은의 벤츠차량 색상을 Red 로 바꾸고 싶다면?



        // 벤츠의 색을 Red 로 바꾸고 싶다면?





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
