import React from 'react';
import { Snackbar, SnackbarContent, Typography } from '@material-ui/core';
import styles from './SnackbarUtil.css.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

class SnackbarUtil extends React.Component {
    message = '';
    styleBar = '';

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    openSnackbar = (message = 'Algo deu errado...', styleBar = 'warn') => {
        this.message = <Typography>{this.defineMessage(styleBar)} {message}</Typography>;
        this.styleBar = styles[styleBar];
        this.setState({ isActive: true }, () => {
            setTimeout(() => {
                this.setState({ isActive: false })
            }, 2000);
        });
    }

    defineMessage = (styleBar) => {
        let snackIcon;
        if (styleBar === 'success') {
            snackIcon = <FontAwesomeIcon icon={faCheckCircle} />;
        } else if (styleBar === 'error') {
            snackIcon = <FontAwesomeIcon icon={faExclamationCircle} />;
        } else if (styleBar === 'warn') {
            snackIcon = <FontAwesomeIcon icon={faExclamationTriangle} />;
        } else if (styleBar === 'info') {
            snackIcon = <FontAwesomeIcon icon={faInfoCircle} />;
        }

        return snackIcon;
    }

    render() {
        const { isActive } = this.state;

        return (
            <Snackbar
                anchorOrigin={
                    { vertical: 'bottom', horizontal: 'center' }
                }
                open={isActive}
            >
                <SnackbarContent style={this.styleBar} message={this.message} />

            </Snackbar>
        )
    }
}

export default SnackbarUtil