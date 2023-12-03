import { Link } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/inputs";
import navi from "../../images/svg/seta.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import "./createCard.css";

const CreateCard = () => {
  const { categories, createCard } = useContext(CategoriesContext);
  const { register, handleSubmit } = useForm();


  return (
    <>
      <div className="createCardPageContainer">
        <header className="headerContainer">
          <div className="headerNaviBox">
            <div className="navigationCircle">
              <Link to="/dashboard">
                <img src={navi} />{" "}
              </Link>
            </div>
            <h1 className="text_circular_color_black_big_card">Criar card</h1>
          </div>
        </header>
        <form className="createCardForm" onSubmit={handleSubmit(createCard)}>
          <Input
            htmlFor={"Nome"}
            name={"Nome"}
            labeltypography={"text_circular_label"}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}
            inputBorder={"1px solid #D7D7D7"}
            inputBorderRadius={"10px"}
            placeholder={"Insira um nome"}
            placeholdertypography={"text_circular_placeholder"}
            inputWidth={"100%"}
            inputHeight={"40px"}
            type={"text"}
            handle={register("title")}
          />
          <div className="categoriesSelectBox">
            <label htmlFor="categorie" className="text_circular_label">
              Categoria
            </label>
            <select
              name="categorie"
              id=""
              className="categorieSelect text_circular_placeholder"
              {...register("id_category")}
            >
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.title}
                </option>
              ))}
            </select>
          </div>
          <div className="textAreaBox">
            <textarea
              className="text_circular_placeholder"
              name=""
              id=""
              cols="30"
              rows="15"
              placeholder="Insira o texto"
              {...register("text")}
            ></textarea>
          </div>
          <Button
            buttonText={"Criar"}
            backgroundColor={"#476EE6"}
            buttonTypography={"text_circular_color_white_title_card"}
            border={"none"}
            borderRadius={"60px"}
            height={"30px"}
            width={"70px"}
            position={"absolute"}
            top={"18px"}
            rigth={"15px"}
          />
        </form>
      </div>
    </>
  );
};

export default CreateCard;
