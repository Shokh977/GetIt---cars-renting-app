import React, { useState, useEffect } from "react";
import { FiAlignRight, FiX } from "react-icons/fi";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Button } from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../UI/Modal";
import { openModal } from "../../store/modalSlicer";
import { closeModal } from "../../store/modalSlicer";
import ModalCard from './../../UI/modalCard';

export const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
    console.log('working');
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleLinkClick = () => {
    setToggle(true); // Close the navbar when a link is clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      setToggle(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
const isOpen = useSelector((state) => state.modal.isOpen);
const handleClose = () => {
  dispatch(closeModal());
};

  return (
    <>
     <Modal open={isOpen} onClose={handleClose}>
       <ModalCard onClose={handleClose}/>
      </Modal>
      <nav>
        <h2>
          <NavLink to="/" className={({ isActive }) => isActive && ""}>
            Oxygen
          </NavLink>
        </h2>
        <ul className={toggle ? "nav-list" : "nav-list mob-active"}>
          <li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              end
              className={({ isActive }) => (isActive ? "active" : null)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="buyacar"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active" : null)}>
              Buy a Car
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dealers"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active" : null)}>
              Dealers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="help"
              onClick={handleLinkClick}
              className={({ isActive }) => (isActive ? "active" : null)}>
              Help
            </NavLink>
          </li>
        </ul>
        <div className="nav-log">
          <Button textOnly onClick={handleOpenModal}>
            Login
          </Button>
          <Button onClick={handleOpenModal}>Sign Up</Button>
        </div>

        <div className="toggle">
          {toggle ? (
            <FiAlignRight size={33} color="white" onClick={handleToggle} />
          ) : (
            <FiX size={33} color="white" onClick={handleToggle} />
          )}
        </div>
      </nav>
    </>
  );
};
