import React, { useState } from 'react';
import './index.css'; 

function No() {
  const [isRotate, setIsRotate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopVisible, setIsPopVisible] = useState(false);

  const handleToggleClick = () => {
    setIsRotate(!isRotate);
    setIsOpen(!isOpen);
    setIsPopVisible(!isPopVisible);
  };

  return (
    <div>
      <div className={`menuc ${isOpen ? '' : ''}`} onClick={handleToggleClick}>
        <ul>
          <li className="plus">
            <span className={`add ${isRotate ? 'rotate' : ''}`}>
              <span className="icon-plus text-white">+</span>
            </span>
          </li>
        </ul>
      </div>

      {isPopVisible && (
        <div className="pop">
          <ul>
            <li>text</li>
            <li>photo</li>
            <li>link</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default No;
