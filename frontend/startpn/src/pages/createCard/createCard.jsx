import { Link } from "react-router-dom";
import Button from "../../components/button";
import Input from "../../components/inputs";
import navi from "../../images/svg/seta.svg";
import vector2 from "../../images/svg/vector2.svg"
import userIcon from "../../images/png/Bitmap.png";
import messageIcon from "../../images/svg/message.svg";
import settingIcon from "../../images/svg/setting.svg";
import taskIcon from "../../images/png/task-square.png";
import chessIcon from "../../images/svg/Vector.svg";
import userIconMenu from "../../images/svg/user-icon.svg";
import exitIcon from "../../images/svg/logout.svg";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categoriesContext";
import "./createCard.css";
import Logo from "../../components/logo";

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
        <div className="headerFromWebVersion">
              <h1 className="text_circular_color_blue_title">Playbooks</h1>
              <div className="headerFromWebVersionDiv">
                <img src={userIcon} alt="" />
                <p className="text_circular_color_black_card_content">Igor Braga</p>
                <img src={vector2} alt="" />
              </div>
        </div>
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
            handle={register("name")}
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

        <div className={`sideMenuBar`}>
            <div className="sideMenuBarCloseButtonDiv ">
              <Logo width={"153px"} heigth={"39px"} />
              <button
                className="text_circular_small_blue_categories_bold"
          
              >
                x
              </button>
            </div>
            <ul className="text_circular_side_menu_color_grey sideMenuItensContainer ">
              <li className="sideMenuItens">
                <img src={chessIcon} alt="" />
                Playbooks
              </li>
              <li className="sideMenuItens">
                <img src={taskIcon} alt="" />
                Exemplo
              </li>
              <li className="sideMenuItens">
                <img src={messageIcon} />
                Exemplo
              </li>
              <li className="sideMenuItens">
                <img src={settingIcon} alt="" />
                Exemplo
              </li>
              <li className="sideMenuItens">
                <img src={userIconMenu} alt="" />
                Minha conta
              </li>
            </ul>
            <h3
              className="sideMenuItens text_circular_side_menu_color_grey"
              onClick={() => sessionsLogout()}
            >
              <img src={exitIcon} alt="" />
              Sair
            </h3>
          </div>
      </div>
    </>
  );
};

export default CreateCard;
