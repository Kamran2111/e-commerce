import { useState } from "react";

interface ExpandableTextProps {
  text: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p
        className={`transition-max-height duration-400 ease-in-out ${
          isExpanded ? "max-h-[200px]" : "max-h-[50px] overflow-hidden "
        }`}
      >
        {text}
      </p>
      <button
        onClick={toggleExpansion}
        className="text-blue-500 hover:underline"
      >
        {isExpanded ? "Свернуть" : "Читать дальше"}
      </button>
    </div>
  );
};

export default ExpandableText;
