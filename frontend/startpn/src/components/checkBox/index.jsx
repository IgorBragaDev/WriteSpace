import { useState } from "react";

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
  return (
    <div style={checkBoxContainer}>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={checkBoxInput}
      />
      <label htmlFor="myCheckbox">
        Ao clicar nesse botão, eu concordo com os temos de uso e privacidade da
        nossa empresa
      </label>
    </div>
  );
};

export default Checkbox;
