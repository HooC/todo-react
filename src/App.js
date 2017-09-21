import React, { Component } from 'react';
import Input from './components/Input';
import List from './components/List';

class App extends Component {
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <List />
                <Input />

            </div>
        )
    }
}

export default App;