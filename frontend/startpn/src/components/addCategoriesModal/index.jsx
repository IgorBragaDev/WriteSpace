import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./styles.css";
import { insetCategorySchema } from "../../schemas/insert.category.schema";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";

const AddCategoriesModal = () => {
  const { addCategories, closeModal } = useContext(CategoriesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(insetCategorySchema) });

  return (
    <>
      <div className="modalContainer">
        <div>
          <div className="modalTitle">
            <h1 className="text_circular_small_blue_categories">
              Adicionar Categoria
            </h1>
            <button onClick={closeModal}>X</button>
          </div>

          <form
            className="formContainer"
            onSubmit={handleSubmit(addCategories)}
          >
            <div className="inputContainer">
              <label htmlFor="titlle">Titulo</label>
              <input
                id="title"
                placeholder="Insira o titulo"
                {...register("title")}
              />
              {errors.title && <p>{errors.title.message}</p>}
            </div>

            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategoriesModal;
