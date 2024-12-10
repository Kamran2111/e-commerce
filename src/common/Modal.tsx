interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center md:justify-end transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="bg-white rounded shadow-lg p-4 md:p-6 max-w-full md:max-w-md lg:max-w-lg w-full mx-4 md:mx-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 text-2xl">
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
