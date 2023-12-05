import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import { insetCategorySchema } from "../../schemas/insert.category.schema";

// Componente do modal para editar categoria
const EditCategoriesModal = ({ categoryId, closeModal }) => {
  const { editCategories } = useContext(CategoriesContext);

  const {
    register,
    handleSubmit,
    setValue, // Adicione a função setValue do react-hook-form para preencher os campos com os valores existentes
    formState: { errors },
  } = useForm({
    resolver: zodResolver(insetCategorySchema),
  });

  // Função para popular os campos do formulário com os valores existentes da categoria
  const populateFormFields = (category) => {
    setValue("title", category.title);
    // Adicione outros campos conforme necessário
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
              {errors.title && <p>{errors.title.message}</p>}
            </div>

            <button>Salvar Alterações</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCategoriesModal;
