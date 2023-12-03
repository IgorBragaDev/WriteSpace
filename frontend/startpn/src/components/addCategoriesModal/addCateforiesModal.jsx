import Input from "../inputs";

const AddCategoriesModal = () => {
  return (
    <>
      <div>
        <h1>Adicione a categoria</h1>

        <div>
          <form>
            <Input name={"Adicione a categoria"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategoriesModal;
