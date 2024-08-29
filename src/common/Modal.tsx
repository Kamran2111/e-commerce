import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-end transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="bg-white rounded shadow-lg p-6 max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div>{children}</div>
        {onConfirm && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={onConfirm}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
