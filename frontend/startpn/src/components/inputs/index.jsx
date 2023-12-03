const Input = ({
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
  
}) => {
  const styledDiv = {
    display: display,
    gridtemplaterows: grid,
    gap: gap,
  };
  const styledInput = {
    height: inputHeight,
    width: inputWidth,
    maxWidth: inputMaxWidth,
    minWidth: inputMinWidth,
    borderRadius: inputBorderRadius,
    border: inputBorder,
  };
  return (
    <>
      <div style={styledDiv}>
        <label className={labeltypography} htmlFor={htmlFor}>{name}</label>
        <input
        className={placeholdertypography}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          style={styledInput}
          {...handle}
        />
      </div>
    </>
  );
};
export default Input;
