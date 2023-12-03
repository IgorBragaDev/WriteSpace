import { useState } from "react";
import { FaCheck } from "react-icons/fa";
const Checkbox = ({
  display,
  alignItems,
  justifyContent,
  gap,
  inputWidth,
  inputHeight,
  inputBorderRadius,
  inputBorder,
  
}) => {
  const [isChecked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const checkBoxContainer = {
    display: display,
    alignItems: alignItems,
    justifyContent: justifyContent,
    gap: gap,
  };

  const checkBoxInput = {
    width: inputWidth,
    height: inputHeight,
    borderRadius: inputBorderRadius,
    border: inputBorder,
  };
  const checkBoxButton = {
    border: "2px solid rgb(71, 110, 230)",
    cursor: "pointer",
    height: "30px",
    width: "40px",
    borderRadius: "10px",
    backgroundColor: "transparent",
    display : "flex",
    alignItems: "center",
    justifyContent: "center",
    
  };
  return (
    <div style={checkBoxContainer}>
      <p
        id="myCheckbox"
        onClick={handleCheckboxChange}
        style={checkBoxButton}
      >
        {isChecked && <FaCheck />}
      </p>
      <label htmlFor="myCheckbox">
        Ao clicar nesse botão, eu concordo com os temos de uso e privacidade da
        nossa empresa
      </label>
    </div>
  );
};

export default Checkbox;
