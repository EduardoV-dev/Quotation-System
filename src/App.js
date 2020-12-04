import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Summary from './Components/Summary';
import Result from './Components/Result';
import Spinner from './Components/Spinner';
import { Container } from './Components/StyledComponents/AppStyles';

function App() {

  // State for the quote
  const [quote, setQuote] = useState({
    quantity: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  });

  // State for showing when to render Result and Summary Component when submiting second time
  const [render, setRender] = useState(false);

  // Destructuring for quote so that it can be passed to summary component
  const { quantity, data } = quote;

  // State for spinner
  const [spinner, setSpinner] = useState(false);

  return (
    <Container>
      <Header
        title="Cotizador de Seguro"
      />

      <Form
        setQuote={setQuote}
        setSpinner={setSpinner}
        setRender={setRender}
      />

      <Spinner
        spinner={spinner}
      />

      <Summary
        data={data}
        render={render}
        />

      <Result
        quantity={quantity}
        render={render}
      />
    </Container>
  );
}

export default App;
