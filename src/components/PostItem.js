import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const h1Styled = {
    backgroundColor: 'yellow',
    color: 'darkmagenta',
    padding: '5px'
}

const StyledPara = styled.p`
    font-size: 1em;
    text-align: center;
    color: darkblue;
    font-weight: bold;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={h1Styled}>ID: {post.id}</h1>
            <h2 style={{ backgroundColor: 'lightgreen', padding: '2px' }}>Title: {post.title}</h2>
            <StyledPara>{post.body}</StyledPara>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem