const Button = ({
  type,
  buttonText,
  maxWidth,
  width,
  minWidth,
  height,
  borderRadius,
  border,
  backgroundColor,
  buttonTypography,
}) => {
  const buttonStyle = {
    height: height,
    width: width,
    maxWidth: maxWidth,
    minWidth: minWidth,
    borderRadius: borderRadius,
    border: border,
    backgroundColor: backgroundColor,
  };
  return (
    <>
      <button className={buttonTypography} style={buttonStyle} type={type}>
        {buttonText}
      </button>
    </>
  );
};

export default Button;
