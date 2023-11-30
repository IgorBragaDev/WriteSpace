const Input = ({ htmlFor, id, type, name, placeholder,display, grid, gap }) => {
    const styledInput = {
        display: display,
        gridtemplaterows: grid,
        gap: gap 
    }
  return (
    <>
    <div style={styledInput}>
      <label htmlFor={htmlFor}>{name}</label>
      <input type={type} name={name} id={id} placeholder={placeholder}/>
    </div>
    </>
  );
};
export default Input;
