import React, { useState } from 'react';
import Error from './Error';
import { getYearsDiff, getBrandPrice, getPlanPrice } from '../helper';
import { ControlGroup, Label, Select, Button } from './StyledComponents/FormStyles';
import PropTypes from 'prop-types';

const Form = ({ setQuote, setSpinner, setRender }) => {

    // State for form's inputs
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });

    // State for errors
    const [error, setError] = useState(false);

    // Destructuring for getting data values
    const { brand, year, plan } = data;

    const stateValue = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    // Submit event
    const quote = e => {
        e.preventDefault();

        // Validate
        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Una base de 2000
        let base = 2000;

        // Obtener la diferencia de años
        let diff = getYearsDiff(year);

        // Por cada año hay que restar el 3%
        base -= (base * 0.03 * diff);

        // Americano 15%
        // Asiatico 5%
        // Europeo 30%
        base = getBrandPrice(brand, base);

        // Basico Aumenta 20%
        // Completo 50%
        base = getPlanPrice(plan, base);

        base = base.toFixed(2);

        setSpinner(true);
        setRender(false);

        setTimeout(() => {
            setSpinner(false);
            setQuote({
                quantity: Number(base), data
            });
            setRender(true);
        }, 2500);
    }

    return (
        <div>

            {error
                ? <Error
                    Message='Todos los campos son obligatorios'
                />
                : null
            }

            <form
                onSubmit={quote}
            >
                <ControlGroup>
                    <Label>Marca</Label>
                    <Select
                        onChange={stateValue}
                        name="brand"
                    >
                        <option value="">Seleccione</option>
                        <option value="Americano">Americano</option>
                        <option value="Europeo">Europeo</option>
                        <option value="Asiatico">Asiatico</option>
                    </Select>
                </ControlGroup>
                <ControlGroup>
                    <Label>Año</Label>
                    <Select
                        onChange={stateValue}
                        name="year"
                    >
                        <option value="">Seleccione</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>
                </ControlGroup>
                <ControlGroup>
                    <Label>Plan</Label>
                    <Label>
                        <input
                            type="radio"
                            name="plan"
                            value="basico"
                            onChange={stateValue}
                            checked={plan === 'basico'}
                        />
                        Básico
                    </Label>
                    <Label>
                        <input
                            type="radio"
                            name="plan"
                            value="completo"
                            onChange={stateValue}
                            checked={plan === 'completo'}
                        />
                        Completo
                    </Label>
                </ControlGroup>
                <ControlGroup>
                    <Button
                        type="submit"
                    >Cotizar</Button>
                </ControlGroup>
            </form>
        </div>
    );
}

Form.propTypes = {
    setQuote: PropTypes.func.isRequired,
    setSpinner: PropTypes.func.isRequired, 
    setRender: PropTypes.func.isRequired
}

export default Form;