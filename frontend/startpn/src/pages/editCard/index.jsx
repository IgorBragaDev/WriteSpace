import { useContext, useEffect, useState } from "react";
import Button from "../../components/button";
import Input from "../../components/inputs";
import navi from "../../images/svg/seta.svg";
import vector2 from "../../images/svg/vector2.svg";
import userIcon from "../../images/png/Bitmap.png";
import messageIcon from "../../images/svg/message.svg";
import settingIcon from "../../images/svg/setting.svg";
import taskIcon from "../../images/png/task-square.png";
import chessIcon from "../../images/svg/Vector.svg";
import userIconMenu from "../../images/svg/user-icon.svg";
import exitIcon from "../../images/svg/logout.svg";
import whiteVector from "../../images/svg/vectorWhite.svg";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { SessionsContext } from "../../context/sessionsContext";
import { CategoriesContext } from "../../context/categoriesContext";
import Logo from "../../components/logo";
import TextEditor from "../../components/textEditor";

const EditCard = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [editorValue, setEditorValue] = useState("");
  const { activeCard, editCard } = useContext(CategoriesContext);
  const { sessionsLogout } = useContext(SessionsContext);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttonPosition =
    windowWidth > 1024
      ? { bottom: "18px", width: "130px", height: "40px" }
      : { top: "18px" };

  useEffect(() => {
    if (activeCard) {
      setEditorValue(activeCard.text || "");
    }
  }, [activeCard]);
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
            <h1 className="text_circular_color_black_big_card">Editar card</h1>
          </div>
        </header>
        <div className="headerFromWebVersionCreateCard">
          <div className="containerNavigationBlue">
            <Link to="/dashboard">
              <img className="navigationCircleBlue" src={whiteVector} alt="" />
            </Link>
            <h1 className="text_circular_color_blue_title">Editar Card</h1>
          </div>
          <div className="headerFromWebVersionDiv">
            <img src={userIcon} alt="" />
            <p className="text_circular_color_black_card_content">Igor Braga</p>
            <img src={vector2} alt="" />
          </div>
        </div>
        <form
          className="createCardForm"
          onSubmit={handleSubmit((data) =>
            editCard(id, { ...data, text: editorValue })
          )}
        >
          <div className="responsiveFotmsCreateCard">
            <Input
              htmlFor={"Nome"}
              name={"Nome"}
              labeltypography={"text_circular_label"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
              inputBorder={"1px solid #D7D7D7"}
              inputBorderRadius={"10px"}
              placeholder={activeCard.name}
              placeholdertypography={"text_circular_placeholder"}
              inputWidth={"100%"}
              inputHeight={"40px"}
              inputMaxWidth={"100%"}
              divWidth={"100%"}
              divMaxWidth={"1100px"}
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
                <option>blabla</option>
              </select>
            </div>
          </div>
          <div className="textAreaBox">
            <TextEditor value={editorValue} setValue={setEditorValue} />
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
            {...buttonPosition}
            rigth={"15px"}
          />
        </form>

        <div className={`sideMenuBar`}>
          <div className="sideMenuBarCloseButtonDiv ">
            <Logo width={"153px"} heigth={"39px"} />
            <button className="text_circular_small_blue_categories_bold">
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

export default EditCard;
