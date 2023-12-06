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
import TextEditor from "../../components/textEditor";
import SideBar from "../../components/sideBarmenu";
import HeaderWebVersion from "../../components/headerWebVersion";

const EditCard = () => {
  const [editorValue, setEditorValue] = useState("");
  const { activeCard, editCard } = useContext(CategoriesContext);
  const { openSideMenu, windowWidth } = useContext(SessionsContext);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

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
        <HeaderWebVersion
            userIcon={userIcon}
            vector2={vector2}
            whiteVector={whiteVector}
            functionFromHeader={"Editar Card"}
            headerFromWebVersionDisplay={windowWidth > 1024 ? "flex" : "none "}
            headerFromWebVersionJustifyContent={"space-between"}
            headerFromWebVersionPadding={"40px 16px 32px"}
            headerFromWebVersionDivBorder={"1px solid #d8d8d8"}
            headerFromWebVersionDivWidth={"157px"}
            headerFromWebVersionDivDisplay={"flex"}
            headerFromWebVersionDivAlignItens={"center"}
            headerFromWebVersionDivJustifyContents={"space-between"}
            headerFromWebVersionDivPadding={"3px 7px"}
            headerFromWebVersionDivBorderRadius={"19px"}
            headerFromWebVersionDivBackGroundColor={"#fff"}
            containerNavigationDisplay={"flex"}
            containerNavigationAlignItens={"center"}
            containerNavigationGap={"12px"}
            navigationCircleBackground={"#476ee6"}
            navigationCirclePadding={"7px"}
            navigationCircleBorderRadius={"24px"}
            setDisplayNoneForH1Display={"none"}
            headerFromWebVersionMarginLeft={"300px"}
          />
       
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

        <SideBar
          icon1={chessIcon}
          name1={"Playbooks"}
          icon2={taskIcon}
          name2={"Exemplo"}
          icon3={messageIcon}
          name3={"Exemplo"}
          icon4={settingIcon}
          name4={"Exemplo"}
          icon5={userIconMenu}
          name5={"Minha conta"}
          exitIcon={exitIcon}
          sideMenuWidth={"75%"}
          sideMenuMaxWidth={windowWidth > 1024 ? "300px" : ""}
          sideMenuHeigth={"100vh"}
          sideMenuPadding={"16px 20px"}
          sideMenuBackGroundColor={"#fff"}
          sideMenuBorderRadius={"17px"}
          sideMenuBorderRight={"1px solid #d7d7d7"}
          sideMenuBoxShadow={
            windowWidth > 1024
              ? "none"
              : "24px 0px 200px 0px rgba(0, 0, 0, 0.4)"
          }
          sideMenuDisplay={"flex"}
          sideMenuFlexDirection={"column"}
          sideMenuPosition={"absolute"}
          sideMenuTop={"0"}
          sideMenuLeft={openSideMenu || windowWidth > 1024 ? "0" : "-1000px"}
          sideMenuTransition={"left 0.3s ease"}
          sideMenuGap={"25%"}
          sideMenuPaddingTop={"50px"}
          sideMenuBarItensDisplay={"flex"}
          sideMenuBarItensFlexDirection={"column"}
          sideMenuBarItensGap={"35px"}
          sideMenuBarItensJustifyContent={"flex-start"}
          sideMenuBarItensAlignItens={"flex-start"}
          sideMenuBarCloseButtonDivDisplay={"flex"}
          sideMenuBarCloseButtonDivJustifyContent={"space-between"}
          sideMenuBarCloseButtonDivAlignItems={"center"}
          sideMenuBarCloseButtonBorder={"none"}
          sideMenuBarCloseButtonColor={"transparent"}
          sideMenuBarCloseButtonFontSize={"20px"}
          sideMenuBarCloseButtonDisplay={windowWidth > 1024 ? "none" : "flex"}
          sideMenuItensDisplay={"flex"}
          sideMenuItensAlignItens={"center"}
          sideMenuItensGap={"10px"}
        />
      </div>
    </>
  );
};

export default EditCard;
