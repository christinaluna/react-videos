import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    margin-bottom: 2em;
`

const Heading = styled.h1`
    color: palevioletred;
`

const Input = styled.input`
    outline: 2px solid #ea9f9f;
    padding: 1em;
    margin: 0.5em 0;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
    width: 100%;
`

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <Heading>Video Search</Heading>
                <Input
                    type="text"
                    value={this.state.term}
                    onChange={this.onInputChange}    
                />
            </Form>
        )
    }
}

export default SearchBar;