import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import { insetCategorySchema } from "../../schemas/insert.category.schema";

const EditCategoriesModal = ({ categoryId, closeModal }) => {
  const { editCategories } = useContext(CategoriesContext);

  const {
    register,
    handleSubmit,
    setValue, 
  } = useForm({
    resolver: zodResolver(insetCategorySchema),
  });

  const populateFormFields = (category) => {
    setValue("title", category.title);
  };


  const handleEditCategory = (data) => {
    editCategories( data);
    closeModal(); 
  };

  return (
    <>
      <div className="modalContainer">
        <div>
          <div className="modalTitle">
            <h1 className="text_circular_small_blue_categories">
              Editar Categoria
            </h1>
            <button onClick={closeModal}>X</button>
          </div>

          <form
            className="formContainer"
            onSubmit={handleSubmit(handleEditCategory)}
          >
            <div className="inputContainer">
              <label htmlFor="title">Título</label>
              <input
                id="title"
                placeholder="Insira o título"
                {...register("title")}
              />
            </div>

            <button>Salvar Alterações</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCategoriesModal;
