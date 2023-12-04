import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
const InputPassword = ({
  htmlFor,
  id,
  type,
  name,
  placeholder,
  display,
  grid,
  gap,
  inputHeight,
  inputWidth,
  inputMaxWidth,
  inputMinWidth,
  inputBorderRadius,
  inputBorder,
  labeltypography,
  placeholdertypography,
  handle,
  marginBottomDivInputsLabel,
  flexDirection,
  divWidth,
  divMaxWidth,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const styledDiv = {
    display: display,
    gridTemplateRows: grid,
    gap: gap,
    marginBottom: marginBottomDivInputsLabel,
    flexDirection: flexDirection,
    width: divWidth,
    maxWidth: divMaxWidth,
  };

  const styledInput = {
    height: inputHeight,
    width: inputWidth,
    maxWidth: inputMaxWidth,
    minWidth: inputMinWidth,
    borderRadius: inputBorderRadius,
    border: inputBorder,
    position: "relative",
  };
  const eyeIconStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  };
  const styledInputContainer = {
    position: "relative",
    width: "100%",
  };

  return (
    <>
      <div style={styledDiv}>
        <label className={labeltypography} htmlFor={htmlFor}>
          {name}
        </label>
        <div style={styledInputContainer}>
          <input
            className={placeholdertypography}
            type={showPassword ? "text" : "password"}
            name={name}
            id={id}
            placeholder={placeholder}
            style={styledInput}
            {...handle}
          />
          <span
            style={eyeIconStyle}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <LuEyeOff /> : <LuEye />}
          </span>
        </div>
      </div>
    </>
  );
};

export default InputPassword;
