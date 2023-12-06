import { useContext, useState } from "react";
import Logo from "../logo";
import { SessionsContext } from "../../context/sessionsContext";

const SideBar = ({
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  exitIcon,
  name1,
  name2,
  name3,
  name4,
  name5,
  sideMenuWidth,
  sideMenuHeigth,
  sideMenuPadding,
  sideMenuBackGroundColor,
  sideMenuBorderRadius,
  sideMenuBorderRight,
  sideMenuBoxShadow,
  sideMenuDisplay,
  sideMenuFlexDirection,
  sideMenuJustifyContent,
  sideMenuPosition,
  sideMenuTop,
  sideMenuLeft,
  sideMenuTransition,
  sideMenuGap,
  sideMenuMaxWidth,
  sideMenuPaddingTop,
  sideMenuBarItensDisplay,
  sideMenuBarItensFlexDirection,
  sideMenuBarItensGap,
  sideMenuBarItensJustifyContent,
  sideMenuBarItensAlignItens,
  sideMenuBarCloseButtonDivDisplay,
  sideMenuBarCloseButtonDivJustifyContent,
  sideMenuBarCloseButtonDivAlignItems,
  sideMenuBarCloseButtonColor,
  sideMenuBarCloseButtonBorder,
  sideMenuBarCloseButtonFontSize,
  sideMenuBarCloseButtonDisplay,
  sideMenuItensDisplay,
  sideMenuItensAlignItens,
  sideMenuItensGap
}) => {
  
  const { sessionsLogout ,openSideMenu, setOpenSideMenu,toggleMenu } = useContext(SessionsContext);
  

  const sideMenuBarStyles = {
    width: sideMenuWidth,
    height: sideMenuHeigth,
    padding: sideMenuPadding,
    backgroundColor: sideMenuBackGroundColor,
    borderRadius: sideMenuBorderRadius,
    borderRight: sideMenuBorderRight,
    boxShadow: sideMenuBoxShadow,
    display: sideMenuDisplay,
    flexDirection: sideMenuFlexDirection,
    justifyContent: sideMenuJustifyContent,
    position: sideMenuPosition,
    top: sideMenuTop,
    left: sideMenuLeft,
    transition: sideMenuTransition,
    gap : sideMenuGap,
    paddingTop : sideMenuPaddingTop,
    maxWidth: sideMenuMaxWidth
  };
  const sideMenuBarCloseButtonDiv = {
    display: sideMenuBarCloseButtonDivDisplay,
    justifyContent: sideMenuBarCloseButtonDivJustifyContent,
    alignItems: sideMenuBarCloseButtonDivAlignItems,
  };

  const sideMenuBarCloseButton = {
    backgroundColor : sideMenuBarCloseButtonColor,
    border : sideMenuBarCloseButtonBorder,
    fontSize : sideMenuBarCloseButtonFontSize,
    display : sideMenuBarCloseButtonDisplay
  }

  const sideMenuBarItens = {
    display: sideMenuBarItensDisplay,
    flexDirection: sideMenuBarItensFlexDirection,
    gap: sideMenuBarItensGap,
    justifyContent: sideMenuBarItensJustifyContent,
    alignItems: sideMenuBarItensAlignItens,
  };

  const sideMenuItens = {
    display: sideMenuItensDisplay,
    alignItems: sideMenuItensAlignItens,
    gap: sideMenuItensGap,
    cursor: "pointer"
  }

  return (
    <>
      <div style={sideMenuBarStyles}>
        <div style={sideMenuBarCloseButtonDiv}>
          <Logo width={"153px"} heigth={"39px"} />
          <button
          style={sideMenuBarCloseButton}
            className="text_circular_small_blue_categories_bold"
            onClick={() => toggleMenu()}
          >
            x
          </button>
        </div>
        <ul
          className="text_circular_side_menu_color_grey "
          style={sideMenuBarItens}
        >
          <li style={sideMenuItens}>
            <img src={icon1} alt="" />
            {name1}
          </li>
          <li style={sideMenuItens}>
            <img src={icon2} alt="" />
            {name2}
          </li>
          <li style={sideMenuItens}>
            <img src={icon3} />
            {name3}
          </li>
          <li style={sideMenuItens}>
            <img src={icon4} alt="" />
            {name4}
          </li>
          <li style={sideMenuItens}>
            <img src={icon5} alt="" />
            {name5}
          </li>
        </ul>
        <h3
        style={sideMenuItens}
          className="sideMenuItens text_circular_side_menu_color_grey"
          onClick={() => sessionsLogout()}
        >
          <img src={exitIcon} alt="" />
          Sair
        </h3>
      </div>
    </>
  );
};

export default SideBar;
