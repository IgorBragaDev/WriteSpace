import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="myCheckbox">
        Ao clicar nesse botão, eu concordo com os temos de uso e privacidade da
        nossa empresa
      </label>
    </div>
  );
};

export default Checkbox;
