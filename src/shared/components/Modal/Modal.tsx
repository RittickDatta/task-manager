import React from "react";
import "./Modal.scss";
import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

interface IModal {
  onCancel: () => void;
  onConfirm: () => void;
  modalHeader: string;
}

const Modal = ({
  children,
  onCancel,
  onConfirm,
  modalHeader,
}: PropsWithChildren<IModal>) => {
  const modalRoot = document.getElementById("modal-root");

  const getModal = () => (
    <>
      <div className="overlay" onClick={onCancel}></div>
      <div className="modal">
        <div className="modal-header">
          <div className="modal-header-text">{modalHeader}</div>
        </div>
        <div className="modal-content container">{children}</div>
        <div className="modal-footer">
          <div className="modal-action">
            <button className="modal-action-btn" onClick={onCancel}>
              Cancel
            </button>
          </div>
          <div className="modal-action">
            <button className="modal-action-btn" onClick={() => onConfirm()}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return ReactDOM.createPortal(getModal(), modalRoot!);
};

export default Modal;
