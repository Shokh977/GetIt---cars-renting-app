import React, { useState } from "react";
import "./modal-card.css";
import { Button } from "./Button";
import { IoClose } from "react-icons/io5";

const ModalCard = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactNumber('')
    setEmail('')
    setFirstName('')
    setLastName('')
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-header">
        <h1>Sign-up</h1>
        <span className="close" onClick={onClose}>
          <IoClose size={34} />
        </span>
      </div>
      <div className="form-input">
        <div className="names">
        {" "}
        <div className="form-group">
          {/* <label htmlFor="firstName">First Name:</label> */}
          <input
            placeholder="First Name"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="lastName">Last Name:</label> */}
          <input
            placeholder="Last Name"
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="contact">
        {" "}
        <div className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            placeholder="Email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="contactNumber">Contact Number:</label> */}
          <input
            placeholder="Contact Number"
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
      </div>
      </div>
      
      <div className="form-btn">
        <Button textOnly type="submit">Login</Button>
        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
};

export default ModalCard;
