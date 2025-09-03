import React, { useState } from "react";

export default function Greeting() {
  const [name, setName] = useState("");

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Personalized Greeting</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          display: "block",
        }}
      />

      {name && <h3 style={{ color: "#2c3e50" }}>Hello, {name}!</h3>}
    </div>
  );
}
