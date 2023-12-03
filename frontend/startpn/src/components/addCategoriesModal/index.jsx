import Input from "../inputs";
import "./styles.css";

const AddCategoriesModal = () => {
  return (
    <>
      <div className="modalContainer">
        <div>
          <div className="modalTitle">
            <h1 className="text_circular_small_blue_categories">
              Adicione a categoria
            </h1>
            <button>X</button>
          </div>

          <form className="formContainer">
            <div className="inputContainer">
              <label htmlFor="titlle">Titulo</label>
              <input id="title" placeholder="Insira o titulo"></input>
            </div>

            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategoriesModal;
