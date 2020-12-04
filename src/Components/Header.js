import React from 'react';
import { HeaderSC } from './StyledComponents/HeaderStyles';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <HeaderSC>
            <h1>{title}</h1>
        </HeaderSC>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;