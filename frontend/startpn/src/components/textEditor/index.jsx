import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ value, setValue }) => {
  const Font = ReactQuill.Quill.import("formats/font");
  Font.whitelist = ["mirza", "roboto"]; // allow ONLY these fonts and the default
  ReactQuill.Quill.register(Font, true);
  
  const toolBarOptions = [
    [{ font:[] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ script: "sub" }, { script: "super" }],
    ["link", "image"],
    ["clean"],
  ];

  const module = {
    toolbar: {
      container: toolBarOptions,
     
    },
  };
  return (
    <>
      <ReactQuill
        modules={module}
        theme="snow" 
        style={{ background: "#fff", height: "200px" }} 
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default TextEditor;
