import React from 'react';
import { ResultContainerSC } from './StyledComponents/ResultStyles';
import PropTypes from 'prop-types';

const Result = ({ quantity, render }) => {

    if (quantity === 0 || !render) return null;

    return (
        <ResultContainerSC>
            EL TOTAL ES: $ {quantity}
        </ResultContainerSC>
    )
}

Result.propTypes = {
    quantity: PropTypes.number.isRequired,
    render: PropTypes.bool.isRequired
}

export default Result;