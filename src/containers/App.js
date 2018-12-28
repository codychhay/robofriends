import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";

class App extends Component {

    constructor() {
        super();
        this.state = {
            searchField : '',
            robots : []
        }
    }

    // Capture searchField value onChange
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render () {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        return robots.length === 0 ?
            <h1 className='tc'>Loading</h1> :
            (
                <div className="tc">
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
    // Get run after App component is mounted to root element in html
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users}));
    }
}

export default App;