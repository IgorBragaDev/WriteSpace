import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ value, setValue }) => {
  const toolBarOptions = [
    [{ font: [] }],
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
      // handlers: {
      //   // Adiciona um manipulador para tratar a inserção de links
      //   link: () => {
      //     const url = window.prompt("Insira o URL do link:");
      //     if (url) {
      //       const editor = Quill.getEditor();
      //       const selection = editor.getSelection();
      //       editor.format("link", url);
      //       editor.setSelection(selection);
      //     }
      //   },
      // }
    },
  };
  return (
    <>
      <ReactQuill
        modules={module}
        theme="snow"
        value={value}
        onChange={setValue}
      />
    </>
  );
};

export default TextEditor;
