import React from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList } from '../actions';

class TrelloActionButton extends React.Component {

    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({
            formOpen: true
        });
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addList(text))
        }

        return;
    }

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'Add another list' : 'Add another card'
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

        return (
            <div
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
                onClick={this.openForm}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = () => {

        const { list } = this.props;
        const placeholder = list ? "Enter list title..." : "Enter a title for this card..."
        const buttonTitle = list ? 'Add List' : 'Add Card'

        return (
            <div>
                <Card style={{
                    overflow: 'visible',
                    minHeight: 80,
                    minWidth: 272,
                    padding: '6px 8px 2px'
                }}>
                    <TextareaAutosize
                        placeholder={placeholder}
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            outline: 'none',
                            border: 'none',
                            overflow: 'hidden',
                        }}
                    />
                </Card>
                <div style={styles.formButtonGroup} >
                    <Button
                        onMouseDown={this.handleAddList}
                        variant='contained'
                        style={{ color: 'white', backgroundColor: '#5aac44' }}
                    >
                        {buttonTitle} {' '}
                    </Button>
                    <Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.state.formOpen ? this.renderForm() : this.renderAddButton()
        );
    };
}

const styles = {
    openForButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
    }
}

export default connect()(TrelloActionButton);