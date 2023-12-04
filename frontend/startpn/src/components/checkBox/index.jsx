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
  labelTypograth,
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
    width: "30px",
    borderRadius: "12px",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={checkBoxContainer}>
      <p id="myCheckbox" onClick={handleCheckboxChange} style={checkBoxButton}>
        {isChecked && <FaCheck />}
      </p>
      <label htmlFor="myCheckbox" className={labelTypograth}>
        Ao clicar nesse botão, eu concordo com os temos de uso e privacidade da
        nossa empresa
      </label>
    </div>
  );
};

export default Checkbox;
