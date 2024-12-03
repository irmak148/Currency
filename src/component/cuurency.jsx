import axios from "axios";
import { useState } from "react";
import {toast } from 'react-toastify';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';


const url = 'https://api.freecurrencyapi.com/v1/latest?apikey={the key freecurency gave you}&currencies=';

function Currency() {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  async function calculate() {
    try {
      // get api from freecurrencyapi
      const fromResponse = await axios.get(url + fromCurrency);
      const toResponse = await axios.get(url + toCurrency);

      const fromRate = fromResponse.data.data[fromCurrency];
      const toRate = toResponse.data.data[toCurrency];

      const calc = ((amount / fromRate) * toRate).toFixed(2);
      setResult(calc);
      toast.success('conversion successful')
    } catch (error) {
       toast.error(`conversion failure
        ${error}`)
    }
  }

  function change() {
    const keepVal = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(keepVal);
  }

  return (
    <div className="p-5" onKeyDown={(e)=>{
      if(e.key === "Enter") {
        calculate()
      }
      
        if (e.key === 'Tab') {
          change();
        }
    }}>
      <h1 className="mb-5">Foreign Exchange</h1>
      <div className="text-center">
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
          <input
            type="number"
            className="form-control me-2"
            value={amount}
            onInput={(e) => setAmount(e.target.value)}
          />
          <select
            id="currency-1"
            className="form-select me-2"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="USD">Dolar</option>
            <option value="EUR">Euro</option>
            <option value="TRY">Tl</option>
          </select>
           
           <Button variant="contained" color="success">{<ArrowForwardIcon/>}</Button>
          

          <select
            id="currency-2"
            className="form-select me-2"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="USD">Dolar</option>
            <option value="EUR">Euro</option>
            <option value="TRY">Tl</option>
          </select>
          <input
            type="number"
            className="form-control me-2"
            value={result}
            readOnly
          />
        </Stack>
         <Button variant="contained" color='success' sx={{margin:'1rem'}} onClick={calculate}>
          Convert
        </Button>
      </div>
    </div>
  );
}

export default Currency;