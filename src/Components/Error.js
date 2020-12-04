import React from 'react';
import {ErrorSC} from  './StyledComponents/ErrorStyles';
import PropTypes from 'prop-types';

const Error = ({ Message }) => (
    <ErrorSC>{Message}</ErrorSC>
);

Error.propTypes = {
    Message: PropTypes.string.isRequired
}

export default Error;