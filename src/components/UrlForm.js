import React, { Component } from 'react';
import axios from 'axios';
import './UrlForm.css';

class UrlForm extends Component {
    constructor(props) {
        super(props);
        this.state = { url: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        var urlVal = this.state.url;
        console.log(urlVal);
        axios.post('/api/parser', urlVal)
            .then(res => console.log(res.data)
            .catch(err => console.log('ERROR: can\'t post URL'))
            );
        this.setState({ url: "" });
    }
    render() { 
        return (
            <form className="UrlLinkForm" onSubmit={this.handleSubmit}>
                <label htmlFor='url'>Your URL link:</label>
                <input
                    type='text'
                    placeholder='http://...'
                    id='url'
                    name='url'
                    value={this.state.url}
                    onChange={this.handleChange}
                />
                <button>Parse!</button>
            </form>
        );
    }
}
 
export default UrlForm;