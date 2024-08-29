import { CustomErrorMessageProps } from "../types/errorType";

const CustomErrorMessage: React.FC<CustomErrorMessageProps> = ({
  message,
  name,
}) => (
  <div
    className="bg-red-100 border absolute z-50 border-red-400 text-red-700 px-4 py-3 rounded absolute left-[0] bottom-[0]"
    role="alert"
  >
    <strong className="font-bold">{name} ошибка: </strong>
    <span className="block sm:inline">{message}</span>
  </div>
);

export default CustomErrorMessage;
