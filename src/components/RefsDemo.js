import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.userRef = React.createRef();
        this.commentRef = React.createRef();
    }

    componentDidMount() {
        this.userRef.current.focus()
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.userRef.current.value + ' - ' + this.commentRef.current.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" ref={this.userRef} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" ref={this.commentRef}></textarea>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RefsDemo
