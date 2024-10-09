import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../store/modalSlicer";
import "./modal.css";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  const handleClose = () => {
    dialog.current.close();
  };

  return createPortal(
    <>
      {open && <div className="modal-overlay"></div>}
      <dialog ref={dialog} onClose={onClose}>
        {children}
      </dialog>
    </>,
    document.getElementById("modal")
  );
}
