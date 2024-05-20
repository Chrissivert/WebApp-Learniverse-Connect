import React, { useState, useEffect } from "react";
import "./currencyInfoPopup.css";

const CurrencyInfoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyle, setPopupStyle] = useState({});

  useEffect(() => {
    // Function to dynamically adjust popup position
    const adjustPopupPosition = () => {
      const button = document.querySelector(".info-popup button");
      const popup = document.querySelector(".popup-content");
      if (button && popup) {
        const buttonRect = button.getBoundingClientRect();
        const popupRect = popup.getBoundingClientRect();
        const newPopupStyle = {};
        if (buttonRect.left + popupRect.width > window.innerWidth) {
          // If popup extends beyond right edge of screen, position it to the left of the button
          newPopupStyle.left = `${buttonRect.left - popupRect.width}px`;
        } else {
          // Otherwise, position it to the right of the button
          newPopupStyle.left = `${buttonRect.left}px`;
        }
        setPopupStyle(newPopupStyle);
      }
    };

    // Call adjustPopupPosition when the window is resized
    window.addEventListener("resize", adjustPopupPosition);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", adjustPopupPosition);
    };
  }, []);

  const handleHover = () => {
    setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Wait for 1 second before showing popup
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="info-popup"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <button></button> {/* Button to trigger the popup */}
      {showPopup && (
        <div className="popup-content" style={popupStyle}>
          {/* Use the <br> tag to add newlines */}
          <p>
            Search for title of course or tags
            <br />
            <br />
            Change currency in profile page
          </p>{" "}
          {/* Content to display in the popup */}
        </div>
      )}
    </div>
  );
};

export default CurrencyInfoPopup;
