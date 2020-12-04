import React from 'react';
import '../Spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({spinner}) => {
    
    if (!spinner) return null;

    return (
        <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    );
}

Spinner.propTypes = {
    spinner: PropTypes.bool.isRequired
}

export default Spinner;