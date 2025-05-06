import React, { useRef, useState, useEffect } from "react";
import "./App.css";

const CertificationsToggle = ({ label = "Certifications", contentType = "certifications", children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const [visible, setVisible] = useState(false);
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setVisible(true);
      setTimeout(() => {
        setMaxHeight(contentRef.current.scrollHeight + "px");
      }, 10);
    } else {
      setMaxHeight("0px");
      setVisible(false);
    }
  }, [isOpen, children]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${contentType}-column column`} ref={wrapperRef}>
      <div className="certification-item certification-item-header">
        <h1>
          <span id="certifications-letter">{label}</span>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <button className="view-button" onClick={handleClick}>
            {isOpen ? `Hide ${label}` : `View ${label}`}
          </button>
        </div>
      </div>
      <div
        ref={contentRef}
        className={`certifications-content${isOpen ? " open" : ""}`}
        style={{
          overflow: "hidden",
          transition: "max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
          maxHeight: isOpen ? maxHeight : "0px",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          visibility: visible ? "visible" : "hidden"
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CertificationsToggle;
