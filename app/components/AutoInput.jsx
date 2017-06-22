import React from 'react'

export default class autoInput extends React.component {
    constructor(props) {
        super(props)
        const {suggestions} = props

        this.state = {
            suggestions: props.suggestions,
            value: ''
        }
    }

    onChange(event, { newValue }) {
        this.setState({
            value: newValue
        })
    }

    render() {
        return(
            <div className = {this.props.className}>
                <StyledInput onChange={this.onChange}/>
            </div>
        )
    }
}