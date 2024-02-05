module.exports = ({name, receiptId, price1, price2}) =>{
    const today = new Date();
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Receipt</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 20px;
    }

    .receipt {
      border: 2px solid #333;
      padding: 20px;
      width: 300px;
      margin: auto;
    }

    .header {
      text-align: center;
      font-size: 1.2em;
      margin-bottom: 10px;
    }

    .details {
      margin-bottom: 10px;
    }

    .details label {
      font-weight: bold;
      margin-right: 5px;
    }

    .total {
      font-weight: bold;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <div class="receipt">
    <div class="header">
      <h2>Receipt</h2>
    </div>

    <div class="details">
      <p><label>Date:</label> ${`${today.getDate()}. ${today.getMonth()}. ${today.getFullYear()}`}</p>
      <p><label>Name:</label> ${name}</p>
      <p><label>Receipt ID:</label> ${receiptId}</p>
      <p><label>Price 1:</label> ${price1}</p>
      <p><label>Price 2:</label> ${price2} </p>
    </div>

    <div class="total">
      <p>Total:  ${Number(price1) + Number(price2)}</p>
    </div>
  </div>

</body>
</html>

    
    
    `
}