import React from 'react';
import { SummaryContainerSC } from './StyledComponents/SummaryStyles';
import PropTypes from 'prop-types';

const Summary = ({ data, render }) => {
    const { brand, year, plan } = data;

    if ((brand.trim() === '' || year.trim() === '' || plan.trim() === '') || !render) return null

    return (
        <SummaryContainerSC>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Año: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </SummaryContainerSC>
    );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired,
    render: PropTypes.bool.isRequired
}

export default Summary;