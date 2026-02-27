import React, { useState } from "react";

function App() {
  const mobiles = [
    { name: "Samsung Galaxy S23", price: 75000 },
    { name: "iPhone 15", price: 80000 },
    { name: "OnePlus 12", price: 65000 },
    { name: "Realme GT", price: 30000 }
  ];

  const [selectedMobile, setSelectedMobile] = useState(mobiles[0]);
  const [quantity, setQuantity] = useState(1);

  const subtotal = selectedMobile.price * quantity;
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Mobile Billing System</h2>

      <label>Select Mobile:</label>
      <select
        onChange={(e) =>
          setSelectedMobile(
            mobiles.find((m) => m.name === e.target.value)
          )
        }
      >
        {mobiles.map((mobile, index) => (
          <option key={index}>{mobile.name}</option>
        ))}
      </select>

      <br /><br />

      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <hr />

      <h3>Bill Summary</h3>
      <p>Price: ₹{selectedMobile.price}</p>
      <p>Subtotal: ₹{subtotal}</p>
      <p>GST (18%): ₹{gst}</p>
      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default App;