import React, { useState } from "react";
import { Container,Row,Col } from "reactstrap";
import currencyImg from '../assets/images/currency.png'
import Newsletter from './../shared/Newsletter'

import "../styles/fxtool.css";

const App = () => {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  const convertCurrency = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/convert?from=${from}&to=${to}&amount=${amount}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error fetching exchange rates", error);
      // Update state or show error message to the user
    }
  };

  return (
    <>
    <section>
      <Container className="currency__box">
      <Row>
        <Col>
        <div className="currency__container d-flex justify-content-between">
              <div className="currency__img">
                <img src={currencyImg} alt="" />
           </div>
          <div className="App">
      <header className="App-header">
        <h1>FX-Tool</h1>
        <div>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="USD">US Dollers</option>
            <option value="EUR">Eurpoe Euro</option>
            <option value="GBP">UK Pound sterling</option>
            <option value="INR">Indian Rupee</option>
            <option value="JPY">Japanese yen</option>
            <option value="IQD">Kuwaiti Dinar</option>
            <option value="SAR">Saudi Riyal</option>
            <option value="RUB">Russian Ruble</option>





            {/* Add more currencies as needed */}
          </select>
          <span>To</span>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="USD">US Dollers</option>
            <option value="EUR">Eurpoe Euro</option>
            <option value="GBP">UK Pound sterling</option>
            <option value="INR">Indian Rupee</option>
            <option value="JPY">Japanese yen</option>
            <option value="IQD">Kuwaiti Dinar</option>
            <option value="SAR">Saudi Riyal</option>
            <option value="RUB">Russian Ruble</option>





            {/* Add more currencies as needed */}
          </select>
          <button onClick={convertCurrency}>Convert</button>
        </div>
        {result && (
          <h2>
            {amount} {from} = {result.toFixed(2)} {to}
          </h2>
        )}
      </header>
    </div>
    </div>
        </Col>
      </Row>
      </Container>
    </section>
       <Newsletter/>
    </>
  );
};
 


export default App;
