import React, { useState } from "react";

function ToyList() {
  // Mock data - replace with API or context in real app
  const [toys, setToys] = useState([
    { id: 1, name: "Lego Set", description: "Building blocks", available: true },
    { id: 2, name: "RC Car", description: "Remote controlled car", available: false },
    { id: 3, name: "Puzzle", description: "500-piece puzzle", available: true },
  ]);

  const handleRent = (id) => {
    // Logic to rent a toy: here we just mark it unavailable in local state
    setToys((prevToys) =>
      prevToys.map((toy) =>
        toy.id === id ? { ...toy, available: false } : toy
      )
    );
    alert("Toy rented successfully.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Toy List</h1>
      <p>Welcome to the toy list page. You can view available toys here.</p>

      <table border="1" cellPadding="8" cellSpacing="0" style={{ marginTop: "20px", width: "100%", maxWidth: "600px" }}>
        <thead>
          <tr>
            <th>Toy Name</th>
            <th>Description</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map(({ id, name, description, available }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{description}</td>
              <td>{available ? "Available" : "Rented"}</td>
              <td>
                {available ? (
                  <button onClick={() => handleRent(id)}>Rent</button>
                ) : (
                  <button disabled>Not Available</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToyList;