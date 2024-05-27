import React, { useState } from 'react';
import './ConditionalList.css'; // Import CSS file for styling

const ConditionalList = () => {
  const [showList, setShowList] = useState(false);

  const items = ['Items 100', 'Items 200', 'Items 300', 'Items 400', 'Items 500', 'Items 600', 'Items 700', 'Items 800', 'Items 900', 'Items 1.000', 'I miss you sir benjie'];

  const toggleListVisibility = () => {
    setShowList(!showList);
  };

  return (
    <div className="conditional-list-container">
      {/* Apply container class */}
      <button className={`toggle-button ${showList ? 'active' : ''}`} onClick={toggleListVisibility}>
        {showList ? '🐟 Hide List' : '🌊 Show List'}
      </button>
      {showList && (
        <ul className="list-container">
          {/* Apply list container class */}
          {items.map((item, index) => (
            <li className="list-item" key={index}>
              {item}
            </li>
            /* Apply list item class */
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConditionalList;
