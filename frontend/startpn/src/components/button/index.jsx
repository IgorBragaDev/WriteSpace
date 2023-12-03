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
  marginTop,
  position,
  top,
  rigth
}) => {
  const buttonStyle = {
    height: height,
    width: width,
    maxWidth: maxWidth,
    minWidth: minWidth,
    borderRadius: borderRadius,
    border: border,
    backgroundColor: backgroundColor,
    marginTop : marginTop,
    position : position,
    top: top,
    right: rigth
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
