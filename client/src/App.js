import React ,{useState} from 'react'
import axios from 'axios'
import {SaveAs} from 'file-saver';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  })

 const handleChange = ({target: {value, name}}) =>{setData({[name]: value})}
 const createAndDownloadPdf = () =>{
  axios.post('/create-pdf', data)
 }

  return (
    <div className="App">
        <input type='text' placeholder='Name' name='name' onChange={handleChange} />
        <input type='number' placeholder='Reciept Id' name='receiptId' onChange={handleChange} />
        <input type='number' placeholder='Price 1' name='price1' onChange={handleChange} />
        <input type='number' placeholder='price 2' name='price2' onChange={handleChange} />

        <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;
