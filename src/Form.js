import React, { useState } from 'react';

export default function Form() {
  const [fields, setFields] = useState([{ id: 1, value: '' }]); // Initial field
  const [showNewForm, setShowNewForm] = useState(false); // State to control which form to display

  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: '' }]);
  };

  const handleInputChange = (id, event) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setFields(updatedFields);
  };

  const handleFindIngredientsClick = () => {
    // Change the state to show the new form when the button is clicked
    setShowNewForm(true);
  };

  return (
    <div className="form-container">
      {!showNewForm ? (
        // The initial form
        <form className="form-content">
          <h2>Recepie Finder</h2>
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
              <button type="button" onClick={addField} className="add-field-button">
                Add Item
              </button>
            </div>
            <div className="button-wrapper">
              <button
                type="button"
                onClick={handleFindIngredientsClick}
                className="finding-button"
              >
                Find Ingredients
              </button>
            </div>
          </div>
        </form>
      ) : (
        // The new form to show after button press
        <form className="form-content">
          <h2>New Form</h2>
          <div className="form-field">
            <label>
              New Information:
              <input type="text" name="newInfo" />
            </label>
          </div>

          <div className="button-container">
            <div className="button-wrapper">
              <button type="button" onClick={() => setShowNewForm(false)} className="finding-button">
                Go Back
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
