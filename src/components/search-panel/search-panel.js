import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    };

    onInputChange = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        });
        this.props.onSearchChange(term)
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   onChange={this.onInputChange}
                   placeholder="type to search"
                   value={this.state.term}/>
        );
    }
}