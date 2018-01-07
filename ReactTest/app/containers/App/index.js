/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';

// state, props

// Parent Component
class GroceryList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            groceryList: [
                {quantity: 1, name: "Bread"},
                {quantity: 6, name: "Eggs"},
                {quantity: 2, name: "Mili"}
            ]
        }
    }

    handleClick = () => {
        let list = this.state.groceryList.map((item) => {
                 item.quantity = item.quantity + 1;
            return item;
        })
        this.setState({groceryList: list});
    };

    render() {
        console.log('render-GroceryList');
        return (
            <div>
                <button onClick={this.handleClick}>Test</button>
                <ul>
                    {
                        this.state.groceryList.map((item) => {
                            return <ListItem quantity={item.quantity} name={item.name} test={"1"}></ListItem>
                        })
                    }
                </ul>
            </div>
        );
    }
}

// state / props

class ListItem extends React.Component {

    render() {
        console.log('render-ListItem');
        return (
            <li>
                {this.props.quantity} × {this.props.name}
            </li>
        );
    }
}

export default GroceryList;