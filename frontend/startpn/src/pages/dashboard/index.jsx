import { useContext } from "react";
import Logo from "../../components/logo";
import dropMenu from "../../images/png/Frame.png";
import userIcon from "../../images/png/Bitmap.png";
import messageIcon from "../../images/svg/message.svg";
import settingIcon from "../../images/svg/setting.svg";
import taskIcon from "../../images/png/task-square.png";
import chessIcon from "../../images/svg/vector.svg";
import userIconMenu from "../../images/svg/user-icon.svg";
import exitIcon from "../../images/svg/logout.svg";
import elipse from "../../images/svg/ellipse.svg";
import vector2 from "../../images/svg/vector2.svg";
import plusSignal from "../../images/svg/mais.svg";
import pen from "../../images/svg/pen.svg";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../context/categoriesContext";
import AddCategoriesModal from "../../components/addCategoriesModal";
import { SessionsContext } from "../../context/sessionsContext";
import EditCategoriesModal from "../../components/editCategoriesModal/index.jsx";
import SideBar from "../../components/sideBarmenu";
import HeaderWebVersion from "../../components/headerWebVersion";
import "./dashboard.css";
const DashBoard = () => {
  const {
    categories,
    isModalOpen,
    openModal,
    cards,
    handleCategoryClick,
    activeCategoryId,
    isEditModalOpen,
    openEditModal,
    closeEditModal,
    getCardById,
  } = useContext(CategoriesContext);

  const { openSideMenu, toggleMenu, windowWidth } = useContext(SessionsContext);

  return (
    <>
      <div className="dashboardPageContainer">
        <header className="containerDashboard">
          <div className="headerDivDashBoard">
            <button onClick={() => toggleMenu()} className="dropdownButton">
              <img src={dropMenu} alt="" />
            </button>
            <Logo />
            <img src={userIcon} alt="" />
          </div>
        </header>
        <div className="responsiveContainerDashboard">
          <div className="DashContainer">
            <h1 className="text_circular_color_blue_bold playbookTitle">
              Playbooks
            </h1>
            <HeaderWebVersion
              userIcon={userIcon}
              vector2={vector2}
              headerFromWebVersionTittle={"Playbooks"}
              headerFromWebVersionDisplay={
                windowWidth > 1024 ? "flex" : "none "
              }
              headerFromWebVersionJustifyContent={"space-between"}
              headerFromWebVersionWidth={"100%"}
              headerFromWebVersionMarginTop= {"50px"}
              headerFromWebVersionMarginBotton={"20px"}
              headerFromWebVersionDivBorder={"1px solid #d8d8d8"}
              headerFromWebVersionDivWidth={"157px"}
              headerFromWebVersionDivDisplay={"flex"}
              headerFromWebVersionDivAlignItens={"center"}
              headerFromWebVersionDivJustifyContents={"space-between"}
              headerFromWebVersionDivPadding={"3px 7px"}
              headerFromWebVersionDivBorderRadius={"19px"}
              headerFromWebVersionDivBackGroundColor={"#fff"}
            />
           
            <div className="responsiveContainerCategoriesCards">
              <div className="categoriesBox">
                <h1 className="text_circular_label categoriesBoxTitle ">
                  Categorias
                </h1>
                <ul>
                  {categories.map((categories) => (
                    <li
                      key={categories.id}
                      className={
                        categories.id === activeCategoryId
                          ? "activeCategory"
                          : ""
                      }
                    >
                      <p
                        className="text_circular_small_blue_categories"
                        onClick={() => handleCategoryClick(categories.id)}
                      >
                        {categories.title}
                      </p>
                      <img onClick={() => openEditModal()} src={pen} alt="" />
                    </li>
                  ))}
                  {isEditModalOpen ? (
                    <EditCategoriesModal closeModal={closeEditModal} />
                  ) : null}
                </ul>
                <p
                  onClick={openModal}
                  className="text_circular_small_blue_categories_bold"
                >
                  + Adicionar outra categoria
                </p>
              </div>

              <ul className="cardsUL">
                {cards.map((card) => (
                  <li key={card.id} className="cardContainer">
                    <div className="cardBoxTitle">
                      <h1 className="text_circular_color_black_big_card">
                        {card.name}
                      </h1>
                      <button onClick={() => getCardById(card.id)}>
                        <Link
                          className="text_circular_color_white_title_card"
                          to={`/editcard/${card.id}`}
                        >
                          Editar
                        </Link>
                      </button>
                    </div>
                    <div
                      className="cardContent"
                      dangerouslySetInnerHTML={{ __html: card.text }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

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

          <div className="cornerContainer">
            <div className="ellipseButton">
              <div className="ellipseContainer">
                <Link to="/createcard">
                  <img src={elipse} alt="Ellipse" />
                  <div className="plusSignalContainer">
                    <img
                      className="ellipseCircle"
                      src={plusSignal}
                      alt="Plus Signal"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen ? <AddCategoriesModal /> : null}
      </div>
    </>
  );
};

export default DashBoard;
