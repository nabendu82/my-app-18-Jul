import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleUserIdChange = event => {
        this.setState({
            userId: event.target.value
        })
    }

    handleTitleChange = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleBodyChange  = event => {
        this.setState({
            body: event.target.value
        })
    }

    handleSubmit = async event => {
        event.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const settings = {
            method: 'POST',
            header: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userId">UserId </label>
                    <input type="text" id="userId" value={this.state.userId} onChange={this.handleUserIdChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" value={this.state.title} onChange={this.handleTitleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea id="body" value={this.state.body} onChange={this.handleBodyChange}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default PostForm
