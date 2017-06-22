import React from 'react'
import appendCharCode from '../helpers/appendCharCode'

const KEYS = {
    RETURN: 13,
    ENTER: 14,
}

const defaultProps = {
    onKeyDown: () => {}
}

class AutoInput extends React.Component {
    constructor(props) {
        super(props)
        const { options } = props

        this.state = {
            options: props.options,
            value: 'y',
            remaining: ''
        }

        this.selectOption  = this.selectOption.bind(this)
        this.handleChange  = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    componentWillUpdate() {
        console.log(this.state)
    }

    selectOption() {
        const { value, remaining } = this.state
        this.setState({
            value: value + remaining,
            remaining: ''
        })
        // this.handleChange()
    }

    handleChange(e) {
        const { options, value } = this.state
        const newValue = e.target.innerText
        const words    = newValue.split(/\s/)
        const word     = words[words.length - 1]

        let possible  = options.find(p => p.startsWith(word))
        let remaining = possible
            ? possible.substring(possible.indexOf(word))
            : '';

        this.setState({
            value:     newValue,
            remaining
        })
    }

    handleKeyDown(e) {
        const keyCode = e.which

        switch (keyCode) {
            case KEYS.ENTER:
            case KEYS.RETURN:
                e.preventDefault()
                this.selectOption()
            break;
            default:
            break;
        }

        this.props.onKeyDown(e)
    }

    render() {
        return(
            <div
                className   = { this.props.className }
                onKeyDown   = { this.handleKeyDown }
                onInput     = { this.handleChange }
                contentEditable
            >
            <span>{ this.state.value }</span><span id = {'kfg'}>{ this.state.remaining }</span>
            </div>
        )
    }
}

AutoInput.defaultProps = defaultProps

export default AutoInput