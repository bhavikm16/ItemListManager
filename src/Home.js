import React, { useState, useEffect } from 'react';
import './Home.css'; // Assuming a CSS file for styling

function Home() {
    const [items, setItems] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim() === '') {
            setErrorMessage('Item cannot be empty.');
            return;
        }

        if (items.includes(inputValue.trim())) {
            setErrorMessage('Duplicate items are not allowed.');
            return;
        }

        setItems([...items, inputValue.trim()]);
        setInputValue('');
        setErrorMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddItem();
        }
    };

    const handleRemoveItem = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
    };

    return (
        <div className="home-container">
            <h1>Item List Manager</h1>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Enter an item"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className="item">
                        {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
