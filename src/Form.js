import React, { useState } from 'react';

export default function Form() {
  const [fields, setFields] = useState([{ id: 1, value: '' }]); // Initial field

  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: '' }]);
  };

  const handleInputChange = (id, event) => {
    const updatedFields = fields.map((field) => 
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setFields(updatedFields);
  };
  return (
    <div className="form-container">
      <form className="form-content">
        <h2>Request Form</h2>
        <div className="form-field">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>
        
        <div className="form-field">
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        {fields.map((field) => (
          <div key={field.id} className="form-field">
            <label>
              Item:
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleInputChange(field.id, e)}
              />
            </label>
          </div>
        ))}
         <div className="button-container">
          <div className="button-wrapper">
            <button type="find" className="finding-button">
              Find Ingredients
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
